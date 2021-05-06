import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, theme } from 'ui-kit';

const collapse = ({ breakpoints }) => props => {
  if (breakpoints) {
    let cssString = ``;

    breakpoints.forEach(breakpoint => {
      const breaksize =
        breakpoint.breakpoint in theme.breakpoints
          ? theme.breakpoints[breakpoint.breakpoint]
          : breakpoint.breakpoint;
      cssString += `
          @media screen and (max-width: ${breaksize}) {
            grid-template-columns: repeat(${breakpoint.columns}, 1fr);
          }
        `;
    });
    return cssString;
  }
};

const justify = ({ justifyItems }) => props => {
  if (justifyItems) {
    return css`
      justify-items: ${justifyItems};
    `;
  }
};

const CardGrid = styled.div`

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  justify-items: center;
  grid-column-gap: ${themeGet('space.base')};
  grid-row-gap: ${props => themeGet(props.columns > 1 ? 'space.l' : 'space.xxl')};
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  > *:not(:last-child) {
    margin-bottom: 0 !important;
  }

  ${collapse}
  ${justify}
  ${system}
`;

export const StyledFullWidth = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${system}
`;
export default CardGrid;
