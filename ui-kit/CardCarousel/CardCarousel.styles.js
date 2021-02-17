import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CardCarousel = styled.div;

const ArrowsGroup = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${themeGet('space.s')};
`;

const Arrow = styled.div`
  color: ${themeGet('colors.white')};
  background-color: ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.xl')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: ${themeGet('fontSizes.xl')};
  width: ${themeGet('fontSizes.xl')};
  padding: ${themeGet('space.xs')};
`;

CardCarousel.Arrow = Arrow;
CardCarousel.ArrowsGroup = ArrowsGroup;

export default CardCarousel;
