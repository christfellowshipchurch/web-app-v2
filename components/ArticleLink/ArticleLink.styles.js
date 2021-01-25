import styled from 'styled-components';

import { Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  min-width: 255px;
  height: 145px;
  object-fit: cover;

  ${system}
`;
