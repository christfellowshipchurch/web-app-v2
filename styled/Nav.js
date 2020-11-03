import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from './lib/system';

const Nav = styled.nav`
  align-items: center;
  display: flex;

  > * {
    color: ${themeGet('colors.neutrals.600')};
    display: block;
    font-weight: ${themeGet('fontWeights.bold')};
    text-decoration: none;
  }

  > *:not(:last-child) {
    margin-right: ${themeGet('space.xl')};
  }

  ${system}
`;

Nav.propTypes = {
  ...propTypes,
};

export default Nav;
