import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Search = {};

const visibility = ({ visible }) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
`;

const ResultsCount = styled.p`
  color: ${themeGet('color.subdued')};

  ${visibility};
  ${system}
`;

Search.ResultsCount = ResultsCount;

export default Search;
