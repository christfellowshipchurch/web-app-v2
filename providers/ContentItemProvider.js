import React from 'react';
import PropTypes from 'prop-types';

import { useContentItem } from 'hooks';
import { NotFound } from 'components';
import { Box, Loader } from 'ui-kit';

function ContentItemProvider({ Component, options, ...props }) {
  const { loading, error, item } = useContentItem(options);

  if (loading) {
    return <Loader mt="xxl" mb="xxl" centered text="Loading" />;
  }

  if (!item) {
    return <NotFound layout={false} />;
  }

  return <Component data={item} loading={loading} error={error} {...props} />;
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
