import React, { useState } from 'react';
import Link from 'next/link';

import { ActionBannerProvider, NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

import ActionBanner from '../ActionBanner/ActionBanner';

function DefaultHeader(props = {}) {
  return (
    <>
      <ActionBannerProvider Component={ActionBanner} />
      <Styled bg="white" position="relative" boxShadow="base" {...props}>
        <Link href="/">
          <a>
            <Box as={Logo} mx={{ _: 'auto', md: '0' }} mb="0" />
          </a>
        </Link>
        <NavigationProvider Component={Nav} {...props} />
      </Styled>
    </>
  );
}

DefaultHeader.propTypes = {
  ...systemPropTypes,
};

export default DefaultHeader;
