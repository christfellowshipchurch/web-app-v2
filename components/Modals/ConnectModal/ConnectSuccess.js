import React from 'react';

import { hideModal, useModalDispatch } from 'providers/ModalProvider';

import { Box, Button, Icon } from 'ui-kit';

function ConnectSuccess() {
  const dispatch = useModalDispatch();

  function handleClose(event) {
    event.preventDefault();
    dispatch(hideModal());
  }

  return (
    <Box textAlign="center" display="flex" flexDirection="column">
      <Icon name="checkCirle" size="95" mb="base" color="primary" />

      <Box as="h2">Your message was sent.</Box>
      <Box as="p" color="subdued" mb="l" px="base">
        Someone will reach out to you soon.
      </Box>
      <Button onClick={handleClose}>Continue</Button>
    </Box>
  );
}

export default ConnectSuccess;
