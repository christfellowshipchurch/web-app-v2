import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from './lib/system';

const Header = styled.header`
  background-color: ${themeGet('colors.white')};
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: ${themeGet('space.base')} ${themeGet('space.xl')};

  > *:last-child {
    justify-self: flex-end;
  }

  ${system}
`;

Header.propTypes = {
  ...propTypes,
};

export default Header;
