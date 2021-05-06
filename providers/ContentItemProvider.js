import React from 'react';
import PropTypes from 'prop-types';

import { useContentItem } from 'hooks';

function ContentItemProvider({ Component, options, ...props }) {
  const { loading, error, item } = useContentItem(options);

  return <Component data={item} error={error} loading={loading} {...props} />;
}

ContentItemProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default ContentItemProvider;
