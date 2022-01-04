/**
 * GroupMemberProvider.js
 *
 * Author: Caleb Panza
 * Created: Sep 08, 2021
 *
 * Provider for the useGroupMember hook
 */

import React from 'react';
import PropTypes from 'prop-types';

import { useGroupMember } from 'hooks';

function GroupMemberProvider({ Component, options, ...props }) {
  const { loading, error, groupMember } = useGroupMember(options);
  return (
    <Component data={groupMember} loading={loading} error={error} {...props} />
  );
}

GroupMemberProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupMemberProvider;
