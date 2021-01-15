import React from 'react';
import PropTypes from 'prop-types';

import { useCampuses } from 'hooks';

function CampusesProvider({ Component, options, ...props }) {
  const { loading, error, campuses } = useCampuses(options);
  return (
    <Component data={campuses} loading={loading} error={error} {...props} />
  );
}

CampusesProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default CampusesProvider;
