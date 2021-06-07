import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

function Header(props = {}) {
  return (
    <Styled {...props}>
      <Link href="/">
        <a>
          <Box
            as={Logo}
            dark={props?.darkMode}
            mx={{ _: 'auto', md: '0' }}
            mb={{ _: 'base', md: '0' }}
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
