import React from 'react';
import PropTypes from 'prop-types';

import { useGroupResourceOptions } from 'hooks';

function GroupResourceOptionsProvider({ Component, options, ...props }) {
  const { loading, error, groupResourceOptions } = useGroupResourceOptions(
    options
  );
  return (
    <Component
      data={groupResourceOptions}
      loading={loading}
      error={error}
      {...props}
    />
  );
}

GroupResourceOptionsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupResourceOptionsProvider;
