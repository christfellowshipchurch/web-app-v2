/**
 * GroupMemberDetailsModal.js
 *
 * Author: Caleb Panza
 * Created: Sep 08, 2021
 *
 * Modal that displays information about a single Group Member
 */

import React from 'react';
import PropTypes from 'prop-types';

import GroupMemberDetails from './GroupMemberDetails';
import { GroupMemberProvider } from 'providers';

function GroupMemberDetailsModal({ id }) {
  console.log('Hello??');
  return (
    <GroupMemberProvider
      Component={GroupMemberDetails}
      options={{ variables: { id } }}
    />
  );
}

GroupMemberDetailsModal.propTypes = {
  id: PropTypes.string.isRequired,
};
GroupMemberDetailsModal.defaultProps = {};

export default GroupMemberDetailsModal;
