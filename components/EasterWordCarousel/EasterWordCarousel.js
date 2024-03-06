import VideoHeader from 'components/VideoHeader';
import React from 'react';
import { Box } from 'ui-kit';

import Styled from './EasterWordCarousel.styles';

function EasterWordCarousel({
  title = 'Experience an Easter service with',
  backgroundVideo = 'https://embed.wistia.com/deliveries/a77f306b26810383456d108d6a159db0.mp4',
  words,
  customFontStyles = {},
}) {
  return (
    <Box position="relative">
      {/* Background Video */}
      <VideoHeader
        backgroundVideo={{
          desktop: backgroundVideo,
        }}
        overlay={true}
        overlayColor="rgba(70, 113, 194, 0.4)"
        logoAspectRatio="16/9"
        backgroundImage="url(/get-there-first/banner.jpg)"
        backgroundPosition="center"
        backgroundSize="cover"
      />
      {/* Word Carousel */}
      <Styled.Container width={{ _: 300, md: 605, lg: 805, xl: 1050 }}>
        <Box
          display="flex"
          width={{ _: '100vw', md: 'auto' }}
          flexDirection="column"
          alignItems={{ _: 'center', md: 'flex-start' }}
          justifyContent="center"
        >
          <Box
            ml="0px"
            textAlign={{ _: 'center', md: 'left' }}
            fontSize={{ _: 20, md: 24, lg: 26, xl: 36 }}
            fontWeight="normal"
          >
            {title}
          </Box>
          <Box
            ml={{ _: 0, md: 200 }}
            mt="s"
            display="flex"
            alignItems="center"
            textAlign={{ _: 'center', md: 'left' }}
            width={{ _: 260, md: 'auto' }}
          >
            <Box
              display="flex"
              flexDirection="column"
              overflow="hidden"
              height={{ _: 72, md: 44, lg: 56, xl: 72 }}
            >
              {words?.map((word, index) => (
                <Styled.Scroll
                  key={index}
                  mb={16}
                  fontSize={{ md: 28, lg: 42, xl: 56 }}
                  lineHeight={1}
                  {...customFontStyles}
                >
                  {word}
                </Styled.Scroll>
              ))}
            </Box>
          </Box>
        </Box>
      </Styled.Container>
    </Box>
  );
}

export default EasterWordCarousel;
