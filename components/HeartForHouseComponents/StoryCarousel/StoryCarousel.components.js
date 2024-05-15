import React from 'react';
import styled from 'styled-components';

import { Box, Icon, system } from 'ui-kit';
import Video from 'components/Video';

export const CarouselSlide = ({ slide }) => {
  return (
    <Box my={{ _: 'base', md: 'xl' }} flex="0 0 100%" p="base">
      <Box
        boxShadow="xl"
        bg="white"
        flexDirection={{ _: 'column', lg: 'row' }}
        display="flex"
        alignItems={{ _: 'flex-start', lg: 'center' }}
        justifyContent="center"
        gridColumnGap="base"
        gridRowGap="base"
        p={{ _: 'base', md: 'l' }}
        minHeight={400}
      >
        <Box flex={slide?.aspectRatio === '4by3' ? 1 : 2}>
          <Video
            opacity={0.2}
            iconSize="25%"
            poster={slide?.image}
            src={
              'https://embed.wistia.com/deliveries/bd75d85f4d2bbfb60db413ef88db6f2f.mp4'
            }
          />
        </Box>
        <Box flex="1.5">
          <Box
            display={{ _: 'none', lg: 'block' }}
            fontFamily="vision"
            fontSize="h3"
            color="h4h.red"
            fontWeight="light"
          >
            OUR HEART FOR THIS HOUSE:
          </Box>
          <Box
            textDecoration="underline"
            fontFamily="vision"
            fontWeight="600"
            fontSize={{ _: '2.05rem', md: 'h1' }}
            mb="s"
          >
            {slide.title}
          </Box>
          <Box fontWeight={200}>{slide.content}</Box>
          <Box
            color="neutrals.500"
            fontWeight="bold"
            fontStyle="italic"
            mb="base"
          >
            – {slide.author}
          </Box>
          <Box
            as="a"
            href={slide.url}
            target="_blank"
            rel="noreferrer"
            color="h4h.red"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            Read More
            <Icon name="angle-right" ml="-2px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ArrowStyles = styled(Box)`
  &:hover {
    transform: scale(1.15);
  }

  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  ${system}
`;

export const SlideArrows = ({ onClick, direction }) => (
  <ArrowStyles onClick={onClick}>
    <Icon color="white" size={64} name={`angle-${direction}`} />
  </ArrowStyles>
);

export const TitleSection = () => (
  <Box display="flex" color="white" fontFamily="vision" fontWeight="600">
    <Box
      display="flex"
      alignItems={{ _: 'start', md: 'center' }}
      gridColumnGap={{ _: '0px', md: 'xl' }}
    >
      <Box
        pt="xs"
        px={{ _: '10px', md: 'xl' }}
        maxWidth={{ _: 340, md: 540, lg: 754 }}
        fontSize={{ _: 32, md: 48 }}
        lineHeight="100%"
        backgroundImage="url('/heart-for-house/carousel/start-quote-bg.png'), url('/heart-for-house/carousel/end-quote-bg.png')"
        backgroundRepeat="no-repeat"
        backgroundSize={{ _: '54px', md: '100px' }}
        backgroundPosition={{
          _: '-10px -10px, 296px 96px',
          md: '0% -12%, 50% 125%',
          lg: '-1% -40%, 75% 165%',
        }}
      >
        I LOVE THE <u>HOUSE</u> WHERE YOU LIVE, THE PLACE WHERE{' '}
        <u>YOUR GLORY DWELLS</u>.
      </Box>
      <Box
        ml="-20px"
        fontSize={{ _: 16, md: 20 }}
        style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
      >
        PSALM 26:8
      </Box>
    </Box>
  </Box>
);
