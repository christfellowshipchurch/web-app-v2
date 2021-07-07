import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { CardGrid, system } from 'ui-kit';

export const StyledCardGrid = styled(CardGrid)`
  grid-column-gap: ${themeGet('space.m')};
  grid-row-gap: ${themeGet('space.base')};
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  ${system}
`;

export const RowItem = styled.div`
  cursor: pointer;
  text-align: center;
  ${system}
`;

export default Styled;
