import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Image, system } from 'ui-kit';
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

Styled.SermonImage = styled(Image)`
  cursor: pointer;
  height: 200px;
  // This is causing the image to disappear in Chrome
  // object-fit: cover;
  width: 300px;

  ${system}
`;

export default Styled;
