import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CardCarousel = styled.div;

const ArrowsGroup = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${themeGet('space.s')};
`;

const Arrow = styled.div`
  color: ${themeGet('colors.neutrals.200')};
  background-color: ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.xl')};
  cursor: pointer;
`;

CardCarousel.Arrow = Arrow;
CardCarousel.ArrowsGroup = ArrowsGroup;

export default CardCarousel;
