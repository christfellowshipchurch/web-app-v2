import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Link from 'next/link';
import { Icon, system } from 'ui-kit';

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

const IconLink = styled.div`
  position: absolute;
  top: ${themeGet('space.xs')};
  right: ${themeGet('space.xs')};
  background: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.xxl')};
  cursor: pointer;
`;

const StyledImage = styled.img`
  border-radius: ${themeGet('radii.base')};
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  object-fit: ${props => props.objectFit};
  aspect-ratio: ${props => props.aspectRatio};

  ${mask}
  ${system}
`;

StyledImage.IconLink = IconLink;

export default StyledImage;
