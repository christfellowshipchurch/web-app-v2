import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const DEFAULT_COVER_HEIGHT = '250px';
const HERO_COVER_HEIGHT = '350px';

const link = ({ as }) => props => {
  if (as === 'a') {
    return css`
      cursor: pointer;
      text-decoration: none;
      transition: 0.2s ease-in-out;

      &:focus,
      &:hover {
        box-shadow: ${themeGet('shadows.xxl')};
        transform: scale(1.02);
      }

      &:active {
        transform: scale(1);
      }
    `;
  }
};

const scaleLink = ({ scaleCard }) => props => {
  // Does not scale card if prop set to false
  if (scaleCard === false) {
    return css`
      &:focus,
      &:hover {
        transform: none;
      }

      &:active {
        transform: none;
      }
    `;
  }
};

const removeBoxShadow = ({ boxShadow }) => props => {
  // Removes box-shadow on hover if box-shadow is set to none
  if (boxShadow === 'none') {
    return css`
      &:focus,
      &:hover {
        box-shadow: none;
      }
    `;
  }
};

const Card = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.xl')};
  color: ${themeGet('colors.fg')};
  display: block;
  overflow: ${props => (props.scaleCoverImage ? 'hidden' : 'initial')};

  ${link}
  ${scaleLink}
  ${removeBoxShadow}

  ${system}
`;

const Content = styled.div`
  padding: ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.base')};
  }

  ${system}
`;

const content = ({ hasContent }) => props => {
  if (hasContent) {
    return css`
      border-top-left-radius: ${themeGet('radii.base')};
      border-top-right-radius: ${themeGet('radii.base')};
      height: ${props =>
        props.height ||
        (props.largeCard ? HERO_COVER_HEIGHT : DEFAULT_COVER_HEIGHT)};
    `;
  }

  return css`
    border-radius: ${themeGet('radii.base')};
    height: 100%;
  `;
};

const overlay = ({ overlay }) => props => {
  if (overlay) {
    return css`
      &::after {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          ${themeGet('colors.fg')}
        );
        bottom: 0;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.8;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1;
      }
    `;
  }
};

const scaleCover = ({ scaleCoverImage }) => props => {
  // Scales Cover Image of card if prop set to true
  if (scaleCoverImage) {
    return css`
      transform: scale(1);
      transition: 0.2s ease-in-out;

      &:focus,
      &:hover {
        transform: scale(1.02);
        transition: 0.2s ease-out;
      }

      &:active {
        transform: scale(1);
        transition: 0.2s ease-out;
      }
    `;
  }
};

const Cover = styled.div`
  align-items: flex-end;
  background-color: ${themeGet('colors.fg')};
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  ${content}
  ${overlay}
  ${scaleCover}

  ${system}
`;

const position = ({ position, size }) => props => {
  if (position === 'bottomLeft') {
    if (size === 's') {
      return css`
        padding: ${themeGet('space.base')};
      `;
    }
    return css`
      backdrop-filter: blur(30px);
      background-color: rgba(255, 255, 255, 0.15);
      padding: ${themeGet('space.s')};

      @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        padding: ${themeGet('space.base')};
      }
    `;
  } else if (position === 'center') {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 100%;
    `;
  }
};

const CoverContent = styled.div`
  border-bottom-left-radius: ${themeGet('radii.base')};
  border-bottom-right-radius: ${themeGet('radii.base')};
  position: absolute;
  width: 100%;
  z-index: 2;

  ${position};
`;

const coverLabelBackground = ({
  coverImageLabelBgColor = 'fg',
}) => props => css`
  background-color: ${themeGet(`colors.${coverImageLabelBgColor}`)};
`;

const CoverLabel = styled.b`
  ${coverLabelBackground}
  color: ${themeGet('colors.white')};
  bottom: 0;
  font-size: ${themeGet('fontSizes.xs')};
  font-weight: ${themeGet('fontWeights.bold')};
  left: 0;
  letter-spacing: 0.125rem;
  padding: ${themeGet('space.s')} ${themeGet('space.base')};
  position: absolute;
  text-transform: uppercase;
  z-index: 2;
`;

Card.Content = Content;
Card.Cover = Cover;
Card.CoverContent = CoverContent;
Card.CoverLabel = CoverLabel;

export default Card;
