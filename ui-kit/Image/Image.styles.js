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

const DownloadLink = styled.a`
  background: ${themeGet('colors.white')};
  border-radius: ${themeGet('radii.xxl')};
  text-decoration: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  position: absolute;
  min-width: 25px;
  min-height: 25px;
  right: ${themeGet('space.xs')};
  top: ${themeGet('space.xs')};
  padding-left: ${({ status }) => status === "DONE" ? "10px" : "0"};
  padding-right: ${({ status }) => status === "DONE" ? "10px" : "0"};

  disabled: ${({ status }) => status === "DONE" ? "disabled" : false};

  -webkit-transition: padding 0.5s;
  transition: padding 0.5s;

  span {
    display: inline-block;
    max-width: ${({ status }) => status === "DONE" ? "7rem" : "0"};

    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;

    -webkit-transition: max-width 0.5s;
    transition: max-width 0.5s;
  }

  :hover {
    padding-left: 10px;
    padding-right: 10px;

    cursor: pointer;
    text-decoration: none;

    span {
      max-width: 7rem;
    }
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
