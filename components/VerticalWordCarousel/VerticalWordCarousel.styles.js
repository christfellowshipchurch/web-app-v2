import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import { system } from 'ui-kit';

const WordCarousel = styled.div`
  line-height: 45px;
  height: 45px;
  overflow: hidden;

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    height: 90px;
  }
  ${system}
`;

const Inner = styled.div`
  position: relative;
  animation: rotate 16s ease-in-out infinite;

  @keyframes rotate {
    0%,
    14% {
      transform: translateY(0);
    }
    17%,
    31% {
      transform: translateY(-100%);
    }
    34%,
    48% {
      transform: translateY(-200%);
    }
    51%,
    65% {
      transform: translateY(-300%);
    }
    67%,
    81% {
      transform: translateY(-400%);
    }
    84%,
    100% {
      transform: translateY(-500%);
    }
  }
  ${system}
`;

WordCarousel.Inner = Inner;

export default WordCarousel;
