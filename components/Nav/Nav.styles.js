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

const hovered = ({ hovered, hasDropdown }) => props => {
  const color = hovered ? themeGet('colors.white') : 'inherit';

  return css`
    background-color: ${color};
    ${hovered && 'box-shadow: 0px 0px 2px 2px rgb(0 0 0 / 20%);'}
    ${hovered && hasDropdown ? 'clip-path: inset(-5px -5px 0 -5px);' : null}
  `;
};

const QuickAction = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  margin-top: ${themeGet('space.s')};
  margin-bottom: ${props => (props.hasDropdown ? '0' : '14px')};
  padding: 0 ${themeGet('space.s')};
  padding-top: 21px;
  padding-bottom: ${props => (props.hasDropdown ? '35px' : '21px')};
  position: relative;
  text-transform: uppercase;
  z-index: 1000;


  ${hovered}
  ${selected}
  ${system}
`;

Nav.Link = Link;
Nav.QuickActions = QuickActions;
Nav.QuickAction = QuickAction;

export default Nav;
