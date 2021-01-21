import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Divider = styled.hr`
  background-color: ${themeGet('colors.border')};
  border: 0;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${themeGet('space.xl')};
  max-width: 50rem;

  ${system}
`;

export default Divider;
