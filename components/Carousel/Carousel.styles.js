import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

import { Image, Text, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  min-width: 255px;
  height: 145px;
  object-fit: cover;

  ${system}
`;

export const StyledText = styled(Text)`
  border-radius: ${themeGet('radii.image')};
  padding: ${themeGet('space.xs')} ${themeGet('space.s')};
  white-space: nowrap;

  ${system}
`;

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  transition-duration: 600ms;
  transform: translate(${props => 100 * (props.index - props.selected)}%);
  width: 100%;
`;
