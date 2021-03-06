import React from 'react';
import PropTypes from 'prop-types';

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

  // Most likely an error?
  // Redirect to somewhere else ?
  return null;
}

LiveStreamSingle.propTypes = {
  data: PropTypes.object,
};

export default LiveStreamSingle;
