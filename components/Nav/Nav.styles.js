import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../../ui-kit';

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: ${themeGet('space.base')};
  }

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

Nav.Link = Link;

export default Nav;
