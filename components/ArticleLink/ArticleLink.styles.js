import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Box, Image, system } from 'ui-kit';

const Styled = {};

Styled.Container = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    align-items: center;
    flex-direction: row;
  }

  ${system}
`;

Styled.Image = styled(Image)`
  height: auto;
  width: 100%;

  filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));

  ${system}
`;

Styled.ImageContainer = styled(Box)`
  margin-bottom: ${themeGet('space.m')};
  order: initial;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-bottom: 0;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  ${system}
`;

Styled.TextContainer = styled(Box)`
  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-bottom: 0;
    flex: 1 0 50%;
  }
`;

export default Styled;
