import React, { useState } from 'react';
import { Box, Icon } from 'ui-kit';

import Styled from './NavScreen.styles';
import Logo from 'components/Logo';
import navData from 'config/mobile-nav-links';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { logout, useAuth } from 'providers/AuthProvider';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { useRouter } from 'next/router';

function NavScreen(props) {
  const [{ authenticated }, authDispatch] = useAuth();
  const [screenState, setScreenState] = useState('Main');
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
    props?.onClose();
    handleRouterReload(router.pathname);
  }

  const screenStates = [
    {
      key: 'Main',
      screen: <MainMenu {...navData} onChange={e => setScreenState(e)} />,
    },
    // {
    //   key: 'Locations',
    //   screen: (
    //     <SubMenu
    //       {...navData?.additionalLinks?.find(n => n?.title === 'Locations')}
    //       goBack={() => setScreenState('Main')}
    //     />
    //   ),
    // },
    {
      key: 'Messages & Content',
      screen: (
        <SubMenu
          {...navData?.additionalLinks?.find(
            n => n?.title === 'Messages & Content'
          )}
          goBack={() => setScreenState('Main')}
        />
      ),
    },
    {
      key: 'Next Steps',
      screen: (
        <SubMenu
          {...navData?.additionalLinks?.find(n => n?.title === 'Next Steps')}
          goBack={() => setScreenState('Main')}
        />
      ),
    },
    {
      key: 'Ministries',
      screen: (
        <SubMenu
          {...navData?.additionalLinks?.find(n => n?.title === 'Ministries')}
          goBack={() => setScreenState('Main')}
        />
      ),
    },
  ];

  return (
    <Styled>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="base"
        width="inherit"
      >
        <Logo />
        <Box display="flex" alignItems="center">
          <Box as="a" color="black" href="/discover" mr="base">
            <Icon name="search" />
          </Box>
          {authenticated ? (
            <Box
              display="flex"
              flexDirection="column"
              mt="5px"
              mr="base"
              onClick={handleLogoutClick}
            >
              <Icon name="sign-out" size={16} />
              <Box as="span" fontSize="10px">
                Sign Out
              </Box>
            </Box>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              mt="5px"
              mr="base"
              onClick={handleAuthClick}
            >
              <Icon name="user" size={16} />
              <Box as="span" fontSize="10px">
                Sign In
              </Box>
            </Box>
          )}
          <Icon name="x" onClick={props?.onClose} />
        </Box>
      </Box>
      <Box bg="white">
        {screenStates.find(n => n.key === screenState)?.screen}
      </Box>
    </Styled>
  );
}

NavScreen.propTypes = {};

export default NavScreen;
