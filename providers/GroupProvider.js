import React from 'react';
import PropTypes from 'prop-types';

import { useGroup } from '../hooks';

function GroupProvider({ Component, title, ...props }) {
  const { loading, error, group } = useGroup({ variables: { itemId: title } });
  return <Component data={group} loading={loading} error={error} {...props} />;
}

GroupProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  title: PropTypes.string.isRequired,
};

export default GroupProvider;
