import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const CardGrid = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${props =>
      props.horizontalScroll ? 'none' : themeGet('space.base')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: grid;
    grid-column-gap: ${themeGet('space.base')};
    grid-row-gap: ${themeGet('space.l')};
    grid-template-columns: repeat(${props => props.columns}, 1fr);

    > *:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    overflow: ${props => (props.horizontalScroll ? 'scroll' : 'none')};
    flex-direction: ${props => (props.horizontalScroll ? 'row' : 'column')};
    justify-content: start;
    align-items: ${props => (props.horizontalScroll ? 'start' : 'center')};
  }

  ${system}
`;

export default CardGrid;
