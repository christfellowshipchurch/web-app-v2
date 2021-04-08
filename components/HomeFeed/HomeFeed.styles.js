import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { Circle } from 'phosphor-react';

const Styled = {};

Styled.GodLovesYou = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    flex-wrap: nowrap;
  }

  ${system}
`;

Styled.Circle = styled(Circle)`
  height: 0.5em;
  width: 0.5em;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 1em;
    width: 1em;
  }

  ${system}
`;

export default Styled;
