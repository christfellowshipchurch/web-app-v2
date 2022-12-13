// Main Job Page

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from 'ui-kit';

import Styled from './CardDropdown.styles';
import { useRouter } from 'next/router';
import { kebabCase } from 'lodash';

const CardDropdown = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <Box bg="white">
      <Box
        as="a"
        cursor="pointer"
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        onClick={() => setMenuOpen(!menuOpen)}
        onClickOutside={() => setMenuOpen(false)}
      >
        <Box as="h3" color="neutrals.800" mb="0">
          {props?.title}
        </Box>
        <Icon
          name={menuOpen ? 'angle-up' : 'angle-down'}
          color="neutrals.800"
        />
      </Box>
      {menuOpen && (
        <Styled.CardMenu
          width={{ _: 260, sm: 500, md: 278, lg: 333 }}
          ml={{ _: '-0.6rem', md: '-1.25rem' }}
          mt="s"
        >
          {props?.items?.map(({ id, title, location }) => (
            <Styled.CardMenuOption
              onClick={() => router.push(`/careers/${kebabCase(title)}-${id}`)}
              key={id}
            >
              <Box
                textDecoration="none"
                color="secondary"
                fontWeight="bold"
                fontSize="base"
                mb="0"
              >
                {title}
              </Box>
              <Box>{location?.name}</Box>
            </Styled.CardMenuOption>
          ))}
        </Styled.CardMenu>
      )}
    </Box>
  );
};

CardDropdown.propTypes = {};

export default CardDropdown;
