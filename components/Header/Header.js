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
  return (
    <Styled bg="white" position="relative" boxShadow="base" {...props}>
      <Link href="/">
        <a>
          <Box as={Logo} mx={{ _: 'auto', md: '0' }} mb="0" />
        </a>
      </Link>
      <NavigationProvider Component={Nav} {...props} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

export default Header;
