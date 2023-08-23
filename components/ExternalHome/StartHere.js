import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box, Image, Button } from 'ui-kit';

const buttonData = [
  {
    title: 'Attend a Sunday Service',
    subtitle:
      'Service happens every week in person and online. We can’t wait to meet you.',
    cta: 'Find a Location',
    image: 'external-landing/find-a-location.png',
    url: '/locations',
  },
  {
    title: 'Discover What’s Here',
    subtitle:
      'See how you and your family can grow in your faith, find friends, and serve others.',
    cta: 'Learn More',
    image: 'external-landing/ask-a-question.png',
    url: '/it-all-starts-here',
  },
];

const StartHere = () => {
  return (
    <Box
      px={{ _: 'xs', md: 's', lg: 'xxl' }}
      py={{ _: 'xs', md: 'xxs', lg: 'xl' }}
      pb={{ _: 'xl' }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ _: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gridColumnGap="xs"
        textAlign="center"
        px={{ _: 'xs', md: 'xxl' }}
        py={{ _: 'l', md: 'base' }}
      >
        {buttonData.map(({ title, subtitle, image, cta, url }, i) => (
          <Box p={{ _: 'xs', md: 'xs', lg: 'l' }}>
            <Image source={image} />
            <Box>
              <Box as="h2" mb="s">
                {title}
              </Box>
              <Box as="p" mb="base">
                {subtitle}
              </Box>
              <Button as="a" size="base" variant="primary" href={url}>
                {cta}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StartHere;
