/**
 * This component was created for the /career page and allows us to pass a dropdown menu in the DefaultCard component.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from 'ui-kit';

import Styled from './CardDropdown.styles';
import { useRouter } from 'next/router';
import { kebabCase } from 'lodash';

const CardDropdown = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = props?.items;

  const router = useRouter();

  // We don't want to show more than 7 items, so we'll chunk the array and then display all on a separate page
  let itemsChunk = menuItems?.slice(0, 6);
  if (props?.items?.length > 7) {
    itemsChunk?.push({
      title: 'See All',
      url: `/careers/department/${kebabCase(props?.title)}-${props?.id}`,
    });
  }

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
          onMouseLeave={() => setMenuOpen(false)}
          width={{ _: 260, sm: 500, md: 278, lg: 333 }}
          ml={{ _: '-0.6rem', md: '-1.25rem' }}
          mt="s"
        >
          {itemsChunk?.map(({ id, title, location, url }) => (
            <Styled.CardMenuOption
              onClick={() => {
                title === 'See All'
                  ? router.push(url)
                  : router.push(`/careers/${kebabCase(title)}-${id}`);
              }}
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
