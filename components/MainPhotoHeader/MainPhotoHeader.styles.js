import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

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

Styled.Image = styled(Image)`
  margin: 0 auto;
  max-height: 80vh;
  object-fit: ${props => props.objectFit || 'cover'};
  width: 100%;

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
  justify-content: center;
  flex-direction: column;
  left: ${themeGet('space.s')};
  top: 0;
  max-width: 640px;
  pointer-events: none;
  position: absolute;
  z-index: 1;



  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    left: ${themeGet('space.xxl')};
  }


  ${system}
`;

export default Styled;
