import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from '../_lib/system';

const DEFAULT_COVER_HEIGHT = '195px';

const Card = styled.div`
  background-color: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.xl')};

  ${system}
`;

const Content = styled.div`
  padding: ${themeGet('space.base')};
`;

const content = ({ hasContent }) => props => {
  if (hasContent) {
    return css`
      border-top-left-radius: ${themeGet('radii.base')};
      border-top-right-radius: ${themeGet('radii.base')};
      height: ${props => props.height || DEFAULT_COVER_HEIGHT};
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

const Cover = styled.div`
  background-color: ${themeGet('colors.fg')};
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;

  ${content}
  ${overlay}
  ${system}
`;

const position = ({ position }) => props => {
  if (position === 'bottomLeft') {
    return css`
      bottom: ${themeGet('space.l')};
      left: ${themeGet('space.l')};
    `;
  }
};

const CoverContent = styled.div`
  position: absolute;
  z-index: 2;

  ${position}
`;

const CoverLabel = styled.b`
  background-color: ${themeGet('colors.fg')};
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

Cover.propTypes = {
  src: PropTypes.string,
};

Card.propTypes = {
  ...propTypes,
};

export default Card;
