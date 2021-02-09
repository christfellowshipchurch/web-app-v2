import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Divider = styled.hr`
  background-color: ${themeGet('colors.border')};
  border: 0;
  height: 1px;
  margin-left: auto;
  margin-right: auto;

  ${system}
`;

export default Divider;
