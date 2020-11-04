import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const Longform = styled.div`
  > p:not(:last-child) {
    margin-bottom: ${themeGet('space.base')};
  }

  ${system}
`;

export default Longform;
