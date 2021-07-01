import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  border-radius: ${themeGet('radii.l')};
  filter: drop-shadow(0px 10.2536px 24.6087px rgba(0, 0, 0, 0.09));
  flex: 0;
  height: 200px;
  margin: 0 0 ${themeGet('space.s')};
  object-fit: cover;
  width: 200px;

  ${system}
`;

export default styled.div`
  width: 200px;
  padding: 0 ${themeGet('space.s')};
  margin: ${themeGet('space.s')} 0;
`;
