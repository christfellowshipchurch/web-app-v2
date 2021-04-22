import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const selected = ({ selected }) => props => {
  const color = selected ? themeGet('colors.secondary') : 'inherit';
  return css`
    color: ${color};
  `;
};

const hovered = ({ hovered, hasDropdown }) => props => {
  const color = hovered ? themeGet('colors.white') : 'inherit';

  return css`
    @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
      background-color: ${color};
      ${hovered && 'box-shadow: 0px 0px 2px 2px rgb(0 0 0 / 20%);'}
      ${hovered && hasDropdown ? 'clip-path: inset(-5px -5px 0 -5px);' : null}
    }
  `;
};

const Styled = {};

const Nav = styled.nav`
  align-items: center;
  background-color: ${themeGet('colors.bg')};
  box-shadow: ${themeGet('shadows.base')};
  display: ${props => (props.active ? 'flex' : 'none')};
  justify-content: center;
  margin-top: ${props => (props.active ? themeGet('space.header') : '0')};
  padding: ${themeGet('space.m')} ${themeGet('space.s')};
  ${props => (props.active ? 'position: fixed;' : '')}
  width: ${props => (props.active ? '100%' : 'auto')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    background: none;
    box-shadow: none;
    display: flex;
    height: ${themeGet('space.header')};
    justify-content: flex-start;
    margin-top: 0;
    padding: 0 ${themeGet('space.s')};
    width: 100%;
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
  background-color: ${themeGet('colors.bg')};
  display: ${props => (props.active ? 'block' : 'none')};

  height: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    background: none;
    display: flex;
    justify-content: flex-end;
  }

  ${system}
`;

const QuickAction = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: ${themeGet('space.m')};
  padding-bottom: ${themeGet('space.m')};
  text-transform: uppercase;
  z-index: 1000;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding: 0 ${themeGet('space.s')};
    padding-top: 21px;
    padding-bottom: ${props => (props.hasDropdown ? '35px' : '21px')};
    margin-top: ${themeGet('space.s')};
    margin-bottom: ${props => (props.hasDropdown ? '0' : '14px')};
  }

  ${hovered}
  ${selected}
  ${system}
`;

Styled.Nav = Nav;
Styled.Link = Link;
Styled.QuickActions = QuickActions;
Styled.QuickAction = QuickAction;

export default Styled;
