import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, theme } from 'ui-kit';

const collapse = ({ breakpoints, columns }) => props => {
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

const fullWidth = ({ fullWidth }) => props => {
  return css`
    @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
      margin-left: auto;
      margin-right: auto;
      ${fullWidth &&
      css`
        width: calc(
          ${themeGet('breakpoints.xl')} - ${themeGet('space.xxl')} * 2
        );
      `}
    }

    grid-column-gap: ${themeGet('space.xl')};
  `;
};

const CardGrid = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-column-gap: ${themeGet('space.base')};
  grid-row-gap: ${themeGet('space.l')};
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  > *:not(:last-child) {
    margin-bottom: 0;
  }

  ${fullWidth}
  ${collapse}
  ${system}
`;

export const StyledFullWidth = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${system}
`;
export default CardGrid;
