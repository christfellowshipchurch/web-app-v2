import React from 'react';

import { Box, Button, Modal } from 'ui-kit';

import { useModalDispatch, hideModal } from 'providers/ModalProvider';

function WelcomeModal(props = {}) {
  const modalDispatch = useModalDispatch();

  const close = () => {
    modalDispatch(hideModal());
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
          <Button variant="secondary">I attend here</Button>
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
