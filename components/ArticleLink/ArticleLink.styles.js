import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Box, Image, system } from 'ui-kit';

const Styled = {};

Styled.Container = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    align-items: center;
    flex-direction: row;
  }

  ${system}
`;

Styled.Image = styled(Image)`
  margin-bottom: ${themeGet('space.m')};
  box-shadow: ${themeGet('shadows.base')};
  object-fit: cover;
  order: initial;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 145px;
    margin-bottom: 0;
    min-width: 255px;
    order: 2;
  }

  ${system}
`;

export default Styled;
