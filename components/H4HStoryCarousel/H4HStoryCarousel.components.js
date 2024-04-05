import React from 'react';
import styled from 'styled-components';

import { Box, Icon, Image, system } from 'ui-kit';

export const CarouselSlide = ({ slide }) => (
  <Box my="xl" flex="0 0 100%" p="base">
    <Box
      boxShadow="xl"
      bg="white"
      flexDirection={{ _: 'column', lg: 'row' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gridColumnGap="base"
      p="l"
      minHeight={400}
    >
      <Box flex={slide?.aspectRatio === '4by3' ? 1 : 2}>
        <Image
          maxHeight={300}
          aspectRatio={slide?.aspectRatio}
          source={slide.image}
        />
      </Box>
      <Box flex="1.5">
        <Box
          fontFamily="vision"
          fontSize="l"
          color="h4h.red"
          fontWeight="light"
        >
          OUR HEART FOR THE HOUSE:
        </Box>
        <Box
          textDecoration="underline"
          fontFamily="vision"
          fontWeight="bold"
          fontSize={36}
          mb="s"
        >
          {slide.title}
        </Box>
        <Box fontWeight="light">{slide.content}</Box>
        <Box
          color="neutrals.500"
          fontWeight="bold"
          fontStyle="italic"
          mb="base"
        >
          - {slide.author}
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

export const SlideArrows = ({ onClick, direction }) => (
  <Box cursor="pointer" onClick={onClick}>
    <Icon color="white" size={64} name={`angle-${direction}`} />
  </Box>
);

const StyledText = styled.p`
  font-size: 24px;
  transform: rotate(90deg);

  ${system}
`;

export const TitleSection = () => (
  <Box display="flex" color="white" fontFamily="vision">
    <Box
      p="base"
      backgroundImage="url('/heart-for-house/carousel/bg-quotes.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      maxWidth={{ _: 280, md: 540, lg: 650 }}
      fontSize={{ _: 34, md: 48 }}
    >
      I LOVE THE <u>HOUSE</u> WHERE YOU LIVE, THE PLACE WHERE{' '}
      <u>YOUR GLORY DWELLS</u>.
    </Box>
    <Box alignContent="center">
      <StyledText ml={{ _: 0, lg: 100 }}>PSALM 26:8</StyledText>
    </Box>
  </Box>
);

export const CAROUSEL_SLIDE_DATA = [
  {
    title: 'CORRADO AND DANTE',
    content:
      '“Christ Fellowship got there first in my life by being the rock I grew up on, and the reason my faith has grown to where it is today.” ',
    author: 'CORRADO',
    image: '/heart-for-house/carousel/corrado-dante.jpg',
    url: 'https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/23?fr=sOTllNjcyMzY3MDQ',
    aspectRatio: '16by9',
  },
  {
    title: 'BIANCA AND AIDEN',
    content:
      '“After MVMNT Camp, my perspective changed. I looked forward to church again, cracked open my Bible more, joined the Called Retreat, and started attending Celebrate Recovery. Because of Shaun, Jim & Lynann, my family, and everybody who has given to Heart for the House and the vision to Get There First for my generation—I see hope because of the people I’m surrounded by.”',
    author: 'AIDEN',
    image: '/heart-for-house/carousel/biance-tejeda.jpg',
    url: 'https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/14?fr=sMDNlZTcyMzY2OTk',
    aspectRatio: '4by3',
  },
  {
    title: 'THE INVERSO FAMILY',
    content: `“While Logan’s life ended in a tragic and unexpected way, his journey still continues through our family. Today, you’ll find us serving every Sunday in the place that was always there for us.
      And our daughter Taylor has found spiritual siblings to champion her calling. We simply can’t get enough of encouraging others, because that’s the encouragement that was given to us.`,
    author: 'TRACY & JONATHAN',
    image: '/heart-for-house/carousel/inverso-family.jpg',
    url: 'https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/26?fr=sYzY1ZDcyMzY3MDM',
    aspectRatio: '4by3',
  },
];
