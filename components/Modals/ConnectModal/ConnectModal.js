import React from 'react';

import { Modal } from 'ui-kit';
import Form from './ConnectForm';
import Success from './ConnectSuccess';

function ConnectModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0: {
        return <Form {...props} />;
      }
      case 1: {
        return <Success />;
      }
      default: {
        return <Form {...props} />;
      }
    }
  }

  return <Modal {...props}>{render}</Modal>;
}

ConnectModal.propTypes = {
  // ...Modal.propTypes,
};

export default ConnectModal;
