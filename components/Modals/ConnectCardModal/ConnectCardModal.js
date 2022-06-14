import React from 'react';
import { Modal } from 'ui-kit';
import ConnectCardForm from './ConnectCardForm';
import Confirmation from './Confirmation';

function ConnectCardModal(props = {}) {
  function render(step) {
    switch (step) {
      case 0: {
        return <ConnectCardForm />;
      }
      case 1: {
        return <Confirmation />;
      }
      default: {
        return <ConnectCardForm />;
      }
    }
  }

  return (
    <Modal width={800} {...props}>
      {render}
    </Modal>
  );
}

ConnectCardModal.propTypes = {
  // ...Modal.propTypes,
};

export default ConnectCardModal;
