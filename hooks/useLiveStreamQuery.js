import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

export const GET_LIVE_STREAMS = gql`
  query liveStreams {
    liveStreams {
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
  }
`;

function useLiveStreamsQuery(options = {}) {
  const query = useQuery(GET_LIVE_STREAMS, options);

  return {
    liveStreams: query?.data?.liveStreams || [],
    ...query,
  };
}

export default useLiveStreamsQuery;
