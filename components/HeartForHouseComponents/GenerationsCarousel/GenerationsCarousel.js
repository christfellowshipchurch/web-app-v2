/**
 * This component is a carousel that displays the 40th Anniversary photos for the H4H 2024 campaign. We will be using Embla Carousel to create this component.
 */

import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

import { Box, Button } from 'ui-kit';
import { ImageHover, TitleSection } from './GenerationsCarousel.components';

function GenerationsCarousel({ id }) {
  // see docs for more info on how to use Embla Carousel: https://www.embla-carousel.com/get-started/react/
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 1 }),
  ]);
  const [overlay, setOverlay] = useState(false);
  const [overlayValue, setOverlayValue] = useState(null);
  const imageHover = [
    { image: 1, date: 'January 1999', description: 'UN Trip' },
    { image: 2, date: 'February 1999', description: 'UN Trip' },
    { image: 3, date: 'March 1999', description: 'UN Trip' },
    { image: 4, date: 'April 1999', description: 'UN Trip' },
    { image: 5, date: 'May 1999', description: 'UN Trip' },
    { image: 6, date: 'June 1999', description: 'UN Trip' },
    { image: 7, date: 'July 1999', description: 'UN Trip' },
    { image: 8, date: 'August 1999', description: 'UN Trip' },
    { image: 9, date: 'September 1999', description: 'UN Trip' },
    { image: 10, date: 'October 1999', description: 'UN Trip' },
    { image: 11, date: 'November 1999', description: 'UN Trip' },
    { image: 12, date: 'December 1999', description: 'UN Trip' },
    { image: 13, date: 'January 2000', description: 'UN Trip' },
    { image: 14, date: 'February 2000', description: 'UN Trip' },
  ];
  const numberOfSlides = 14;

  return (
    <Box
      id={id}
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
                    position="relative"
                  >
                    <ImageHover
                      key={index}
                      borderRadius="0px"
                      maxHeight={{ _: 200, md: 250, lg: 300 }}
                      onMouseEnter={e => {
                        setOverlay(true);
                        setOverlayValue(index);
                      }}
                      onMouseLeave={e => {
                        setOverlay(false);
                      }}
                      source={`/heart-for-house/carousel/generations-photos/${
                        index + 1
                      }.jpg`}
                    />
                    {overlay && overlayValue === index && (
                      <Box position="absolute" top={230} ml="s" color="white">
                        <Box mt="base">{imageHover[index].description}</Box>
                        <Box>{imageHover[index].date}</Box>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </div>
        </Box>
      </Box>
      <Button
        as="a"
        target="_blank"
        href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/6?fr=sNWFiNDcyMzY2OTI"
        variant="tertiary"
      >
        40 YEARS OF CHRIST FELLOWSHIP
      </Button>
    </Box>
  );
}

export default GenerationsCarousel;
