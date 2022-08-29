import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { CurrentUserProvider } from 'providers';
import { logout, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, Icon, Menu, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, MobileNavScreen, UserAvatar } from 'components';
import Styled from './Nav.styles';
import { useCurrentBreakpoint } from 'hooks';

function Nav(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const currentBreakpoint = useCurrentBreakpoint();
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  /**
   * todo : Update the handleRouterReload to take a list a specific pages that need to be reloaded after logging as user out. To skip the rest of the pages and continue to reduce the amount of unnecessary reloads.
   */
  function handleRouterReload(pathname) {
    if (pathname === '/') {
      return null;
    }
    return router.reload();
  }

  function handleAuthClick(event) {
    event.preventDefault();
    setShowMobileNav(false);
    modalDispatch(showModal('Auth'));
  }

  function handleLogoutClick(event) {
    event.preventDefault();
    authDispatch(logout());
    handleRouterReload(router.pathname);
  }

  return (
    <Styled>
      <QuickAction
        variant="secondary"
        size="s"
        px="base"
        color={props?.transparentMode ? 'white' : 'primary'}
        borderColor={props?.transparentMode ? 'white' : 'primary'}
        hoverColor={props?.transparentMode ? 'neutrals.400' : null}
        display={{ _: 'none', md: 'inline' }}
        data={props.data.quickAction}
      />

      <Box as="a" href="/discover" display={{ _: 'none', md: 'inline' }}>
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
            ? () => setShowMobileNav(!showMobileNav)
            : () => modalDispatch(showModal('NavMenu'))
        }
      >
        <Icon name="menu" color={props?.transparentMode ? 'white' : 'fg'} />
        <Box as="span" p="xs" color={props?.transparentMode ? 'white' : 'fg'}>
          Menu
        </Box>
      </Box>

      {authenticated && !showMobileNav && (
        <CurrentUserProvider
          Component={UserAvatar}
          handleAuthClick={handleAuthClick}
          size={40}
        />
      )}

      {showMobileNav && (
        <MobileNavScreen
          onClose={() => setShowMobileNav(!showMobileNav)}
          auth={authenticated}
          handleAuth={handleAuthClick}
          handleLogout={handleLogoutClick}
        />
      )}
    </Styled>
  );
}

function QuickAction(props = {}) {
  return (
    <Button {...props} as="a" href={props.data.action} target="_blank">
      {props?.icon && <Icon color="primary" name="play" mr={'s'} size="18" />}
      {props.data.call}
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
