import React from 'react';
import PropTypes from 'prop-types';

import { useContentBlockFeature } from 'hooks';
import { NotFound } from 'components';
import { Loader } from 'ui-kit';

function ContentBlockProvider({ Component, options, ...props }) {
  const { loading, error, block } = useContentBlockFeature(options);

  if (loading) {
    return <Loader mt="xxl" mb="xxl" centered text="Loading" />;
  }

  if (!block) {
    return <NotFound layout={false} />;
  }

  return <Component data={block} loading={loading} error={error} {...props} />;
}

ContentBlockProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default ContentBlockProvider;
