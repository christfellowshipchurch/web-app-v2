import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { Box, Icon, system } from 'ui-kit';
import { useCurrentBreakpoint } from 'hooks';
import WrappedComponent from 'components/Component';
import styled from 'styled-components';

const ArrowStyles = styled(Box)`
  &:hover {
    transform: scale(1.15);
  }

  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  ${system}
`;

export const SlideArrows = ({ onClick, direction, color, disabled }) => (
  <ArrowStyles onClick={onClick} opacity={disabled && 0}>
    <Icon color={color || 'white'} size={64} name={`angle-${direction}`} />
  </ArrowStyles>
);

const EmblaCarousel = ({
  Component: _Component,
  carouselData,
  arrowColor,
  ...props
}) => {
  // see docs for more info on how to use Embla Carousel: https://www.embla-carousel.com/get-started/react/
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    AutoPlay({ playOnInit: false }),
  ]);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  // Determines whether the carousel can scroll to the next or previous slide
  function updateScrollState() {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }

  const currentBreakpoint = useCurrentBreakpoint();

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    if (currentBreakpoint?.name === 'sm') {
      toggleAutoplay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBreakpoint]);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" {...props}>
      {/* Previous Arrow */}
      <Box display={{ _: 'none', md: 'block' }}>
        <SlideArrows
          onClick={() => {
            emblaApi.scrollPrev();
            updateScrollState();
          }}
          direction="left"
          color={arrowColor}
          disabled={!canScrollPrev}
        />
      </Box>

      {/* Carousel */}
      <Box
        overflow="hidden"
        maxWidth={{ _: '100vw', sm: '75%', md: 700, lg: 1000 }}
      >
        <div className="embla" ref={emblaRef}>
          <Box display="flex" alignItems="center">
            {carouselData.map((slide, index) => (
              <WrappedComponent
                key={index}
                Component={_Component}
                slide={slide}
              />
            ))}
          </Box>
        </div>
      </Box>

      {/* Next Arrow */}
      <Box display={{ _: 'none', md: 'block' }}>
        {/* {canScrollNext && ( */}
        <SlideArrows
          onClick={() => {
            emblaApi.scrollNext();
            updateScrollState();
          }}
          direction="right"
          color={arrowColor}
          disabled={!canScrollNext}
        />
      </Box>
    </Box>
  );
};

export default EmblaCarousel;
