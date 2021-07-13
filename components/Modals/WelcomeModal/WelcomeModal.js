import React from 'react';

import { Box, Button, Modal } from 'ui-kit';

import {
  useModalDispatch,
  hideModal,
  showModal,
} from 'providers/ModalProvider';

function WelcomeModal(props = {}) {
  const modalDispatch = useModalDispatch();

  const close = () => {
    modalDispatch(hideModal());
  };

  const handleLoginClick = event => {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  };

  return (
    <Modal {...props}>
      <Box maxWidth={500} mx="auto" textAlign="center">
        <Box as="h1" mb="base">
          Welcome!
        </Box>
        <Box>
          <Button onClick={close} mr="s">
            Let's get started
          </Button>
          <Button onClick={handleLoginClick} variant="secondary">
            I attend here
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

WelcomeModal.propTypes = {
  ...Modal.propTypes,
};

WelcomeModal.defaultProps = {
  uri: null,
  poster: null,
};

export default WelcomeModal;
