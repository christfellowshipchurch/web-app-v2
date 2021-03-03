import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { isEmpty } from 'lodash';
import {
  differenceInSeconds,
  isAfter,
  isBefore,
  parseISO,
  differenceInMilliseconds,
  subSeconds,
} from 'date-fns';

export const GET_LIVE_STREAM = gql`
  query getLiveStream($id: ID!) {
    node(id: $id) {
      __typename
      id
      ...LiveStreamFragment
      ...StreamChatChannelNodeFragment
    }
  }

  # These fragments *could* be defined somewhere more centralized.
  # ✂️ ------------------------------------------------------------------------
  fragment LiveStreamFragment on LiveStream {
    id
    eventStartTime
    eventEndTime
    isLive
    media {
      sources {
        uri
      }
    }

    relatedNode {
      id
      ... on ContentNode {
        title
        coverImage {
          sources {
            uri
          }
        }
      }
      ... on EventContentItem {
        title
        coverImage {
          sources {
            uri
          }
        }
      }
    }
  }

  fragment StreamChatChannelNodeFragment on StreamChatChannelNode {
    streamChatChannel {
      id
      channelId
      channelType
    }
  }
  # ✂️ ------------------------------------------------------------------------
`;

/**
 * useLiveStream
 * Hook to handle the status and refetching of a single live stream node
 * @param {number} args.liveStreamId | Live Stream Id
 */
const useLiveStream = ({ liveStreamId }) => {
  /**
   * note : there was an issue where even when `skip` was passed a truthy value,
   * it still wasn't skipping the query and this was causing ID parsing errors on the API.
   * They are handled gracefully by the API, but it'll still throw unnecessary errors.
   * The following GitHub issues describes the error perfectly and suggests using the
   * fetch-policy as a hacky way to avoid network requests unnecessarily being made.
   * https://github.com/apollographql/apollo-client/issues/6190
   */
  const fiveMins = 60 * 5;
  const skip = !liveStreamId || isEmpty(liveStreamId) || liveStreamId === '';

  // State
  const [nowIsBefore, setNowIsBefore] = useState(false);
  const [nowIsAfter, setNowIsAfter] = useState(false);
  const [nextRefetch, setNextRefetch] = useState(null);

  // Fetch
  const { data, loading, error, refetch } =
    useQuery(GET_LIVE_STREAM, {
      variables: { id: liveStreamId || '' },
      skip,
      fetchPolicy: 'network-only',

      onCompleted: ({ data }) => {
        const startDate = data?.node?.eventStartTime
          ? parseISO(data?.node?.eventStartTime)
          : null;
        const endDate = data?.node?.eventEndTime
          ? parseISO(data?.node?.eventEndTime)
          : null;

        if (startDate) setNowIsBefore(isBefore(new Date(), startDate));
        if (endDate) {
          setNowIsAfter(isAfter(new Date(), endDate));

          /**
           * If right now is more than 5 minutes out from the end of the stream, set the next refetch of data to be 5 minutes before the stream ends
           */

          if (differenceInSeconds(endDate, new Date()) >= fiveMins) {
            const fiveMinsBeforeEnd = subSeconds(endDate, fiveMins);
            setNextRefetch(
              differenceInMilliseconds(fiveMinsBeforeEnd, new Date())
            );
          }
        }
      },
    }) || {};

  // Effects
  useEffect(() => {
    const refetchTimer = setTimeout(() => {
      // Refetch the data
      refetch();

      /**
       * If right now is within the last 5 minutes of the stream, fetch new data every 30 seconds
       */
      const endDate = data?.node?.eventEndTime
        ? parseISO(data?.node?.eventEndTime)
        : null;

      if (differenceInSeconds(endDate, new Date()) < fiveMins) {
        setNextRefetch(30000);
      }
    }, nextRefetch);

    return function cleanup() {
      if (refetchTimer) clearTimeout(refetchTimer);
    };
  }, [nextRefetch, refetch, fiveMins, data?.node]);

  useEffect(() => {}, [data]);

  useEffect(() => {
    const startDate = data?.node?.eventStartTime
      ? parseISO(data?.node?.eventStartTime)
      : null;
    const endDate = data?.node?.eventEndTime
      ? parseISO(data?.node?.eventEndTime)
      : null;
    // Set a timer if the current time is before the start of the event
    const startTimerId = nowIsBefore
      ? setTimeout(() => {
          setNowIsBefore(false);
        }, differenceInMilliseconds(startDate, new Date()))
      : null;
    const endTimerId = !nowIsAfter
      ? setTimeout(() => {
          setNowIsAfter(isAfter(new Date(), endDate));
        }, differenceInMilliseconds(endDate, new Date()))
      : null;

    // Clean up out timers if a user exits before the timer goes off
    return function cleanup() {
      if (startTimerId) clearTimeout(startTimerId);
      if (endTimerId) clearTimeout(endTimerId);
    };
  }, [nowIsBefore, nowIsAfter, data?.node]);

  return {
    loading,
    error,
    liveStream: data?.node,
    metaData: {
      isLive: data?.node?.isLive,
      isBefore: nowIsBefore,
      isAfter: data?.node?.eventEndTime
        ? isAfter(new Date(), parseISO(data?.node?.eventEndTime))
        : false,
      startTime: data?.node?.eventStartTime,
      endTime: data?.node?.eventEndTime,
      startDate: data?.node?.eventStartTime
        ? parseISO(data?.node?.eventStartTime)
        : null,
      endDate: data?.node?.eventEndTime
        ? parseISO(data?.node?.eventEndTime)
        : null,
    },
  };
};

useLiveStream.propTypes = {
  liveStreamId: PropTypes.string,
};

export default useLiveStream;
