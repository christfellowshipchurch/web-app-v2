import styled from 'styled-components';

import { Box, Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100%;

  ${props => props.dropShadow ? 'filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));' : ''}

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
