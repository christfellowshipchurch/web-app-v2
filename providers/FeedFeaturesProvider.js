import React from 'react';
import PropTypes from 'prop-types';

import { useFeedFeatures } from '../hooks';

function FeedFeaturesProvider({ Component, ...props }) {
  const { features } = useFeedFeatures();
  return <Component data={features} {...props} />;
}

FeedFeaturesProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default FeedFeaturesProvider;
