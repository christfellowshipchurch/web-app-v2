import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import Styled from './Header.styles';

function Header(props = {}) {
  const [bgColor, setBgColor] = useState('transparent');
  const [navOpacity, setOpacity] = useState(1);

  const currentBreakpoint = useCurrentBreakpoint();

  const offset = 150;
  //This is currently set for the External Marketing page:
  const hidePosition = currentBreakpoint.isSmall ? -8300 : -5800;

  // Change Navbar color on ScrollPosition,
  useScrollPosition(({ currPos }) => {
    const opaque = currPos.y > -1 * offset;
    const invisible = currPos.y < hidePosition;
    setBgColor(opaque ? 'transparent' : 'secondary');
    setOpacity(invisible ? 0 : 1);
  });

  const darkModeProps = props?.darkMode
    ? {
        bg: bgColor,
        opacity: navOpacity,
        boxShadow: 'none',
        position: 'fixed',
      }
    : {
        bg: 'white',
        boxShadow: 'base',
        position: 'relative',
      };

  return (
    <Styled {...darkModeProps} {...props}>
      <Link href="/">
        <a>
          <Box
            as={Logo}
            dark={props?.darkMode}
            mx={{ _: 'auto', md: '0' }}
            mb="0"
          />
        </a>
      </Link>
      <NavigationProvider Component={Nav} {...props} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
  darkMode: PropTypes.bool,
};

Header.defaultProps = {
  darkMode: false,
};

export default Header;
