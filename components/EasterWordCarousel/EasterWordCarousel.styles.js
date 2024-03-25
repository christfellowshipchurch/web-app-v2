import { themeGet } from '@styled-system/theme-get';
import { max } from 'lodash';
import styled from 'styled-components';
import { system } from 'ui-kit';

const EasterWordCarousel = styled.div`
  ${system}
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  color: #ffffff;
  z-index: 2;

  @media (min-width: ${themeGet('breakpoints.md')}) {
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${system}
`;

const Scroll = styled.h1`
  animation: rotate 12s ease-in-out infinite;

  @media screen and (min-width: ${themeGet(
      'breakpoints.md'
    )}) and (max-width: ${themeGet('breakpoints.lg')}) {
    animation: rotate-medium 12s ease-in-out infinite;
  }

  @media screen and (min-width: ${themeGet(
      'breakpoints.lg'
    )}) and (max-width: ${themeGet('breakpoints.xl')}) {
    animation: rotate-large 12s ease-in-out infinite;
  }

  @keyframes rotate {
    0%,
    10% {
      transform: translateY(0);
    }
    15%,
    35% {
      transform: translateY(-72px);
    }
    40%,
    60% {
      transform: translateY(-144px);
    }
    65%,
    80% {
      transform: translateY(-216px);
    }
    85%,
    95% {
      transform: translateY(-288px);
    }
    100% {
      transform: translateY(-360px);
    }
  }

  @keyframes rotate-medium {
    0%,
    10% {
      transform: translateY(0);
    }
    15%,
    35% {
      transform: translateY(-44px);
    }
    40%,
    60% {
      transform: translateY(-88px);
    }
    65%,
    80% {
      transform: translateY(-132px);
    }
    85%,
    95% {
      transform: translateY(-176px);
    }
    100% {
      transform: translateY(-220px);
    }
  }

  @keyframes rotate-large {
    0%,
    10% {
      transform: translateY(0);
    }
    15%,
    35% {
      transform: translateY(-58px);
    }
    40%,
    60% {
      transform: translateY(-116px);
    }
    65%,
    80% {
      transform: translateY(-174px);
    }
    85%,
    95% {
      transform: translateY(-232px);
    }
    100% {
      transform: translateY(-290px);
    }
  }

  ${system}
`;

EasterWordCarousel.Container = Container;
EasterWordCarousel.Scroll = Scroll;

export default EasterWordCarousel;
