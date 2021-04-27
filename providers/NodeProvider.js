import React from 'react';
import PropTypes from 'prop-types';

import { useNode } from 'hooks';

function NodeProvider({ Component, options, ...props }) {
  const { loading, error, item } = useNode(options);

  return <Component data={item} loading={loading} error={error} {...props} />;
}

NodeProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default NodeProvider;
