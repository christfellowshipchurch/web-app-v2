import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { system } from 'ui-kit';

const SquareAvatar = styled.img`
  border-radius: ${themeGet('radii.l')};
  object-fit: cover;

  ${system}
`;

export default SquareAvatar;
