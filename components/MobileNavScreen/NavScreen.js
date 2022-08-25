import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from 'ui-kit';

import Styled from './NavScreen.styles';
import Logo from 'components/Logo';
import navData from 'config/mobile-nav-links';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

function NavScreen(props) {
  const [screenState, setScreenState] = useState('Main');

  const screenStates = [
    {
      key: 'Main',
      screen: <MainMenu {...navData} onChange={e => setScreenState(e)} />,
    },
    {
      key: 'Locations',
      screen: (
        <SubMenu
          {...navData?.additionalLinks?.find(n => n?.title === 'Locations')}
          goBack={() => setScreenState('Main')}
        />
      ),
    },
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
          <Box as="a" color="black" href="/discover" mr="0.8rem">
            <Icon name="search" />
          </Box>
          {props?.auth ? (
            <Icon
              name="sign-out"
              size={18}
              mr="0.8rem"
              onClick={props?.handleLogout}
            />
          ) : (
            <Icon name="user" mr="0.8rem" onClick={props?.handleAuth} />
          )}
          <Icon name="x" onClick={props?.onClose} />
        </Box>
      </Box>
      {screenStates.find(n => n.key === screenState)?.screen}
    </Styled>
  );
}

NavScreen.propTypes = {};

export default NavScreen;
