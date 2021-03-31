import styled from 'styled-components';

import { Box, system } from 'ui-kit';

const Styled = {};

Styled.Content = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;

  ${system}
`;

export default Styled;
