import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../../ui-kit';

const Header = styled.header`
  background-color: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.base')};
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: ${themeGet('space.base')} ${themeGet('space.xl')};

  > *:last-child {
    justify-self: flex-end;
  }

  ${system}
`;

export default Header;
