import styled from 'styled-components';

import { Box, Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100%;

  ${system}
`;

export default styled(Box)`
  align-items: flex-end;
  align-self: center;
  display: flex;
  position: relative;

  cursor: ${props => (props.clickable ? 'pointer' : 'default')};

  ${system}
`;
