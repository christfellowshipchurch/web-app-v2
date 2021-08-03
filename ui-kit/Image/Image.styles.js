import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const mask = ({ mask }) => {
  if (mask !== '') {
    return css`
      -webkit-mask-image: url(${props => props.mask});
      mask-image: url(${props => props.mask});

      -webkit-mask-size: contain;
      mask-size: contain;
      mask-repeat: round;
    `;
  }
  return null;
};

const StyledImage = styled.img`
  border-radius: ${themeGet('radii.base')};
  width: 100%;
  height: auto;
  object-fit: ${props => props.objectFit};
  aspect-ratio: ${props => props.aspectRatio};

  ${mask}
  ${system}
`;
export default StyledImage;
