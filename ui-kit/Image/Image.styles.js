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

const DownloadLink = styled.a`
  align-items: center;
  background: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.xxl')};
  display: flex;
  height: 25px;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  right: ${themeGet('space.xs')};
  top: ${themeGet('space.xs')};
  transition: width ease-in-out 0.3s;
  width: 26px;

  :hover {
    width: 110px;
    cursor: pointer;
  }
`;

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

StyledImage.DownloadLink = DownloadLink;

export default StyledImage;
