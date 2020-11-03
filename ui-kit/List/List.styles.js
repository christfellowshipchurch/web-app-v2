import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const List = styled.ul`
  list-style-type: none;

  > *:not(:last-child) {
    margin-bottom: ${props => themeGet(`space.${props.space}`)(props)};
  }

  ${system}
`;

export default List;
