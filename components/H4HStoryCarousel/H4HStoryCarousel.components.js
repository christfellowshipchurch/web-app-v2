import { useCurrentBreakpoint } from 'hooks';
import React from 'react';

import { Box, Icon, Image } from 'ui-kit';

export const CarouselSlide = ({ slide }) => {
  const currentBreakpoint = useCurrentBreakpoint();
  const isLarge =
    currentBreakpoint?.name === 'lg' || currentBreakpoint?.name === 'xl';

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
          <Image
            maxHeight={300}
            aspectRatio={!isLarge ? '16by9' : slide?.aspectRatio}
            source={slide.image}
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
            OUR HEART FOR THE HOUSE:
          </Box>
          <Box
            textDecoration="underline"
            fontFamily="vision"
            fontWeight="600"
            fontSize="h1"
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
};

export const SlideArrows = ({ onClick, direction }) => (
  <Box cursor="pointer" onClick={onClick}>
    <Icon color="white" size={64} name={`angle-${direction}`} />
  </Box>
);

export const TitleSection = () => (
  <Box display="flex" color="white" fontFamily="vision" fontWeight="600">
    <Box
      mx="s"
      display="flex"
      alignItems={{ _: 'start', md: 'center' }}
      gridColumnGap={{ _: '0px', md: 'xl' }}
    >
      <Box
        px={{ _: 's', md: 'xl' }}
        maxWidth={{ _: 340, md: 540, lg: 754 }}
        fontSize={{ _: 32, md: 48 }}
        lineHeight="100%"
        backgroundImage="url('/heart-for-house/carousel/start-quote-bg.png'), url('/heart-for-house/carousel/end-quote-bg.png')"
        backgroundRepeat="no-repeat"
        backgroundSize={{ _: '80px', md: '100px' }}
        backgroundPosition={{
          _: '-5% -32%, 105% 160%',
          md: '0% -12%, 50% 125%',
          lg: '-1% -45%, 75% 165%',
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
