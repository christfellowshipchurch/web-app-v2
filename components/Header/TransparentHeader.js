import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { ActionBannerProvider, NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { CustomLink, Logo, Nav } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import Styled from './Header.styles';
import ActionBanner from '../ActionBanner/ActionBanner';

function TransparentHeader(props = {}) {
  const [bgColor, setBgColor] = useState('transparent');
  const [navOpacity, setOpacity] = useState(1);

  const currentBreakpoint = useCurrentBreakpoint();

  const offset = currentBreakpoint.isSmall ? 5 : 50;
  //This is currently set for the External Marketing page:
  const hidePosition = currentBreakpoint.isSmall ? -8300 : -5800;

  // Change Navbar color on ScrollPosition,
  useScrollPosition(({ currPos }) => {
    const opaque = currPos.y > -1 * offset;
    const invisible = currPos.y < hidePosition;
    setBgColor(opaque ? 'transparent' : 'secondary');
    setOpacity(invisible ? 0 : 1);
  });

  return (
    <Box 
      position="fixed"
      zIndex={9}
      width="100%"
    >
      <ActionBannerProvider Component={ActionBanner} />
      <Styled
        boxShadow="none"
        bg={bgColor}
        opacity={navOpacity}
        // position="fixed"
        {...props}
        display="flex"
        flexDirection="column"
      >
        
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Link href="/">
            <a>
              <Box as={Logo} dark={true} mx={{ _: 'auto', md: '0' }} mb="0" />
            </a>
          </Link>
          <NavigationProvider Component={Nav} {...props} transparentMode />
        </Box>
      </Styled>
    </Box>
  );
}

TransparentHeader.propTypes = {
  ...systemPropTypes,
  darkMode: PropTypes.bool,
};

TransparentHeader.defaultProps = {
  darkMode: true,
};

export default TransparentHeader;
