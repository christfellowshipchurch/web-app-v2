import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { utils } from 'ui-kit';

import { system } from 'ui-kit';

const SearchField = {};

const ClearButton = styled.div`
  align-content: center;
  align-self: center;
  background: ${themeGet('colors.white')};
  border-left: none;
  border-right: none;
  cursor: pointer;
  display: inline-flex;
  height: calc(100% - ${utils.rem('4px')});
  justify-content: center;
  position: absolute;
  right: ${utils.rem('100px')};
  width: 40px;
  zindex: 1;

  ${system}
`;

SearchField.ClearButton = ClearButton;

export default SearchField;
