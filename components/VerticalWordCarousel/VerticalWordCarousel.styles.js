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
  animation: rotate 12s ease-in-out infinite;

  @keyframes rotate {
    0%,
    16% {
      transform: translateY(0);
    }
    20%,
    36% {
      transform: translateY(-100%);
    }
    40%,
    56% {
      transform: translateY(-200%);
    }
    60%,
    76% {
      transform: translateY(-300%);
    }
    80%,
    100% {
      transform: translateY(-400%);
    }
  }
  ${system}
`;

WordCarousel.Inner = Inner;

export default WordCarousel;
