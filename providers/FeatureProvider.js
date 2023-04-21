import React from 'react';
import PropTypes from 'prop-types';

import { useFeature } from 'hooks';
import { NotFound } from 'components';
import { Loader } from 'ui-kit';

function FeatureProvider({ Component, options, ...props }) {
  const { loading, error, feature } = useFeature(options);

  if (loading) {
    return <Loader mt="xxl" mb="xxl" centered text="Loading" />;
  }

  if (!feature) {
    return <NotFound layout={false} />;
  }

  return (
    <Component
      data={{ ...feature, ...props?.dataOverride }}
      loading={loading}
      error={error}
      {...props}
    />
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
