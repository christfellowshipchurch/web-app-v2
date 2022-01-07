import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DownloadButton = styled.a`
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
  padding-left: ${({ status }) => (status === 'DONE' ? '10px' : '0')};
  padding-right: ${({ status }) => (status === 'DONE' ? '10px' : '0')};

  disabled: ${({ status }) => (status === 'DONE' ? 'disabled' : false)};

  -webkit-transition: padding 0.5s;
  transition: padding 0.5s;

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    padding-left: 10px;
    padding-right: 10px;
  }

  span {
    display: inline-block;
    max-width: ${({ status }) => (status === 'DONE' ? '7rem' : '0')};

    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;

    -webkit-transition: max-width 0.5s;
    transition: max-width 0.5s;

    @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
      max-width: 7rem;
      margin-left: 3px;
    }
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

const Img = styled.div`
  position: relative;
`;

Img.DownloadButton = DownloadButton;

export default Img;
