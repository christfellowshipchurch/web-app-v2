import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { CardGrid, system } from 'ui-kit';

export const StyledCard = styled.div`
  background-color: ${themeGet(`colors.white`)};
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.05);
  height: 399px;
  width: 463px;

  ${system}
`;

export const StyledCardGrid = styled(CardGrid)`
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }

  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${themeGet('space.l')};
  grid-row-gap: ${themeGet('space.base')};
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
`;

export default Styled;
