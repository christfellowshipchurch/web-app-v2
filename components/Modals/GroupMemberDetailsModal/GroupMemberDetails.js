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

import { Modal } from 'ui-kit';
import GroupMemberDetailsComponent from 'components/GroupMemberDetails';

const GroupMemberDetails = ({ data }) => {
  return (
    <Modal>
      <GroupMemberDetailsComponent {...data} />
    </Modal>
  );
};

GroupMemberDetails.propTypes = {
  data: PropTypes.shape({}),
};
GroupMemberDetails.defaultProps = {};

export default GroupMemberDetails;
