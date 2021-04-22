import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { CardGrid, system } from 'ui-kit';

export const StyledCardGrid = styled(CardGrid)`
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }

  margin-left: auto;
  margin-right: auto;
  grid-column-gap: ${themeGet('space.m')};
  grid-row-gap: ${themeGet('space.base')};
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
