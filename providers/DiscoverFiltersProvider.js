import React from 'react';
import PropTypes from 'prop-types';

import { useDiscoverFilters } from 'hooks';

function DiscoverFiltersProvider({ Component, options, ...props }) {
  const { loading, error, filters } = useDiscoverFilters(options);
  return (
    <Component data={filters} loading={loading} error={error} {...props} />
  );
}

DiscoverFiltersProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default DiscoverFiltersProvider;
