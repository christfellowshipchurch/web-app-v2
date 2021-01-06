import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Menu = styled.div`
  position: relative;

  ${system}
`;

const side = ({ side }) => props => {
  if (side === 'right') {
    return css`
      right: 0;
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
