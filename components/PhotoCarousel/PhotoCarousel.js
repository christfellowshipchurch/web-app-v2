import React from 'react';
import { Box } from 'ui-kit';
import Styled from './PhotoCarousel.styles';
import { chunk } from 'lodash';

function calculateFlex(index, chunkIndex) {
  const isEven = chunkIndex % 2 === 0;
  return (index === 0 && isEven) || (index === 1 && !isEven) ? 1 : 2;
}

function PhotoCarousel(props = {}) {
  const chunked = chunk(props?.photos, 2);

  return (
    <Box overflow="hidden">
      <Styled.CarouselTrack
        width={{ _: '600%', sm: '400%', md: '300%', lg: '200%' }}
      >
        {chunked.map((chunk, chunkIndex) => {
          return (
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              key={chunkIndex}
            >
              {chunk.map((photo, index) => (
                <Styled.GridPhoto
                  key={index}
                  backgroundImage={`url(${photo})`}
                  flex={calculateFlex(index, chunkIndex)}
                />
              ))}
            </Box>
          );
        })}
        {/* We need to render the photos twice to create the infinite scroll effect with 200% width */}
        {chunked.map((chunk, chunkIndex) => {
          return (
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              key={chunkIndex}
            >
              {chunk.map((photo, index) => (
                <Styled.GridPhoto
                  key={index}
                  backgroundImage={`url(${photo})`}
                  flex={calculateFlex(index, chunkIndex)}
                />
              ))}
            </Box>
          );
        })}
      </Styled.CarouselTrack>
    </Box>
  );
}

export default PhotoCarousel;