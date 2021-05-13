import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'ui-kit';

import NotifyMeForm from './NotifyMeForm';

function GroupNotifyMeModal(props = {}) {
  return (
    <Modal {...props}>
      <NotifyMeForm />
    </Modal>
  );
}

GroupNotifyMeModal.propTypes = {
  ...Modal.propTypes,
};

GroupNotifyMeModal.defaultProps = {};

export default GroupNotifyMeModal;
