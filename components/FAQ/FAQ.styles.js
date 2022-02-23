import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const FAQ = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  margin: ${themeGet('space.l')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    grid-template-columns: 1fr;
    margin: 0px;
  }

  ${system}
`;

export default FAQ;
