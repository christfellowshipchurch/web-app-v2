import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Icon, system } from 'ui-kit';
import { Circle } from 'phosphor-react';

const Styled = {};

Styled.GodLovesYou = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    flex-wrap: nowrap;
  }

  ${system}
`;

Styled.GodLoves = styled(Icon)`
  height: 50px;
  width: 266px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 66px;
    width: 532px;
  }

  ${system}
`;

Styled.You = styled(Icon)`
  height: 33px;
  width: 100px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 66px;
    width: 200px;
  }

  ${system}
`;

Styled.Circle = styled(Circle)`
  height: 0.5em;
  width: 0.5em;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 1em;
    width: 1em;
  }

  ${system}
`;

export default Styled;
