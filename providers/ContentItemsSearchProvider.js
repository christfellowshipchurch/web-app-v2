import React from 'react';
import PropTypes from 'prop-types';

import { useSearchContentItems } from 'hooks';

function ContentItemsSearchProvider({ Component, options, ...props }) {
  const { loading, error, contentItems } = useSearchContentItems(options);
  return (
    <Component data={contentItems} loading={loading} error={error} {...props} />
  );
}

ContentItemsSearchProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default ContentItemsSearchProvider;
