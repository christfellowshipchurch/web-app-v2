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
        <Box display="flex">
          <Icon name="search" mr="s" />
          <Icon name="user" mr="s" />
          <Icon name="x" onClick={props?.onClick} />
        </Box>
      </Box>
      {screenStates.find(n => n.key === screenState)?.screen}
    </Styled>
  );
}

NavScreen.propTypes = {};

export default NavScreen;
