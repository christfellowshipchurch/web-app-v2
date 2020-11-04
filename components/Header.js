import React from 'react';
import Link from 'next/link';

import { NavigationProvider } from '../providers';
import { Logo, Nav } from '../components';
import { Header as StyledHeader } from '../styled';

function Header(props = {}) {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <NavigationProvider Component={Nav} />
    </StyledHeader>
  );
}

export default Header;
