import React from 'react';
import PropTypes from 'prop-types';

import { useFeatureFeed } from '../hooks';
import { Box, Loader } from 'ui-kit';

function FeatureFeedProvider({ Component, options, ...props }) {
  const { loading, error, features } = useFeatureFeed(options);

  if (loading) {
    return (
      <Box py="xxl">
        <Loader text="Loading Feed" />
      </Box>
    );
  }

  return (
    <Component data={features} loading={loading} error={error} {...props} />
  );
}

FeatureFeedProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default FeatureFeedProvider;
