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

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: grid;
    justify-content: flex-start;
    position: relative;
  }

  ${system}
`;

Styled.LogoContainer = styled(Box)`
  align-items: center;
  align-self: center;
  display: flex;
  height: 90px;
  justify-content: center;
  padding: ${themeGet('space.base')} ${themeGet('space.xl')};
  position: ${props => props.active ? 'fixed' : 'relative'};
  width: ${props => props.active ? '100%' : 'auto'};
        
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    align-items: initial;
    justify-content: flex-start;
    position: relative;
    width: auto;
  }

  ${system}
`

Styled.ListIcon = styled(List)`
  position: absolute;
  right: 20px;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    display: none;
  }

  ${system}
`;

export default Styled;
