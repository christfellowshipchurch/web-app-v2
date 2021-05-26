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
  height: 100%;
  object-fit: cover;
  width: 100%;

  ${system}
`;

Styled.ImageContainer = styled(Box)`
  margin-bottom: ${themeGet('space.m')};
  object-fit: cover;
  order: initial;
  filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    flex: 1 0 50%;
    height: 245px;
    margin-bottom: 0;
    max-width: 400px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    margin-bottom: 0;
  }

  ${system}
`;

Styled.TextContainer = styled(Box)``;

export default Styled;
