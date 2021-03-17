import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const StyledImage = styled.img`
  border-radius: ${themeGet('radii.base')};
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: ${props => props.aspectRatio};

  ${system}
`;

export default StyledImage;
