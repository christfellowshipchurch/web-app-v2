import React from 'react';
import { Box, Image } from 'ui-kit';

const MarriageSlide = ({ slide }) => {
  return (
    <Box
      my={{ _: 'base', md: 'xl' }}
      p={{ _: 's', lg: 'base' }}
      flex="0 0 100%"
    >
      <Box class="weddings_mask">
        <Box class="weddings_slide">
          <Image
            class="weddings_slide-image"
            source={slide?.image}
            borderRadius={0}
          />
          <Box class="weddings_slide-content">
            <Box class="weddings_slide-title">{slide?.title}</Box>
            <Box class="weddings_slide-subtitle">{slide?.subtitle}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MarriageSlide;
