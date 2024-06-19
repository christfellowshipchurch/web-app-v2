import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Image, system } from 'ui-kit';

export const StyledImage = styled(Image)`
  height: auto;
  object-fit: cover;
  width: 100%;
  flex: 1;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    border-bottom-left-radius: ${props => (props.rounded ? '24px' : '0')};
    border-bottom-right-radius: ${props => (props.rounded ? '24px' : '0')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 100%;
  }

  ${props =>
    props.dropShadow
      ? 'filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));'
      : ''}

  ${system}
`;

export const TextContainer = styled(Box)`
  border-radius: ${props => (props.rounded ? '0 0 24px 24px' : '0')};
  background: rgba(0, 0, 0, 0.5);
  flex: 1;

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    ${props => (!props.staticHeight ? `backdrop-filter: blur(24px);` : '')}
  }

  @media screen and (min-width: ${props =>
      props.staticHeight ? 0 : themeGet('breakpoints.sm')}) {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.95) 100%
    );
  }
  ${system}
`;

export default styled(Box)`
  position: relative;
  border-radius: ${props => (props.rounded ? '24px' : '0')};
  overflow: hidden;

  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  ${props =>
    props.backgroundSrc
      ? `background: url("${props.backgroundSrc}") no-repeat bottom center;`
      : ''}

  background-size: contain;

  ${props =>
    props.height
      ? `
      display: flex;
      flex-direction: column;
    `
      : ''}

  ${system}
`;
