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

const color = ({ selected }) => props => {
  if (selected) {
    return css`
      color: ${themeGet('colors.secondary')};
    `;
  }

  return css`
    color: ${themeGet('colors.black')};
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
  display: block;
  text-decoration: none;

  &:active,
  &:hover,
  &:focus {
    color: ${themeGet('colors.secondary')};
  }

  ${color}
  ${system}
`;

const Toggle = styled.div`
  ${system}
`;

Menu.Content = Content;
Menu.Link = Link;
Menu.Toggle = Toggle;

export default Menu;
