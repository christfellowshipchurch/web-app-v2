import React from 'react';
import PropTypes from 'prop-types';

import { useFeature } from '../hooks';

function FeatureProvider({ Component, options, ...props }) {
  const { loading, error, feature } = useFeature(options);
  if (feature?.title === 'Stay in the Know') {
    console.log(feature?.id);
  }
  return (
    <Component data={feature} loading={loading} error={error} {...props} />
  );
}

FeatureProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default FeatureProvider;
