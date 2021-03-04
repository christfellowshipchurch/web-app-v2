import React from 'react';
import PropTypes from 'prop-types';

import { useLiveStream } from 'hooks';

function LiveStreamProvider({ Component, options, ...props }) {
  const { loading, error, liveStream, metaData } = useLiveStream(options);
  return (
    <Component
      data={liveStream}
      metaData={metaData}
      loading={loading}
      error={error}
      {...props}
    />
  );
}

LiveStreamProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default LiveStreamProvider;
