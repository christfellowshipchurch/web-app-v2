import React, { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { Box, HtmlRenderer, Icon } from 'ui-kit';
import { StyledScrollBox, StyledCard } from './VisionCardCarousel.styles';

import visionCards from './visionCards';

/**
 * This is a visual component for the Christ Birthday Offering page 2023.
 */

function VisionCardCarousel() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <Box
      id="vision"
      backgroundImage="url('/christ-birthday-offering/vision-background.jpg')"
      backgroundSize="cover"
      py="l"
    >
      <Box
        as="img"
        maxWidth={{ _: 360, md: 400 }}
        mx="auto"
        src="/christ-birthday-offering/vision-logo.png"
      />
      <Box
        as="h4"
        textAlign="center"
        maxWidth={600}
        my="base"
        mx="auto"
        px="base"
      >
        Every dollar you give to Christ Birthday Offering will make a difference
        toward continuing our impact both locally and globally.
      </Box>

      {/* Card Scroll */}
      <StyledScrollBox {...events} ref={ref}>
        {/* Blank box to offset scroll */}
        <Box
          minWidth={{ _: 20, md: 40 }}
          ml="base"
          py="xl"
          textAlign="center"
        />
        {/* Vision Cards */}
        {visionCards.map(({ icon, text }, index) => (
          <StyledCard
            minWidth={{ _: 250, md: 300 }}
            mx="s"
            textAlign="center"
            my="l"
            py="l"
          >
            <Icon name={icon} size={{ _: 50, md: 60 }} />
            <Box mt="l" mx="base">
              <HtmlRenderer htmlContent={text} />
            </Box>
          </StyledCard>
        ))}
      </StyledScrollBox>
    </Box>
  );
}

export default VisionCardCarousel;
