import React from 'react';
import PropTypes from 'prop-types';

import { useGroups } from 'hooks';

function GroupsProvider({ Component, options, ...props }) {
  const { loading, error, groups } = useGroups(options);
  return <Component data={groups} loading={loading} error={error} {...props} />;
}

GroupsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupsProvider;
