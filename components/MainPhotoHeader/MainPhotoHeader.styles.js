import styled from 'styled-components';

import { Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  width: 100%;
  max-height: 80vh;
  object-fit: cover;

  ${system}
`;
