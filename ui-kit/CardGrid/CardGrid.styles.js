import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const CardGrid = styled.div`
  display: grid;
  grid-column-gap: ${themeGet('space.base')};
  grid-row-gap: ${themeGet('space.xl')};
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  ${system}
`;

export default CardGrid;
