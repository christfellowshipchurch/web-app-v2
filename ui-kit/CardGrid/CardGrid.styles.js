import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const CardGrid = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${themeGet('space.l')};
  }

  display: grid;
  grid-column-gap: ${themeGet('space.base')};
  grid-row-gap: ${themeGet('space.l')};
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  > *:not(:last-child) {
    margin-bottom: 0;
  }

  ${system}
`;

export default CardGrid;
