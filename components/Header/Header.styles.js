import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, system } from 'ui-kit';
import { List } from 'phosphor-react';

const Styled = {};

Styled.Header = styled.header`
  align-items: center;
  box-shadow: ${themeGet('shadows.base')};
  grid-template-columns: auto 1fr;
  height: 90px;
  justify-content: center;
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
  height: 90px;
  justify-content: center;
  min-width: 322px;
  padding: ${themeGet('space.base')} ${themeGet('space.xl')};
  position: ${props => props.active ? 'fixed' : 'relative'};
  width: ${props => props.active ? '100%' : 'auto'};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    justify-content: flex-start;
    width: auto;
  }

  ${system}
`

Styled.ListIcon = styled(List)`
  position: absolute;
  right: 20px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: none;
  }

  ${system}
`;

export default Styled;
