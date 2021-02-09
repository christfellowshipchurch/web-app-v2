import React from 'react';
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

  const CustomArrows = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Styled.ArrowsGroup>
        <Styled.Arrow onClick={() => previous()}>
          <Icon name="angleLeft" size="24" />
        </Styled.Arrow>
        <Box padding="xs" />
        <Styled.Arrow onClick={() => goToSlide(currentSlide + 1)}>
          <Icon name="angleRight" size="24" />
        </Styled.Arrow>
      </Styled.ArrowsGroup>
    );
  };

  /**
   * note : when child items exceed the amount of items being displayed, the carousel will be disabled and arrows hidden
   */
  let isCarousel = props.children.length > props.cardsDisplayed;

  return (
    <Carousel
      ssr
      responsive={responsive}
      infinite={true}
      autoPlay={isCarousel}
      autoPlaySpeed={props.slideInterval}
      arrows={false}
      customTransition={`transform ${props.animationSpeed}ms ease-in-out`}
      renderButtonGroupOutside={isCarousel}
      customButtonGroup={<CustomArrows />}
    >
      {props.children}
    </Carousel>
  );
};

CardCarousel.propTypes = {
  animationSpeed: PropTypes.number,
  cardsDisplayed: PropTypes.number,
  isCarousel: PropTypes.bool,
  noArrows: PropTypes.bool,
  slideInterval: PropTypes.number,
};

CardCarousel.defaultProps = {
  animationSpeed: 900,
  cardsDisplayed: 2,
  isCarousel: false,
  noArrows: false,
  slideInterval: 4000,
};

export default CardCarousel;
