import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, theme } from 'ui-kit';

const backgroundColor = ({ bg }) => css`
  background: ${themeGet(`colors.${bg}`)};
`;

const ValueStack = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    flex-direction: row;
  }
`;

const Item = styled.h2`
  color: white;
  text-align: center;

  padding-top: ${themeGet('space.l')};
  padding-bottom: ${themeGet('space.l')};
  padding-right: ${themeGet('space.s')};
  padding-left: ${themeGet('space.s')};

  margin-bottom: 0;
  flex-grow: 1;

  // note : the Value Stack looks best when the font is a little bit smaller on desktop
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 1.375rem;
  }

  ${backgroundColor};
`;

ValueStack.Item = Item;

export default ValueStack;
