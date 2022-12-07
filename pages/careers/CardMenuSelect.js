// Main Job Page

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { HeroLanding, Layout, CustomLink } from 'components';
import {
  Box,
  Button,
  CardGrid,
  Card,
  HtmlRenderer,
  Icon,
  Image,
  DefaultCard,
  Loader,
  HorizontalHighlightCard,
  utils,
  Select,
} from 'ui-kit';

import Styled from './CareerPages.styles';
import testData from './menuTestData';
import Cell from 'ui-kit/Cell/Cell.styles';

const CardMenuSelect = props => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box bg="white">
      <Box
        as="a"
        cursor="pointer"
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        mb="base"
        onClick={() => setMenuOpen(!menuOpen)}
        onClickOutside={() => setMenuOpen(false)}
      >
        <Box as="h3" color="neutrals.800" mb="0">
          {props?.title}
        </Box>
        <Icon name={menuOpen ? 'angle-right' : 'angle-left'} />
      </Box>
      {menuOpen && (
        <Box
          zIndex={1}
          p="base"
          bg="white"
          position="absolute"
          width={334}
          borderRadius="base"
          ml={{ _: '-0.6rem', md: '-1.25rem' }}
          boxShadow="base"
        >
          {props?.items?.map(({ id, title, location }) => (
            <Box key={id} mb="base">
              <Box as="a" fontSize="base" href={`/careers/${id}`} mb="0">
                {title}
              </Box>
              <Box>{location?.name}</Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

CardMenuSelect.propTypes = {};

export default CardMenuSelect;
