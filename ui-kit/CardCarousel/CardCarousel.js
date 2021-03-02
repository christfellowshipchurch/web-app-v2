import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Box, Icon } from 'ui-kit';

import Styled from './CardCarousel.styles';

const CardCarousel = (props = {}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: props.cardsDisplayed,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.cardsDisplayed,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const lastIndex = props.children.length - 1;

  const CustomArrows = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Styled.ArrowsGroup>
        <Styled.Arrow
          onClick={() => (currentSlide === 0 ? goToSlide(0) : previous())}
        >
          <Icon name="angleLeft" size="24" />
        </Styled.Arrow>
        <Box padding="s" />
        <Styled.Arrow
          onClick={() => (currentSlide === lastIndex ? goToSlide(0) : next())}
        >
          <Icon name="angleRight" size="24" />
        </Styled.Arrow>
      </Styled.ArrowsGroup>
    );
  };

  /**
   * note : custom autoloop function to fix popping reset
   */

  let carousel = useRef();

  useEffect(() => {
    const autoloop = setInterval(() => {
      if (
        carousel?.state?.currentSlide ===
        lastIndex - (props.cardsDisplayed - 1)
      ) {
        carousel.goToSlide(0);
      } else {
        carousel.next();
      }
    }, props.slideInterval); // Your custom auto loop delay in ms
    return () => clearInterval(autoloop);
  }, []);

  /**
   * note : when child items exceed the amount of items being displayed, the carousel will be disabled and arrows hidden
   */
  let isCarousel = props.children.length > props.cardsDisplayed;

  return (
    <Carousel
      ssr
      responsive={responsive}
      arrows={false}
      customTransition={`transform ${props.animationSpeed}ms ease-in-out`}
      ref={el => (carousel = el)}
      renderButtonGroupOutside={isCarousel && !props.hideArrows}
      customButtonGroup={!props.hideArrows ? <CustomArrows /> : null}
    >
      {props.children}
    </Carousel>
  );
};

CardCarousel.propTypes = {
  animationSpeed: PropTypes.number,
  cardsDisplayed: PropTypes.number,
  hideArrows: PropTypes.bool,
  isCarousel: PropTypes.bool,
  noArrows: PropTypes.bool,
  slideInterval: PropTypes.number,
};

CardCarousel.defaultProps = {
  animationSpeed: 900,
  cardsDisplayed: 2,
  hideArrows: false,
  isCarousel: false,
  noArrows: false,
  slideInterval: 4000,
};

export default CardCarousel;
