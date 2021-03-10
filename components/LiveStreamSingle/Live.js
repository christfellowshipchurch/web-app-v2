import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Video } from 'components';
import { Box, Loader } from 'ui-kit';

import Styled from './Live.styles';

function Live(props = {}) {
  const videoSrc = props.data?.media?.sources[0].uri;

  // 👇 OVERRIDE FOR TESTING
  // const videoSrc =
  //   'http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest(format=m3u8-aapl)';
  if (props.loading) {
    return (
      <Box display="flex" flexDirection="row" justifyContent="center" my="xxl">
        <Loader />
      </Box>
    );
  }
  console.log('props:', props);

  return (
    <Styled.Container>
      <Styled.Video>
        <Video src={videoSrc} autoPlay={false} muted={true} />
      </Styled.Video>
      <Styled.MastHead>
        <Box as="h1">{props.data.relatedNode?.title}</Box>
        {props.data.relatedNode?.summary && (
          <Box as="h3">{props.data.relatedNode?.summary}</Box>
        )}
        <Box as="p" color="subdued">
          Starts: {format(props.metaData?.startDate, "EEEE M/dd 'at' H:mm a")}
          <br />
          Ends: {format(props.metaData?.startDate, "EEEE M/dd 'at' H:mm a")}
        </Box>
      </Styled.MastHead>
      <Styled.Chat>
        <h1>Chat</h1>
      </Styled.Chat>
    </Styled.Container>
  );
}

Live.propTypes = {
  data: PropTypes.object,
  // @see `useLiveStream` hook
  metaData: PropTypes.shape({
    isLive: PropTypes.bool,
    isBefore: PropTypes.bool,
    isAfter: PropTypes.bool,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
};

export default Live;
