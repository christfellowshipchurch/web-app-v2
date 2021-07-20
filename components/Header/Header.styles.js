import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Header = styled.header`
  color: ${themeGet('colors.fg')};
  align-items: center;
  justify-content: center;
  grid-template-columns: auto 1fr;
  padding: ${themeGet('space.base')};
  position: ${props => props.position};
  width: 100%;
  z-index: 9;
  transition: background-color ease-in 0.2s;

  > *:last-child {
    justify-self: flex-end;
  }

  /* @media screen and (min-width: ${themeGet('breakpoints.md')}) { */
  display: grid;
  justify-content: flex-start;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding: ${themeGet('space.base')} ${themeGet('space.xl')};
  }

  ${system}
`;

export default Header;
