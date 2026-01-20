/**
 * This component is a carousel that displays stories from the H4H 2024 campaign. We will be using Embla Carousel to create this component. And will plan to add Wistia videos to the carousel once content is ready.
 */

import React from 'react';

import { Box, Button } from 'ui-kit';
import { CarouselSlide, TitleSection } from './StoryCarousel.components';

import { CAROUSEL_SLIDE_DATA } from './StoryCarousel.data';
import EmblaCarousel from 'components/EmblaCarousel';

function H4HStoryCarousel({ id }) {
  return (
    <Box
      id={id}
      bg="h4h.red"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={{ _: 'xl', lg: 'xxl' }}
    >
      {/* Title */}
      <TitleSection />

      <EmblaCarousel
        Component={CarouselSlide}
        carouselData={CAROUSEL_SLIDE_DATA}
      />
      <Button mt="base" as="a" href="#give" variant="tertiary">
        BE A PART OF THE HEART
      </Button>
    </Box>
  );
}

export default H4HStoryCarousel;
