import React from 'react';
import Link from 'next/link';

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
      <Nav />
    </StyledHeader>
  );
}

export default Header;
