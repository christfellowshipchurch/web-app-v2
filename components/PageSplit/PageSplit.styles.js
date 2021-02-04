import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { system } from 'ui-kit';

const PageSplit = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${system}
`;

export const Gradient = styled.div`
  background: linear-gradient(
    to right,
    ${themeGet('colors.gradient.0')},
    ${themeGet('colors.gradient.1')}
  );

  ${system}
`;

export default PageSplit;
