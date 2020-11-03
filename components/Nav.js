import React from 'react';
import Link from 'next/link';

import { Nav as StyledNav } from '../styled';

function Nav(props = {}) {
  return (
    <StyledNav>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Locations</a>
      </Link>
      <Link href="/">
        <a>Discover</a>
      </Link>
      <Link href="/">
        <a>Give</a>
      </Link>
      <Link href="/">
        <a>Watch Online</a>
      </Link>
      <Link href="/">
        <a>Profile</a>
      </Link>
      <Link href="/">
        <a>Menu</a>
      </Link>
    </StyledNav>
  );
}

export default Nav;
