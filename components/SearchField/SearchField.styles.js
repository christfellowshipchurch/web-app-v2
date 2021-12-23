import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, utils, Button, Box } from 'ui-kit';

const SearchField = {};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  border-radius: ${themeGet('radii.xxl')};
  width: 100%;

  ${system}
`;

const SearchButton = styled(Button)`
  align-items: center;
  border-radius: ${themeGet('radii.xxl')};
  display: flex;
  margin-right: ${themeGet('space.xs')};
  margin-bottom: ${themeGet('space.xs')};
  margin-top: ${themeGet('space.xs')};
  outline: none;
  padding: 0px;
  z-index: 1;

  ${system}
`;

SearchField.SearchButton = SearchButton;
SearchField.Container = Container;

export default SearchField;
