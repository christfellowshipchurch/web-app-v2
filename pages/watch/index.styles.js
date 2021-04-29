import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Image, system } from 'ui-kit';

const Styled = {};

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

export default Styled;
