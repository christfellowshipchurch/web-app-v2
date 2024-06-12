import React from 'react';
import { Box, Image } from 'ui-kit';
import Styled from './GiveHeroFeature.styles';

const GiveFeatureHero = props => {
  const { description, cta, backgroundImage } = props;
  return (
    <Box
      backgroundImage={{ lg: 'url(/give/hero.jpg)' }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      display="flex"
      flexDirection={{ _: 'column-reverse', lg: 'row' }}
      alignItems={{ md: 'center' }}
      justifyContent="space-between"
      height={{ _: '100svh', lg: 'auto' }}
    >
      <Box
        py="base"
        px="l"
        width={{ _: '100vw', lg: '50vw' }}
        height={{ _: '50svh', md: '100%', lg: 'auto' }}
        display="flex"
        justifyContent={{ md: 'center', lg: 'flex-start' }}
        alignItems="center"
        backgroundImage={{
          _: 'url(/give/background-image-mobile.png)',
          lg: 'none',
        }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          ml={{ lg: 'base' }}
        >
          <Box
            fontSize={{ _: 36, md: 54, lg: 46, xl: 64 }}
            color="white"
            width={{ _: 240, md: 580, lg: 400 }}
            position="relative"
          >
            Your Giving Makes <br display={{ _: 'block', md: 'none' }} /> an{' '}
            <Box
              display="inline"
              position="relative"
              zIndex="2"
              fontWeight={800}
            >
              Impact
            </Box>
            <Box
              zIndex="1"
              height={{ md: 4, lg: 3, xl: 5 }}
              width={{ md: 180, lg: 150, xl: 208 }}
              bg="#0092BC"
              position="absolute"
              bottom={{ md: 10, lg: 9 }}
              left={{ md: 70, lg: 62, xl: 87 }}
            />
          </Box>
          <Box
            fontSize={{ _: '1.25rem', md: '1rem', lg: '1.1rem', xl: '1.4rem' }}
            color="white"
            maxWidth={{ _: 300, md: 400, lg: 480, xl: 660 }}
            mt="s"
            mb="base"
          >
            {description}
          </Box>
          <Styled.HeroButton variant="secondary" as="a" href={cta?.link}>
            {cta?.title}
          </Styled.HeroButton>
        </Box>
      </Box>
      <Box width={{ _: '100vw', lg: '50vw' }}>
        <Image
          borderRadius={0}
          boxShadow="inset 0 0 100px #f8a100"
          width="100%"
          height={{ _: '50svh', lg: 'auto' }}
          source={backgroundImage}
          alt="Saturday Serve"
        />
      </Box>
    </Box>
  );
};

export default GiveFeatureHero;
