import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Button as _Button, system } from 'ui-kit';

const Search = {};

export const Input = styled.input`
  border-width: 0;
  border-radius: ${themeGet('radii.button')};
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
  font-size: ${themeGet('fontSizes.h4')};
  padding-left: 25px;
  padding-right: 155px;
  height: 52px;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${system}
`;

export const Button = styled(_Button)`
  padding: 0 25px;
  position: absolute;
  right: 0;

  &:focus {
    outline: none;
  }
`;

Search.Input = Input;
Search.Button = Button;

export default Search;
