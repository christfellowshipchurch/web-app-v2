import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components';

import { Box, Image, system } from 'ui-kit';

const Styled = {};

Styled.Container = styled(Box)`
  max-height: 80vh;
  object-fit: cover;
  position: relative;
  text-align: center;
  width: 100%;

  ${system}
`;

Styled.Backdrop = styled(Box)`
  background-image: url(${props => props.src});
  background-size: cover;
  filter: blur(5px);
  height: 60vh;
  margin-bottom: ${themeGet('space.xl')};
  width: 100%;

  ${system}
`;

Styled.ImageContainer = styled(Box)`
  max-height: 80vh;

  ${props =>
    props.backdrop &&
    css`
      border-radius: ${themeGet('radii.image')};
      overflow: hidden;
      left: 50%;
      max-height: 60vh;
      position: absolute;
      bottom: 0;
      transform: translate(-50%, 0);

      @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
        width: 80vw;
      }
    `}

  ${system}
`;

Styled.Image = styled(Image)`
  margin: 0 auto;
  max-height: 80vh;
  object-fit: ${props => props.objectFit || 'cover'};
  width: 100%;

  ${props =>
    props.backdrop &&
    css`
      max-height: 60vh;
      object-fit: contain;
      width: auto;
    `}

  ${system}
`;

Styled.Overlay = styled(Box)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

Styled.TextContainer = styled(Box)`
  height: 100%;
  flex-direction: column;
  left: ${themeGet('space.s')};
  top: 0;
  max-width: 640px;
  padding-bottom: ${themeGet('space.xl')};
  pointer-events: none;
  position: absolute;
  z-index: 1;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    left: ${themeGet('space.xxl')};
  }

  ${system}
`;

export default Styled;
