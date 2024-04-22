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

function GenerationsCarousel({ id }) {
  const currentBreakpoint = useCurrentBreakpoint();
  // see docs for more info on how to use Embla Carousel: https://www.embla-carousel.com/get-started/react/
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      stopOnInteraction: false,
      speed: currentBreakpoint?.name === 'sm' ? 0.5 : 1,
    }),
  ]);

  const imageHover = [
    {
      image: 1,
      date: '1984',
      description: 'Early church gathering at the Mullins’ home',
    },
    {
      image: 2,
      date: '1984',
      description: 'The beginnings of Christ Fellowship Church',
    },
    {
      image: 3,
      date: '1991',
      description:
        'Palm Beach Gardens South—Christ Fellowship’s first permanent location',
    },
    {
      image: 4,
      date: '1999',
      description:
        'Palm Beach Gardens North—Christ Fellowship moves to 40-acre property after explosive growth',
    },
    {
      image: 5,
      date: '1984',
      description:
        'After outgrowing the living room, Christ Fellowship starts meeting at Grove Park Elementary School',
    },
    {
      image: 6,
      date: '1987',
      description: 'Pastors Todd and Julie start the first youth group',
    },
    {
      image: 7,
      date: '1996',
      description: 'The beginning of Christ Fellowship Missions',
    },
    {
      image: 8,
      date: '1998',
      description:
        'One of the child dedications in the early days of Christ Fellowship',
    },
    {
      image: 9,
      date: '1984',
      description:
        "The first-ever baptism, which took place in a church member's pool",
    },
    {
      image: 10,
      date: '2000',
      description:
        'Palm Beach Gardens North opens the doors to its first services',
    },
    {
      image: 11,
      date: '1984',
      description:
        'Pastor Tom Mullins (R) stands with the first church sign outside Grove Park Elementary School',
    },
    {
      image: 12,
      date: '2006',
      description:
        'Christ Fellowship purchases its first multi-site location—a former Target store in Royal Palm Beach',
    },
    {
      image: 13,
      date: '1984',
      description:
        'Pastors Tom & Donna Mullins, Christ Fellowship’s founding pastors',
    },
    {
      image: 14,
      date: '1992',
      description:
        'Pastor Tom and Pastor Todd stand in front of the construction for Palm Beach Gardens South',
    },
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
                          fontSize="h3"
                          fontWeight="bold"
                          textAlign="center"
                          mx="base"
                          style={{ textWrap: 'pretty' }}
                        >
                          {imageHover[index].description}
                        </Box>
                        <Box>{imageHover[index].date}</Box>
                      </HoverOverlay>
                    </HoverScale>
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
