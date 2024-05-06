/**
 * This component is a carousel that displays the 40th Anniversary photos for the H4H 2024 campaign. We will be using Embla Carousel to create this component.
 */

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import { Box, Button, Image } from 'ui-kit';
import {
  HoverScale,
  HoverOverlay,
  TitleSection,
} from './GenerationsCarousel.components';

import { useCurrentBreakpoint } from 'hooks';
import { imageHoverDescriptions } from './GenerationsCarousel.data';

function GenerationsCarousel({ id }) {
  const currentBreakpoint = useCurrentBreakpoint();
  // see docs for more info on how to use Embla Carousel: https://www.embla-carousel.com/get-started/react/
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      stopOnInteraction: false,
      speed: currentBreakpoint?.name === 'sm' ? 0.5 : 1,
    }),
  ]);

  const numberOfSlides = 14;

  return (
    <Box
      id={id}
      bg="#E4E4E3"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridRowGap="base"
      py={{ _: 'xl', lg: 'xxl' }}
    >
      {/* Title */}
      <TitleSection />

      {/* Carousel */}
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box py="l" overflow="hidden" width="100%">
          <div className="embla" ref={emblaRef}>
            <Box display="flex" alignItems="center">
              {[...Array(numberOfSlides)].map((n, index) => {
                return (
                  <Box
                    fontFamily="vision"
                    mx="s"
                    flex={{
                      _: '0 0 70%',
                      sm: '0 0 45%',
                      md: '0 0 40%',
                      lg: '0 0 35%',
                      xl: '0 0 28%',
                    }}
                    minWidth={0}
                    position="relative"
                  >
                    <HoverScale>
                      <Image
                        key={index}
                        borderRadius="0px"
                        maxHeight={{ _: 200, md: 250, lg: 300 }}
                        source={`/heart-for-house/carousel/generations-photos/${
                          index + 1
                        }.jpg`}
                      />
                      <HoverOverlay height={{ _: 200, md: 250, lg: 300 }}>
                        <Box
                          fontSize="h1"
                          fontWeight="bold"
                          textAlign="center"
                          mx="base"
                        >
                          {imageHoverDescriptions[index].date}
                        </Box>
                        <Box as="p" fontSize="l" textAlign="center" mx="base">
                          {imageHoverDescriptions[index].description}
                        </Box>
                      </HoverOverlay>
                    </HoverScale>
                  </Box>
                );
              })}
            </Box>
          </div>
        </Box>
      </Box>
      <Box as="p" color="black" textAlign="center" maxWidth={340}>
        This year, Christ Fellowship celebrates 40 years as a church. See all
        that you are a part of...
      </Box>
      <Button
        as="a"
        px="l"
        href="/years-of-impact"
        variant="tertiary"
        border="2px solid"
      >
        SEE FULL TIMELINE
      </Button>
    </Box>
  );
}

export default GenerationsCarousel;
