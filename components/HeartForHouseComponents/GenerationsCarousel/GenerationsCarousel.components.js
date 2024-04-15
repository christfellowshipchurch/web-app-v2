import React from 'react';
import styled from 'styled-components';

import { Box, system } from 'ui-kit';

export const TitleSection = () => (
  <Box
    display="flex"
    fontFamily="vision"
    fontWeight="600"
    //add custom styling for grey bar background on mobile
    width={{ _: '100%', sm: 'auto' }}
    pl={{ _: 'base', sm: '0px' }}
    backgroundRepeat="no-repeat"
    backgroundImage={{ _: "url('/heart-for-house/grey-bar.png')" }}
    backgroundSize={{ _: '260px 15px', sm: '0px' }}
    backgroundPosition="-10px 86px"
  >
    <Box mx="s" display="flex" alignItems="center" justifyContent="center">
      <Box
        display="flex"
        flexWrap="wrap"
        color="#3A3A39"
        px={{ _: 's', sm: 'base', md: 'xl' }}
        maxWidth={{ _: 320, sm: 420, md: 700, lg: 1018, xl: 1315 }}
        fontSize={{ _: 32, sm: 40, md: 58, xl: 80 }}
        lineHeight="100%"
        backgroundImage="url('/heart-for-house/carousel/start-quote-bg.png'), url('/heart-for-house/carousel/upside-down-quote.png')"
        backgroundRepeat="no-repeat"
        backgroundSize={{ _: '80px', md: '110px' }}
        backgroundPosition={{
          //hide the quote on mobile
          _: '-300px -300px',
          sm: '-14px -15px, 220px 100px',
          md: '-1% -10%, 62% 120%',
          lg: '0px -20px, 840px 35px',
          xl: '-1% -20%, 95% 135%',
        }}
      >
        <Box color="primary" mr="s">
          GENERATION
        </Box>
        AFTER GENERATION
        <Box
          maxWidth={{ _: '240px', sm: 'none' }}
          lineHeight="100%"
          fontSize={{ _: 24, sm: 40, md: 58, xl: 80 }}
          fontWeight={{ _: 600, sm: 500 }}
          color="black"
        >
          STANDS IN AWE OF YOUR WORK.
        </Box>
      </Box>
      <Box
        color="primary"
        ml={{ _: 's', sm: '-20px' }}
        fontSize={{ _: 16, md: 20 }}
        style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
      >
        PSALM 145:4 (MSG){' '}
      </Box>
    </Box>
  </Box>
);

export const HoverScale = styled(Box)`
  &:active {
    cursor: grabbing !important;
  }
  &:hover {
    transform: scale(1.04);
  }

  transition: transform 200ms ease-in;
  cursor: grab !important;

  ${system}
`;

export const HoverOverlay = styled(Box)`
  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
  }

  align-items: center;
  background-color: transparent;
  bottom: 0;
  color: transparent;
  cursor: grab !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  transition: background-color 200ms ease-in, color 200ms ease-in;
  width: 100%;
  z-index: 1;

  ${system}
`;
