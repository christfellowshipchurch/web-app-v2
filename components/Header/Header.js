import React from 'react';
import Link from 'next/link';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

function Header(props = {}) {
  return (
    <Styled>
      <Link href="/">
        <a>
          <Box as={Logo} mx={{ _: 'auto', md: '0' }} />
        </a>
      </Link>
      <NavigationProvider Component={Nav} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

export default Header;
