import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout, Video } from 'components';
import { Box } from 'ui-kit';

function LiveStreamSingle(props = {}) {
  // const videoSrc = props.data?.media?.sources[0].uri;

  // 👇 OVERRIDE FOR TESTING
  const videoSrc =
    'http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest(format=m3u8-aapl)';

  return (
    <>
      <ContentLayout
        title={props.data?.relatedNode?.title}
        summary={props.data?.relatedNode?.summary}
        renderA={() => (
          <Box
            mb="l"
            background={`url(${props.data?.relatedNode?.coverImage?.sources[0]?.uri}) center center no-repeat`}
            backgroundSize="cover"
          >
            <Video autoPlay={true} src={videoSrc} />
          </Box>
        )}
      />
    </>
  );
}

LiveStreamSingle.propTypes = {
  data: PropTypes.object,
};

export default LiveStreamSingle;
