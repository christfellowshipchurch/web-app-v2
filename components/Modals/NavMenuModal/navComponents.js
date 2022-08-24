import React from 'react';
import { useRouter } from 'next/router';

import { logout, useAuth } from 'providers/AuthProvider';
import {
  hideModal,
  showModal,
  useModalDispatch,
} from 'providers/ModalProvider';
import { Box, Icon } from 'ui-kit';

function GetHelp() {
  return (
    <Box
      as="a"
      href="/"
      textDecoration="none"
      display="flex"
      alignItems="center"
      color="primary"
    >
      <Icon name="info" size={18} mb={2} mr={3} />
      <Box as="span" fontSize={14} fontWeight="bold" mb={0}>
        Get Help
      </Box>
    </Box>
  );
}

function SignIn() {
  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  function handleRouterReload(pathname) {
    if (pathname === '/') {
      return null;
    }
    return router.reload();
  }

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  function handleLogoutClick(event) {
    event.preventDefault();
    authDispatch(logout());
    handleRouterReload(router.pathname);
    modalDispatch(hideModal());
  }

  return (
    <Box ml="base">
      {authenticated ? (
        <Box
          as="a"
          color="fg"
          cursor="pointer"
          fontWeight="bold"
          ml="xs"
          onClick={handleLogoutClick}
        >
          Sign Out
        </Box>
      ) : (
        <Box
          as="a"
          href="#0"
          onClick={handleAuthClick}
          display="flex"
          alignItems="center"
          textDecoration="none"
          color="fg"
        >
          <Box
            display="flex"
            border="2px solid"
            justifyContent="center"
            borderRadius="50%"
            size="30px"
          >
            <Icon name="user" size={16} />
          </Box>
          <Box as="span" mb={0} ml="xs" fontSize="14px">
            Sign In
          </Box>
        </Box>
      )}
    </Box>
  );
}

export { SignIn, GetHelp };
