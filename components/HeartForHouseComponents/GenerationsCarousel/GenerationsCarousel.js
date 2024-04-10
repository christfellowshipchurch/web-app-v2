/**
 * This component is a carousel that displays the 40th Anniversary photos for the H4H 2024 campaign. We will be using Embla Carousel to create this component.
 */

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import { Box, Button } from 'ui-kit';
import { ImageHover, TitleSection } from './GenerationsCarousel.components';

function GenerationsCarousel() {
  // see docs for more info on how to use Embla Carousel: https://www.embla-carousel.com/get-started/react/
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false }),
  ]);

  const numberOfSlides = 14;

  return (
    <Box
      bg="#E4E4E3"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridRowGap={{ _: 'base', lg: 'l' }}
      py="xl"
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
                    mx="s"
                    flex={{
                      _: '0 0 70%',
                      sm: '0 0 45%',
                      md: '0 0 40%',
                      lg: '0 0 35%',
                      xl: '0 0 28%',
                    }}
                    minWidth={0}
                  >
                    <ImageHover
                      borderRadius="0px"
                      maxHeight={{ _: 200, md: 250, lg: 300 }}
                      source={`/heart-for-house/carousel/generations-photos/${
                        index + 1
                      }.jpg`}
                    />
                  </Box>
                );
              })}
            </Box>
          </div>
        </Box>
      </Box>
      <Button as="a" href="#give" variant="tertiary">
        40 YEARS OF CHRIST FELLOWSHIP
      </Button>
    </Box>
  );
}

export default GenerationsCarousel;
