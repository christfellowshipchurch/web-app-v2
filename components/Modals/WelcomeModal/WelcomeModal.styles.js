import React from 'react';

import { Box, Button, Modal } from 'ui-kit';

function WelcomeModal(props = {}) {
  return (
    <Modal {...props}>
      <Box maxWidth={500} mx="auto" textAlign="center">
        <Box as="h1" mb="base">
          Welcome!
        </Box>
        <Box>
          <Button mr="s">Let's get started</Button>
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
