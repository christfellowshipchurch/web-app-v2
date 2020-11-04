import React from 'react';
import Link from 'next/link';

import { Logo, Nav } from '../components';
import { Header as StyledHeader } from '../styled';
import useWebsiteNavigation from '../hooks/useWebsiteNavigation';

function Header(props = {}) {
  const { navigation } = useWebsiteNavigation({
    variables: {
      website: process.env.NEXT_PUBLIC_WEBSITE_KEY,
    },
  });

  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Nav data={navigation} />
    </StyledHeader>
  );
}

export default Header;
