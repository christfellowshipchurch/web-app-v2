import React from 'react';
import Link from 'next/link';

import { ActionBannerProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

import ActionBanner from '../ActionBanner/ActionBanner';

function DefaultHeader(props = {}) {
  return (
    <>
      <ActionBannerProvider Component={ActionBanner} />
      <Styled bg="white" position="relative" boxShadow="base" {...props}>
        {/* Next 13 doesn't support a tags as children of Link comoonent so we need to add legacyBehavior prop */}
        <Link legacyBehavior href="/">
          <a>
            <Box as={Logo} mx={{ _: 'auto', md: '0' }} mb="0" />
          </a>
        </Link>
        <Nav {...props?.data} showMobileNav={props?.showMobileNav} />
      </Styled>
    </>
  );
}

DefaultHeader.propTypes = {
  ...systemPropTypes,
};

export default DefaultHeader;
