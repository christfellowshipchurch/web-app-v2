/**
 * @name PhotoCarousel
 * @description This is a custom component for Easter 2024 that displays a horizontal scrolling carousel of a wide photo.
 */

import React from 'react';
import { Box } from 'ui-kit';
import Styled from './PhotoCarousel.styles';

function PhotoCarousel({ photo }) {
  return (
    <Box overflow="hidden" borderTop="3px solid black">
      <Styled.CarouselTrack
        height={400}
        position="relative"
        display="flex"
        width={{ _: '1380%', sm: '800%', md: '720%', lg: '500%', xl: '380%' }}
      >
        <Box
          width={{ _: '690%', sm: '400%', md: '360%', lg: '250%', xl: '190%' }}
          background={`url('${photo}')`}
          backgroundSize="cover"
        />
        <Box
          width={{ _: '690%', sm: '400%', md: '360%', lg: '250%', xl: '190%' }}
          background={`url('${photo}')`}
          backgroundSize="cover"
        />
      </Styled.CarouselTrack>
    </Box>
  );
}

export default PhotoCarousel;
