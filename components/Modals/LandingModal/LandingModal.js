import React from 'react';

import { Box, Button, Modal } from 'ui-kit';

function LandingModal(props = {}) {
  return (
    <Modal {...props} width="50vw">
      <Box as="h2">Welcome!</Box>
      <Box display="flex" mx="auto">
        <Button mr="s">Let's get started</Button>
        <Button variant="secondary">I attend here</Button>
      </Box>
    </Modal>
  );
}

LandingModal.propTypes = {
  ...Modal.propTypes,
};

LandingModal.defaultProps = {
  uri: null,
  poster: null,
};

export default LandingModal;
