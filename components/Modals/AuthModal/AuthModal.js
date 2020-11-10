import React from 'react';

import { useAuthState } from '../../../providers/AuthProvider';
import { Modal } from '../../../ui-kit';
import Screens from './';

function AuthModal(props = {}) {
  const state = useAuthState();

  function render() {
    switch (state.step) {
      case 0: {
        return <Screens.Identity />;
      }
      case 1: {
        return <Screens.Details />;
      }
      case 2: {
        return <Screens.Confirm />;
      }
      case 3: {
        return <Screens.Success />;
      }
      default: {
        return <Screens.Identity />;
      }
    }
  }

  return (
    <Modal title="Sign in" {...props}>
      {render()}
    </Modal>
  );
}

AuthModal.propTypes = {
  ...Modal.propTypes,
};

export default AuthModal;
