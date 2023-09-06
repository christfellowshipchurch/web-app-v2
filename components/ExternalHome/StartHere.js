import { useCurrentBreakpoint } from 'hooks';
import React from 'react';
import { Box, Image, Button } from 'ui-kit';

import { startsHereButtons } from 'lib/externalHomeData';

const StartHere = () => {
  const currentBreakpoint = useCurrentBreakpoint();

  const viewPort = currentBreakpoint?.name === 'sm' ? 'mobile' : 'desktop';

  return (
    <Box
      id="start-here"
      px={{ _: 'xs', md: 'xs', lg: 'xl' }}
      py={{ _: 'xxs', md: 'xxs' }}
      backgroundImage={`url(/external-landing/wedge-${viewPort}.png), url(/external-landing/dots-${viewPort}.png), url(/external-landing/corner-${viewPort}.png)`}
      backgroundPosition="top right, bottom right, bottom left"
      backgroundRepeat="no-repeat"
    >
      <Box
        px={{ _: 'xs', md: 's', lg: 'xxl' }}
        py={{ _: 'xs', md: 'xxs', lg: 'xl' }}
        pb={{ _: 'xl' }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{ _: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gridColumnGap="xs"
          textAlign="center"
          maxWidth="1080px"
          mx={{ lg: 'auto' }}
          px={{ _: 'xs', md: 's' }}
          py={{ _: 'l', md: 'base' }}
        >
          {startsHereButtons.map(
            ({ title, subtitle, image, call, action }, i) => (
              <Box key={i} p={{ _: 'base', lg: 'l' }}>
                <Image source={image} />
                <Box>
                  <Box as="h2" mb="s">
                    {title}
                  </Box>
                  <Box as="p" mb="base">
                    {subtitle}
                  </Box>
                  <Button as="a" size="base" variant="primary" href={action}>
                    {call}
                  </Button>
                </Box>
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default StartHere;
