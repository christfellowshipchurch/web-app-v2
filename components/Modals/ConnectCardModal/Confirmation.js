import React from 'react';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Icon } from 'ui-kit';
import { useRouter } from 'next/router';

const ConfirmationScreen = () => {
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="l"
      textAlign="center"
      px="xxl"
    >
      <Icon name="check" color="success" size="100" />
      <Box as="h2" color="secondary" my="l">
        {!router.asPath.includes('locations')
          ? `You're all set!`
          : `Be sure to check out your email for more details and we'll see you this Sunday.`}
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
