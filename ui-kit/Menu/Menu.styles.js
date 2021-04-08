import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { theme, system } from 'ui-kit';

const Menu = styled.div`
  position: relative;

  ${system}
`;

const side = ({ side }) => props => {
  if (typeof side === 'string') {
    if (side === 'right') {
      return css`
        right: 0;
      `;
    }
  }

  if (typeof side === 'object') {
    let styles = '';

    for (const [key, value] of Object.entries(side)) {
      const breakpoint = theme.breakpoints[key];
      styles += `
        @media screen and (min-width: ${breakpoint}) {
          ${value}: 0;
        }
      `;
    }
    return css`
      ${styles}
    `;
  }

  return css`
    left: 0;
  `;
};

const Content = styled.div`
  margin-top: ${themeGet('space.base')};
  position: absolute;
  top: 100%;
  z-index: 20;

  ${side}
  ${system}
`;

const Link = styled.a`
  color: ${themeGet('colors.fg')};
  cursor: pointer;
  display: block;
  font-weight: ${themeGet('fontWeights.bold')};
  text-decoration: none;

  &:active,
  &:hover,
  &:focus {
    color: ${themeGet('colors.primary')};
  }

  ${system}
`;

const Toggle = styled.div`
  ${system}
`;

Menu.Content = Content;
Menu.Link = Link;
Menu.Toggle = Toggle;

export default Menu;
