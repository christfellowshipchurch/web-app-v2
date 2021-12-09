import React, { useState } from 'react';
import Link from 'next/link';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';
import ChristmasBanner from './ChristmasBanner';

function DefaultHeader(props = {}) {
  return [
    <ChristmasBanner />,
    <Styled bg="white" position="relative" boxShadow="base" {...props}>
      <Link href="/">
        <a>
          <Box as={Logo} mx={{ _: 'auto', md: '0' }} mb="0" />
        </a>
      </Link>
      <NavigationProvider Component={Nav} {...props} />
    </Styled>,
  ];
}

DefaultHeader.propTypes = {
  ...systemPropTypes,
};

export default DefaultHeader;
