import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

function Header(props = {}) {
  const [bgColor, setBgColor] = useState('transparent');
  const offset = 150;

  // Change Navbar color on ScrollPosition,
  useScrollPosition(({ currPos }) => {
    const opaque = currPos.y > -1 * offset;
    setBgColor(opaque ? 'transparent' : 'secondary');
  });

  const darkModeProps = props?.darkMode
    ? {
        bg: bgColor,
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
