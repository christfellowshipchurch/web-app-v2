import styled from 'styled-components';
import { system } from 'ui-kit';

const PhotoCarousel = styled.div`
  ${system}
`;

const CarouselTrack = styled.div`
  animation: slide 45s linear infinite;

  @media only screen and (min-width: 480px) {
    animation: slide-sm 45s linear infinite;
  }

  @media only screen and (min-width: 768px) {
    animation: slide-md 45s linear infinite;
  }

  @media only screen and (min-width: 1024px) {
    animation: slide-lg 45s linear infinite;
  }

  @media only screen and (min-width: 1350px) {
    animation: slide-xl 45s linear infinite;
  }

  @keyframes slide {
    0% {
      left: 0;
    }
    100% {
      left: -690%;
    }
  }

  @keyframes slide-sm {
    0% {
      left: 0;
    }
    100% {
      left: -400%;
    }
  }

  @keyframes slide-md {
    0% {
      left: 0;
    }
    100% {
      left: -360%;
    }
  }

  @keyframes slide-lg {
    0% {
      left: 0;
    }
    100% {
      left: -250%;
    }
  }

  @keyframes slide-xl {
    0% {
      left: 0;
    }
    100% {
      left: -190%;
    }
  }

  ${system}
`;

const GridPhoto = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid #000000;

  ${system}
`;

PhotoCarousel.CarouselTrack = CarouselTrack;
PhotoCarousel.GridPhoto = GridPhoto;

export default PhotoCarousel;
