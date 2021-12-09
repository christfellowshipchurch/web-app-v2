import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'ui-kit';


function GroupEmailRecipientModal(props = {}) {
  return (
    <Modal {...props}>
      
    </Modal>
  );
}

GroupEmailRecipientModal.propTypes = {
  groupId: PropTypes.string.isRequired
};

GroupEmailRecipientModal.defaultProps = {};

export default GroupEmailRecipientModal;
