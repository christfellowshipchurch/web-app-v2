import { CheckCircle } from 'phosphor-react';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { Box, Heading } from 'ui-kit';

function AuthSuccess() {
  const modalDispatch = useModalDispatch();
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      modalDispatch(hideModal());
    }, 2000);
  }, [modalDispatch]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      pb="xl"
      height="100%"
      flexDirection="column"
    >
      <CheckCircle color={theme.colors.success} size={64} />
      <Heading color="success" variant="h1" mb="s">
        Success
      </Heading>
    </Box>
  );
}

export default AuthSuccess;
