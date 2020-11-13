import React from 'react';
import PropTypes from 'prop-types';

import { useGroup } from '../hooks';

function GroupProvider({ Component, options, ...props }) {
  const { loading, error, group } = useGroup(options);
  return <Component data={group} loading={loading} error={error} {...props} />;
}

GroupProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupProvider;
