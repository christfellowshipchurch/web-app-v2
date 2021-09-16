/**
 * GroupMemberStatusBadge.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * Visual Badge to display various statuses for Group Members
 *
 * ! : not all statuses should have a visual element associated with them. This component should should expect to return the following for Group Member Statuses
 *
 * Inactive : component
 * Pending  : component
 * Active   : null
 * other    : null
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';

const GroupMemberStatusBadge = ({ status }) => {
  const key = status.toUpperCase();

  if (key === 'INACTIVE') {
    return (
      <Box
        as="p"
        fontSize="0.55rem"
        fontWeight="bold"
        lineHeight="1"
        mb="2px"
        textTransform="uppercase"
        color="alert"
      >
        Inactive
      </Box>
    );
  }

  if (key === 'PENDING') {
    return (
      <Box
        as="span"
        px="8px"
        py="2px"
        fontSize="0.55rem"
        fontWeight="bold"
        lineHeight="1"
        textTransform="uppercase"
        color="white"
        backgroundColor="warning"
        borderRadius="12px"
      >
        Pending
      </Box>
    );
  }

  return null;
};

GroupMemberStatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};
GroupMemberStatusBadge.defaultProps = {};

export default GroupMemberStatusBadge;
