import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, system } from 'ui-kit';
import { List } from 'phosphor-react';

const Styled = {};

Styled.Header = styled.header`
  align-items: center;
  box-shadow: ${themeGet('shadows.base')};
  grid-template-columns: auto 1fr;
  height: ${themeGet('space.header')};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  > *:last-child {
    justify-self: flex-end;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: grid;
    justify-content: flex-start;
  }

  ${system}
`;

Styled.LogoContainer = styled(Box)`
  align-items: center;
  align-self: center;
  display: flex;
  height: ${themeGet('space.header')};
  justify-content: center;
  min-width: 322px;
  padding: ${themeGet('space.base')} ${themeGet('space.xl')};
  position: ${props => (props.active ? 'fixed' : 'relative')};
  width: ${props => (props.active ? '100%' : 'auto')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    justify-content: flex-start;
    width: auto;
  }

  ${system}
`;

Styled.ListIcon = styled(List)`
  position: absolute;
  right: 20px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: none;
  }

  ${system}
`;

Styled.Dropdown = styled(Box)`
  display: none;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: block;
    left: 0;
    margin-top: -100%;
    position: absolute;
    right: 0;
    transition: margin-top 0.2s ease-in;
    z-index: 998;

    &.active {
      margin-top: 0;
      top: ${themeGet('space.header')};
    }
  }
`;

export default Styled;
