import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { CurrentUserProvider } from 'providers';
import { logout, useAuth } from 'providers/AuthProvider';
import {
  hideModal,
  useModalDispatch,
  showModal,
} from 'providers/ModalProvider';

import { Box, Button, Icon, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, UserAvatar } from 'components';
import Styled from './Nav.styles';
import { useCurrentBreakpoint } from 'hooks';

function Nav(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const currentBreakpoint = useCurrentBreakpoint();
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  /**
   * todo : Update the handleRouterReload to take a list a specific pages that need to be reloaded after logging as user out. To skip the rest of the pages and continue to reduce the amount of unnecessary reloads.
   */

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  function handleRouterReload(pathname) {
    if (pathname === '/') {
      return null;
    }
    return router.reload();
  }

  function handleLogoutClick(event) {
    event.preventDefault();
    authDispatch(logout());
    handleRouterReload(router.pathname);
    modalDispatch(hideModal());
  }

  return (
    <Styled>
      <QuickAction
        variant="secondary"
        size="s"
        px="base"
        mr="base"
        color={props?.transparentMode ? 'white' : 'primary'}
        borderColor={props?.transparentMode ? 'white' : 'primary'}
        hoverColor={props?.transparentMode ? 'neutrals.400' : null}
        display={{ _: 'none', md: 'inline' }}
        call="Join Us Online"
        action="https://cf.church/watchonline"
      />

      <Box
        as="a"
        href="/discover"
        display={{ _: 'none', md: 'inline' }}
        mr="base"
      >
        <Icon
          name="search"
          color={props?.transparentMode ? 'white' : 'neutrals.800'}
        />
      </Box>

      <Box
        cursor="pointer"
        textDecoration="none"
        onClick={
          currentBreakpoint.isSmall
            ? props?.showMobileNav
            : () => modalDispatch(showModal('NavMenu'))
        }
        mr="s"
      >
        <Icon name="menu" color={props?.transparentMode ? 'white' : 'fg'} />
        <Box as="span" p="xs" color={props?.transparentMode ? 'white' : 'fg'}>
          Menu
        </Box>
      </Box>

      {/* SignIn Icon External Home Page*/}
      {!currentBreakpoint.isSmall && !authenticated && (
        <Box cursor="pointer" textDecoration="none" onClick={handleAuthClick}>
          <Box
            display="flex"
            border="2px solid white"
            justifyContent="center"
            borderRadius="50%"
            size="36px"
          >
            <Icon
              name="user"
              size={20}
              color={props?.transparentMode ? 'white' : 'fg'}
            />
          </Box>
        </Box>
      )}

      <ClientSideComponent>
        {authenticated && (
          <Box
            textAlign="center"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <CurrentUserProvider
              Component={UserAvatar}
              handleAuthClick={handleAuthClick}
              size={'40'}
            />
            <Box
              as="a"
              mt="xs"
              fontSize="12px"
              cursor="pointer"
              onClick={handleLogoutClick}
              color={props?.transparentMode ? 'white' : 'fg'}
            >
              Sign Out
            </Box>
          </Box>
        )}
      </ClientSideComponent>
    </Styled>
  );
}

function QuickAction(props = {}) {
  return (
    <Button {...props} as="a" href={props.action} target="_blank">
      {props?.icon && <Icon color="primary" name="play" mr={'s'} size="18" />}
      {props.call}
    </Button>
  );
}
Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
  transparentMode: PropTypes.bool,
};

Nav.defaultProps = {
  transparentMode: false,
};

export default Nav;
