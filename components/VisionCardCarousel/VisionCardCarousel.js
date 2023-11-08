import React from 'react';
import { Box, Card, CardCarousel, Icon } from 'ui-kit';

import visionCards from './visionCards';

/**
 * This is a visual component for the Christ Birthday Offering page 2023.
 */

function VisionCardCarousel() {
  return (
    <Box
      id="vision"
      backgroundImage="url('/christ-birthday-offering/vision-background.jpg')"
      backgroundSize="cover"
      py="l"
    >
      <Box
        as="img"
        maxWidth={400}
        mx="auto"
        src="/christ-birthday-offering/vision-logo.png"
      />
      <Box as="h4" textAlign="center" maxWidth={600} my="base" mx="auto">
        Every dollar you give to Christ Birthday Offering will make a difference
        toward continuing our impact both locally and globally
      </Box>

      <CardCarousel cardsDisplayed={3.5}>
        {visionCards.map(({ icon, text }, index) => (
          <Card height="100%" ml="base" py="xl" textAlign="center">
            <Icon name={icon} size={60} />
            <Box mt="base" mx="l">
              {text}h
            </Box>
          </Card>
        ))}
      </CardCarousel>
    </Box>
  );
}

export default VisionCardCarousel;
