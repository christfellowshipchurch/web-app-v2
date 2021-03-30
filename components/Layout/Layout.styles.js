import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Box, system } from 'ui-kit';

const Styled = {};

Styled.Content = styled(Box)`
  display: flex;
  flex: 1;
  max-width: ${themeGet('breakpoints.xl')};
  overflow-x: hidden;

  ${system}
`;

export default Styled;
