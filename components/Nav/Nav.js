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
        display={{ _: 'none', md: 'inline' }}
        data={props.data.quickAction}
      />

      <Box as="a" href="/discover" display={{ _: 'none', md: 'inline' }}>
        <Icon
          name="search"
          color={props?.transparentMode ? 'white' : 'neutrals.800'}
        />
      </Box>

      {/* New Menu */}
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

      {showMobileNav && (
        <MobileNavScreen onClick={() => setShowMobileNav(!showMobileNav)} />
      )}

      {/* <Menu
        cardContentProps={{
          p: '0',
          py: 's',
        }}
        renderTrigger={({ toggle }) => (
          <Box as="a" textDecoration="none" href="#0" onClick={toggle}>
            <Icon name="menu" color={props?.transparentMode ? 'white' : 'fg'} />
            <Box
              as="span"
              p="xs"
              color={props?.transparentMode ? 'white' : 'fg'}
            >
              Menu
            </Box>
          </Box>
        )}
        side="right"
        menuWidth="245px"
      >
        <List py="xs" space="0">
          <Box as="li" display={{ _: 'inline', md: 'none' }}>
            <ClientSideComponent>
              {authenticated && (
                <Menu.Link>
                  <Box
                    borderBottom="solid lightgrey 1px"
                    ml="s"
                    pl="s"
                    py="s"
                    mr="base"
                    mb="s"
                    display="flex"
                    alignItems="center"
                  >
                    <CurrentUserProvider
                      Component={UserAvatar}
                      handleAuthClick={handleAuthClick}
                      size={'25px'}
                    />
                    <Box as="p" ml="xs">
                      Profile
                    </Box>
                  </Box>
                </Menu.Link>
              )}
            </ClientSideComponent>
            <Menu.Link>
              <QuickAction
                py="xs"
                variant="link"
                icon
                data={props.data.quickAction}
              />
            </Menu.Link>
          </Box>
          <Primary data={props.data.navigationLinks} />
          <MenuLinks data={props.data.menuLinks} />
          <Box as="li">
            {authenticated ? (
              <Menu.Link
                href="#0"
                onClick={handleLogoutClick}
                px="base"
                py="xs"
                mt="10px"
                borderTop="1px solid"
                borderColor="border"
              >
                <Icon name="signOut" mr="s" size="18" />
                Sign out
              </Menu.Link>
            ) : (
              <Menu.Link
                href="#0"
                onClick={handleAuthClick}
                px="base"
                py="xs"
                mt="10px"
                borderTop="1px solid"
                borderColor="border"
              >
                <Icon name="signIn" mr="s" size="18" />
                Sign in
              </Menu.Link>
            )}
          </Box>
        </List>
      </Menu> */}
      <ClientSideComponent display={{ _: 'none', md: 'block' }}>
        {authenticated ? (
          <CurrentUserProvider
            Component={UserAvatar}
            handleAuthClick={handleAuthClick}
          />
        ) : (
          <Box
            as="a"
            href="#0"
            onClick={handleAuthClick}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textDecoration="none"
          >
            <Box
              display="flex"
              border="2px solid"
              justifyContent="center"
              borderColor={props?.transparentMode ? 'white' : 'fg'}
              borderRadius="50%"
              size="30px"
            >
              <Icon
                name="user"
                size={16}
                color={props?.transparentMode ? 'white' : 'fg'}
              />
            </Box>
            <Box
              as="span"
              mt="0.15rem"
              color={props?.transparentMode ? 'white' : 'fg'}
              fontSize="12px"
            >
              Sign In
            </Box>
          </Box>
        )}
      </ClientSideComponent>
    </Styled>
  );
}

function Primary(props = {}) {
  return props.data.map((item, idx) => (
    <Box key={idx} as="li">
      <Menu.Link href={item.action} px="base" py="xs">
        <Icon name={item.icon} mr="s" size="18" />
        {item.call}
      </Menu.Link>
    </Box>
  ));
}

function QuickAction(props = {}) {
  return (
    <Button {...props} as="a" href={props.data.action} target="_blank">
      {props?.icon && <Icon color="primary" name="play" mr={'s'} size="18" />}
      {props.data.call}
    </Button>
  );
}

function MenuLinks(props = {}) {
  return props.data.map((item, idx) => (
    <Box key={idx} as="li">
      <Menu.Link
        href={item.action}
        target={item.target}
        textDecoration="none"
        px="base"
        py="xs"
      >
        <Icon name={item.icon} mr="s" size="18" />
        {item.call}
      </Menu.Link>
    </Box>
  ));
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
