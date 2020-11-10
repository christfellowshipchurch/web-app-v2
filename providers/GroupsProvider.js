import React from 'react';
import PropTypes from 'prop-types';

import { useGroups } from '../hooks';

function GroupsProvider({ Component, ...props }) {
  const { loading, error, groups } = useGroups();
  return <Component data={groups} loading={loading} error={error} {...props} />;
}

GroupsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default GroupsProvider;
