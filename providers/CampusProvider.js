import React from 'react';
import PropTypes from 'prop-types';

import { useCampus } from 'hooks';

function CampusProvider({ Component, options, ...props }) {
  const { loading, error, campus } = useCampus(options);
  return <Component {...campus} loading={loading} error={error} {...props} />;
}

CampusProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default CampusProvider;
