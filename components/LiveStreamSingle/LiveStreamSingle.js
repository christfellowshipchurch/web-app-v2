import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { Box } from 'ui-kit';

import PreLive from './PreLive';
import Live from './Live';
import PostLive from './PostLive';

function LiveStreamSingle(props = {}) {
  if (props.metaData?.isLive) {
    return <Live {...props} />;
  }

  if (props.metaData?.isBefore) {
    return <PreLive {...props} />;
  }

  if (props.metaData?.isAfter) {
    return <PostLive {...props} />;
  }

  if (!props.data) {
    return null;
  }

  // Most likely an error?
  // Redirect to somewhere else ?
  return (
    <ContentLayout
      title={props.data?.relatedNode?.title}
      summary={props.data?.relatedNode?.summary}
      coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
      renderD={() => (
        <Box>
          <Box as="p" color="alert" mb="l">
            ⚠️ Unhandled livestream state. It is not currently live, upcoming,
            or recently ended.
            <br />
            This most likely means one or both of the <code>
              start
            </code> and <code>end</code> dates were <code>null</code>.
          </Box>
          <Box as="pre" fontSize="xs">
            {JSON.stringify(props, null, 2)}
          </Box>
        </Box>
      )}
    />
  );
}

LiveStreamSingle.propTypes = {
  data: PropTypes.object,
};

export default LiveStreamSingle;
