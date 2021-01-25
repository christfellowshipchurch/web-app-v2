import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const collapse = ({ minColumns, breakpoint, columns }) => props => {
  if (breakpoint && minColumns) {
    return css`
      @media screen and (max-width: ${themeGet(`breakpoints.${breakpoint}`)}) {
        grid-template-columns: repeat(${minColumns}, 1fr);
      }
    `;
  }
};

const CardGrid = styled.div`
  > *:not(:last-child) {
    margin-bottom: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    margin-left: auto;
    margin-right: auto;
    ${props =>
      props.fullWidth &&
      css`
        width: calc(
          ${themeGet('breakpoints.xl')} - ${themeGet('space.xxl')} * 2
        );
      `}
  }

  display: grid;
  grid-column-gap: ${themeGet('space.base')};
  grid-row-gap: ${themeGet('space.l')};
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  > *:not(:last-child) {
    margin-bottom: 0;
  }

  ${collapse}
  ${system}
`;

export default CardGrid;
