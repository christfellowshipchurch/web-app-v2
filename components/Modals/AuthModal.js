import React from 'react';

import { Box, Modal } from '../../ui-kit';

function AuthModal(props = {}) {
  return (
    <Modal title="Sign in" {...props}>
      <Box as="p">This is where the auth form will go&hellip;</Box>
    </Modal>
  );
}

AuthModal.propTypes = {
  ...Modal.propTypes,
};

export default AuthModal;
