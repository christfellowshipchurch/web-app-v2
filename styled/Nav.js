import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from '../ui-kit/_lib/system';

const Nav = styled.nav`
  align-items: center;
  display: flex;

  > *:not(:last-child) {
    margin-right: ${themeGet('space.l')};
  }

  > *:nth-child(5),
  > *:nth-child(6) {
    margin-right: ${themeGet('space.base')};
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

Nav.propTypes = {
  ...propTypes,
};

export default Nav;
