import React from 'react';

import { hideModal, useModalDispatch } from 'providers/ModalProvider';

import { Box, Button } from 'ui-kit';

function ConnectSuccess() {
  const dispatch = useModalDispatch();

  function handleClose(event) {
    event.preventDefault();
    dispatch(hideModal());
  }

  return (
    <Box textAlign="center" display="flex" flexDirection="column">
      <Box as="p" fontSize="90px">
        🚀
      </Box>
      <Box as="h1">Success!</Box>
      <Box as="p" color="subdued" mb="l" px="120px">
        Your message was sent. Someone will reach out to you soon.
      </Box>
      <Button onClick={handleClose}>Continue</Button>
    </Box>
  );
}

export default ConnectSuccess;
