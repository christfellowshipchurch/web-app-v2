import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Image, system } from 'ui-kit';
import { Circle } from 'phosphor-react';

const Styled = {};

Styled.Circle = styled(Circle)`
  height: 0.5em;
  width: 0.5em;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 1em;
    width: 1em;
  }

  ${system}
`;

Styled.SermonContainer = styled(Box)`
  cursor: pointer;
  position: relative;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    width: 300px;
  }
`;

Styled.SermonImage = styled(Image)`
  // This is causing the image to disappear in Chrome
  // object-fit: cover;
  width: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 200px;
  }

  ${system}
`;

Styled.SermonSelector = styled(Box)`
  display: flex;
  margin: ${themeGet('space.l')} 0;
  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    color: white;
    margin: 0;
    position: absolute;
    top: ${themeGet('space.l')};
  }

  ${system}
`;

export default Styled;
