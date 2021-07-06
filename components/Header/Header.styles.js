import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const colorMode = ({ darkMode }) => {
  if (darkMode) {
    return css`
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: none;
    `;
  }
  return css`
    background-color: ${themeGet('colors.paper')};
    box-shadow: ${themeGet('shadows.base')};
  `;
};

const Header = styled.header`
  color: ${themeGet('colors.fg')};
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 1fr;
  padding: ${themeGet('space.base')};
  position: relative;
  z-index: 9;

  > *:last-child {
    justify-self: flex-end;
  }

  /* @media screen and (min-width: ${themeGet('breakpoints.md')}) { */
  display: grid;
  justify-content: flex-start;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding: ${themeGet('space.base')} ${themeGet('space.xl')};
  }

  ${colorMode}
  ${system}
`;

export default Header;
