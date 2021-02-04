import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 90px;
  justify-content: center;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    justify-content: flex-start;
  }

  ${system}
`;

const Link = styled.a`
  color: ${themeGet('colors.neutrals.600')};
  cursor: pointer;
  display: block;
  font-weight: ${themeGet('fontWeights.bold')};
  text-decoration: none;

  &:active,
  &:focus,
  &:hover,
  &[data-state='active'] {
    color: ${themeGet('colors.fg')};
  }
`;

const QuickActions = styled.div`
  align-items: center;
  display: flex;

  height: 100%;

  ${system}
`;

const selected = ({ selected }) => props => {
  const color = selected ? themeGet('colors.secondary') : 'inherit';
  return css`
    color: ${color};
  `;
};

const hovered = ({ hovered }) => props => {
  const color = hovered ? themeGet('colors.white') : 'inherit';
  return css`
    background-color: ${color};
  `;
};

const QuickAction = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;

  ${hovered}
  ${selected}
  ${system}
`;

Nav.Link = Link;
Nav.QuickActions = QuickActions;
Nav.QuickAction = QuickAction;

export default Nav;
