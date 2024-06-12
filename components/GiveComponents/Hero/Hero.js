import React from 'react';
import { Box, Button } from 'ui-kit';
import GiveHeroFeature from './GiveHeroFeature';
const Hero = () => {
  const callToAction = {
    title: 'GIVE NOW',
    link: '#give',
  };

  return (
    <Box
      mb="l"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <GiveHeroFeature
        backgroundImage="/give-background.jpg"
        description="When you give, you’re a part of making a difference in the lives of people right here in our region and around the world."
        cta={callToAction}
      />
      <Box mt="l" textAlign="center" maxWidth="780px">
        <Box px="base">
          <Box as="h1" mt="base" mb="base">
            Why We Give
          </Box>
          <Box
            mt="s"
            mb={{ _: 'base', md: 0 }}
            mx={{ _: 's', md: 0 }}
            display="inline"
            fontSize={18}
            lineHeight="26px"
          >
            <Box display="inline" fontWeight="bold" textDecoration="underline">
              We give because God is a giver.
            </Box>{' '}
            His very heart and nature, as shown throughout Scripture, is
            generosity. Because we’re created in His image, we’re most like Him
            when we give and steward all that He has entrusted to us. When we
            give, it positions us to be the hands and feet of Jesus in our
            region and beyond.
          </Box>
        </Box>
        <Button
          as="a"
          href="#what-the-bible-says"
          my={{ _: 'base', md: 'l' }}
          fontWeight="normal"
          fontSize="s"
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
