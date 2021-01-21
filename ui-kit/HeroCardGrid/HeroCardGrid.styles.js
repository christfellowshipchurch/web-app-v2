import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '..';

const HeroCardGrid = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: grid;
    grid-column-gap: ${themeGet('space.base')};
    grid-row-gap: ${themeGet('space.l')};
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
    "header"
    "main main main main";

    > *:not(:last-child) {
      margin-bottom: 0;
    }
  }

  ${system}
`;

const LargeGridItem = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1;
`

HeroCardGrid.LargeGridItem = LargeGridItem

export default HeroCardGrid;
