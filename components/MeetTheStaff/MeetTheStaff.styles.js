import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  border-radius: ${themeGet('radii.l')};
  height: 190px;
  margin: 0 0 ${themeGet('space.s')};
  max-width: 270px;
  object-fit: cover;
  filter: drop-shadow(0px 10.2536px 24.6087px rgba(0, 0, 0, 0.09));

  ${system}
`;

export default styled.div`
  max-width: ${themeGet('breakpoints.sm')};
  padding: 0 ${themeGet('space.s')};
  margin: ${themeGet('space.s')} 0;
`;
