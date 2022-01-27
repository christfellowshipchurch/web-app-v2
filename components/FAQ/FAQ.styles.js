import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const FAQ = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: ${themeGet('space.l')};

  ${system}
`;

export default FAQ;
