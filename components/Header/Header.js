import React from 'react';
import Link from 'next/link';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

function Header(props = {}) {
  return (
    <Styled bg="bg_alt" height="90px">
      <Box display="flex" py="base" px="xl" alignSelf="center">
        <Link href="/">
          <a>
            <Logo withText />
          </a>
        </Link>
      </Box>
      <NavigationProvider Component={Nav} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

export default Header;
