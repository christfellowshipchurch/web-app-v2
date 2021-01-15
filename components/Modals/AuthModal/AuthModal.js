import React from 'react';

import { useAuthDispatch, reset as resetAuth } from 'providers/AuthProvider';
import { Modal } from 'ui-kit';
import Confirm from './AuthConfirm';
import Details from './AuthDetails';
import Identity from './AuthIdentity';
import Success from './AuthSuccess';

function AuthModal(props = {}) {
  const dispatch = useAuthDispatch();

  function render(step) {
    switch (step) {
      case 0: {
        return <Identity />;
      }
      case 1: {
        return <Details />;
      }
      case 2: {
        return <Confirm />;
      }
      case 3: {
        return <Success />;
      }
      default: {
        return <Identity />;
      }
    }
  }

  return (
    <Modal title="Sign in" onClose={() => dispatch(resetAuth())} {...props}>
      {render}
    </Modal>
  );
}

AuthModal.propTypes = {
  ...Modal.propTypes,
};

export default AuthModal;
