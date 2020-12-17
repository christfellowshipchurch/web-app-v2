import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Card from '../Card/Card.styles'

const DateTimeLabel = styled.p`
  align-items: center;
  display: flex;
  font-size: ${themeGet('fontSizes.xs')};
  padding-bottom: ${themeGet('space.xs')};
`

const GradientContainer = styled.div`
  background-image: 
  linear-gradient(to top, rgb(255, 255, 255, 1), rgba(255, 255, 255, 0.6)),
  url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: ${themeGet('radii.base')};
  border-top-right-radius: ${themeGet('radii.base')};
  overflow: hidden;
  padding-bottom: ${themeGet('space.xl')};
  padding-top: ${themeGet('space.xl')};
  position: relative;
`;

const GroupCardContent = styled.div`
  padding: ${themeGet('space.base')};
`

Card.GradientContainer = GradientContainer
Card.GroupCardContent = GroupCardContent
Card.DateTimeLabel = DateTimeLabel

export default Card;
