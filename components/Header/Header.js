import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { NavigationProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';
import { getMenuItem } from 'components/Nav/Nav';
import navigation from 'config/navigation';

function Header(props = {}) {
  const [active, setActive] = useState(false);
  const [hoveredItem, setHoveredItem] = useState();

  return (
    <Box position="fixed" top={0} width="100%" zIndex={100}>
      <Styled.Header bg="bg_alt">
        <Styled.LogoContainer bg="bg_alt" active={active}>
          <Link href="/">
            <a>
              <Logo withText />
            </a>
          </Link>
          <Styled.ListIcon size="22" onClick={() => setActive(!active)} />
        </Styled.LogoContainer>
        <NavigationProvider
          Component={Nav}
          active={active}
          setActive={setActive}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          data={navigation}
        />
      </Styled.Header>
      {navigation.quickActions.map(action => {
        const Component = getMenuItem(action.id);
        return Component ? (
          <Styled.Dropdown
            key={action.id}
            className={action.id === hoveredItem ? 'active' : ''}
            onMouseEnter={() => {
              setHoveredItem(action.id);
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
            }}
          >
            <Component />
          </Styled.Dropdown>
        ) : null;
      })}
    </Box>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

export default Header;
