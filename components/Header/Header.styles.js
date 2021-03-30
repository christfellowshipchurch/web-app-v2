import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Header = styled.header`
  align-items: center;
  background-color: ${themeGet('colors.white')};
  box-shadow: ${themeGet('shadows.base')};
  grid-template-columns: auto 1fr;
  height: 90px;
  justify-content: center;
  width: 100%;

  > *:last-child {
    justify-self: flex-end;
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: grid;
    justify-content: flex-start;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    // padding: ${themeGet('space.base')} ${themeGet('space.xl')};
  }

  ${system}
`;

export default Header;
