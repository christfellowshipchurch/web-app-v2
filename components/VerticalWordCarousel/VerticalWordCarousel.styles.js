import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import { system } from 'ui-kit';

const WordCarousel = styled.div`
  line-height: 45px;
  height: 45px;
  overflow: hidden;

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    height: 72px;
  }

  @media screen and ((min-width: ${themeGet(
      'breakpoints.md'
    )})and (max-width: ${themeGet('breakpoints.lg')})) {
    height: 40px;
  }

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    height: 72px;
    line-height: 42px;
  }
  ${system}
`;

const Inner = styled.div`
  position: relative;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    animation: rotateIPad 12s ease-in-out infinite;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    animation: rotateLarge 12s ease-in-out infinite;
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    animation: rotate 12s ease-in-out infinite;
  }

  @keyframes rotate {
    0%,
    16% {
      transform: translateY(0);
    }
    20%,
    36% {
      transform: translateY(-112%);
    }
    40%,
    56% {
      transform: translateY(-233%);
    }
    60%,
    76% {
      transform: translateY(-338%);
    }
    80%,
    100% {
      transform: translateY(-444%);
    }
  }

  @keyframes rotateIPad {
    0%,
    16% {
      transform: translateY(0);
    }
    20%,
    36% {
      transform: translateY(-120%);
    }
    40%,
    56% {
      transform: translateY(-260%);
    }
    60%,
    76% {
      transform: translateY(-380%);
    }
    80%,
    100% {
      transform: translateY(-510%);
    }
  }

  @keyframes rotateLarge {
    0%,
    16% {
      transform: translateY(0);
    }
    20%,
    36% {
      transform: translateY(-118%);
    }
    40%,
    56% {
      transform: translateY(-231%);
    }
    60%,
    76% {
      transform: translateY(-351%);
    }
    80%,
    100% {
      transform: translateY(-468%);
    }
  }
  ${system}
`;

WordCarousel.Inner = Inner;

export default WordCarousel;
