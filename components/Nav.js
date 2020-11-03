import React from 'react';
import Link from 'next/link';

import { Icon } from '../components';
import { Button, Nav as StyledNav } from '../styled';

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
      <Button>Watch Online</Button>
      <Link href="/">
        <a>
          <Icon name="circle" size="32" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Icon name="menu" color="fg" />
        </a>
      </Link>
    </StyledNav>
  );
}

export default Nav;
