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
    :nth-child(even){
      padding-left: ${themeGet('space.m')};
    }
    :nth-child(odd){
      padding-right: ${themeGet('space.m')};
    }
  }

  ${system}
`;

Styled.Image = styled(Image)`
  margin-bottom: ${themeGet('space.m')};
  object-fit: cover;
  order: initial;
  filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 145px;
    margin-bottom: 0;
    min-width: 255px;
    order: 2;
  }

  ${system}
`;

export default Styled;
