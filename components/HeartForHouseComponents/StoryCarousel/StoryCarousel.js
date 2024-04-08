/**
 * This component is a carousel that displays stories from the H4H 2024 campaign. We will be using Embla Carousel to create this component. And will plan to add Wistia videos to the carousel once content is ready.
 */

import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Box, Button } from 'ui-kit';
import {
  CarouselSlide,
  SlideArrows,
  TitleSection,
} from './StoryCarousel.components';

import { CAROUSEL_SLIDE_DATA } from './StoryCarousel.data';

function H4HStoryCarousel() {
  // see docs for more info on how to use Embla Carousel: https://www.embla-carousel.com/get-started/react/
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(true);

  // Determines whether the carousel can scroll to the next or previous slide
  function updateScrollState() {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }

  return (
    <Box
      bg="h4h.red"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridRowGap={{ _: '0px', md: 'base', lg: 'l' }}
      py="xl"
    >
      <TitleSection />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box display={{ _: 'none', md: 'block' }}>
          {canScrollPrev && (
            <SlideArrows
              onClick={() => {
                emblaApi.scrollPrev();
                updateScrollState();
              }}
              direction="left"
            />
          )}
        </Box>
        <Box
          overflow="hidden"
          maxWidth={{ _: '100vw', sm: '75%', md: 700, lg: 1000 }}
        >
          <div className="embla" ref={emblaRef}>
            <Box display="flex" alignItems="center">
              {CAROUSEL_SLIDE_DATA.map((slide, index) => (
                <CarouselSlide slide={slide} />
              ))}
            </Box>
          </div>
        </Box>
        <Box display={{ _: 'none', md: 'block' }}>
          {canScrollNext && (
            <SlideArrows
              onClick={() => {
                emblaApi.scrollNext();
                updateScrollState();
              }}
              direction="right"
            />
          )}
        </Box>
      </Box>
      <Button as="a" href="#give" variant="tertiary">
        BE A PART OF THE HEART
      </Button>
    </Box>
  );
}

export default H4HStoryCarousel;
