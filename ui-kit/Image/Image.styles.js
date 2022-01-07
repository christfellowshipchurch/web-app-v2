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
  aspect-ratio: ${props => props.aspectRatio};
  border-radius: ${themeGet('radii.base')};
  height: auto;
  margin-left: auto;
  margin-right: auto;
  object-fit: ${props => props.objectFit};
  width: 100%;

  ${mask}
  ${system}
`;

export default StyledImage;
