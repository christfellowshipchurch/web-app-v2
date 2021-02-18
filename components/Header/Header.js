import React from 'react';
import Link from 'next/link';

import { NavigationProvider } from 'providers';
import { Box, Select, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import Styled from './Header.styles';
import { useCampuses } from 'hooks';

function Header(props = {}) {
  const { campuses } = useCampuses();
  return (
    <Styled bg="bg_alt" height="90px">
      <Box display="flex" py="base" px="xl" alignSelf="center">
        <Link href="/">
          <a>
            <Logo withText />
          </a>
        </Link>
        {/*
        <Select
          border="none"
          backgroundColor="inherit"
          textTransform="uppercase"
          color="neutrals.900"
          opacity="60%"
          mt="-8px"
          pl="6px"
          letterSpacing="2px"
          width="200px"
        >
          {campuses.map(option => (
            <Select.Option
              key={option.id}
              value={option.id}
              label={option.name}
            />
          ))}
        </Select>
        */}
      </Box>
      <NavigationProvider Component={Nav} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

export default Header;
