import React from 'react';
import PropTypes from 'prop-types';

import { useDiscoverFilterCategories } from 'hooks';

function DiscoverFiltersCategoriesProvider({ Component, options, ...props }) {
  const { loading, error, categories } = useDiscoverFilterCategories(options);
  return (
    <Component data={categories} loading={loading} error={error} {...props} />
  );
}

DiscoverFiltersCategoriesProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default DiscoverFiltersCategoriesProvider;
