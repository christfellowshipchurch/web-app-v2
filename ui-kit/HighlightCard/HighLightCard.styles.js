import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Card from '../Card/Card.styles'

const HighlightCardLabel = styled.div`
  background-color: rgba(255, 255, 255, .3);  
  backdrop-filter: blur(7px);
  border-radius: ${themeGet('radii.xl')};
  color: ${themeGet('colors.white')};
  display:inline-block;
  font-size: ${themeGet('fontSizes.xs')};
  font-weight: ${themeGet('fontWeights.bold')};
  letter-spacing: 0.125rem;
  padding: ${themeGet('space.s')} ${themeGet('space.base')};
  text-transform: uppercase;
  z-index: 2;
`;

Card.Label = HighlightCardLabel

export default Card;
