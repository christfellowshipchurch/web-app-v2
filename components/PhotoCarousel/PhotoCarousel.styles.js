import styled from 'styled-components';
import { system } from 'ui-kit';

const PhotoCarousel = styled.div`
  ${system}
`;

const CarouselTrack = styled.div`
  display: flex;
  position: relative;
  height: 400px;

  animation: slide 7s linear infinite;

  @media (min-width: 768px) {
    animation: slide 15s linear infinite;
  }

  @media (min-width: 960px) {
    animation: slide 20s linear infinite;
  }

  @keyframes slide {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }

  ${system}
`;

const GridPhoto = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${system}
`;

PhotoCarousel.CarouselTrack = CarouselTrack;
PhotoCarousel.GridPhoto = GridPhoto;

export default PhotoCarousel;
