import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout, Video } from 'components';
import { Box } from 'ui-kit';

function Live(props = {}) {
  const videoSrc = props.data?.media?.sources[0].uri;

  // 👇 OVERRIDE FOR TESTING
  // const videoSrc =
  //   'http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest(format=m3u8-aapl)';

  return (
    <ContentLayout
      title={props.data?.relatedNode?.title}
      summary={props.data?.relatedNode?.summary}
      renderA={() => (
        <Box
          mb="l"
          background={`url(${props.data?.relatedNode?.coverImage?.sources[0]?.uri}) center center no-repeat`}
          backgroundSize="cover"
        >
          <Video src={videoSrc} />
        </Box>
      )}
      renderC={() => (
        <Box
          as="h4"
          display="inline-block"
          bg="live"
          color="white"
          px="s"
          borderRadius="s"
          fontWeight="bold"
        >
          Live Now
        </Box>
      )}
      renderD={() => (
        <Box as="pre" fontSize="s">
          {JSON.stringify(props.data, null, 2)}
          {JSON.stringify(props.metaData, null, 2)}
        </Box>
      )}
    />
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
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
};

export default Live;
