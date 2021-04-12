import React, { useState } from 'react';
import Link from 'next/link';

import { NavigationProvider } from 'providers';
import { systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';

function Header(props = {}) {
  const [active, setActive] = useState(false);

  return (
    <Styled.Header bg="bg_alt">
      <Styled.LogoContainer bg="bg_alt" active={active}>
        <Link href="/">
          <a>
            <Logo withText />
          </a>
        </Link>
        <Styled.ListIcon size="22" onClick={() => setActive(!active)} />
      </Styled.LogoContainer>
      <NavigationProvider Component={Nav} active={active} />
    </Styled.Header>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

export default Header;
