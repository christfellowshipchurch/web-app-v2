import React from 'react';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Icon } from 'ui-kit';

const ConfirmationScreen = () => {
  const modalDispatch = useModalDispatch();

  return (
    <Box p="l" textAlign="center" px="xxl">
      <Icon name="check" color="success" size="100" />
      <Box as="h2" color="secondary" my="l">
        You're all set!
      </Box>
      <Button
        borderRadius="xxl"
        size="s"
        px="l"
        onClick={() => modalDispatch(hideModal())}
      >
        CONTINUE
      </Button>
    </Box>
  );
};
export default ConfirmationScreen;
