import React from 'react';
import PropTypes from 'prop-types';

import { useFeedFeatures } from '../hooks';

function FeedFeaturesProvider({ Component, options, ...props }) {
  const { loading, error, features } = useFeedFeatures(options);
  return (
    <Component data={features} loading={loading} error={error} {...props} />
  );
}

FeedFeaturesProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default FeedFeaturesProvider;
