import React from 'react';
import { Box, Image } from 'ui-kit';

import Styled from './EasterHero.styles';
import { colorHover } from 'utils';

function EasterHero({
  title = 'EASTER',
  buttonTitle = 'Find A Service Near Me',
  buttonLink = '#times-locations',
}) {
  return (
    <Box pt="l" pb="xl">
      <Image
        width={{ _: '90vw', md: 600, lg: 800 }}
        aspectRatio="auto"
        source="/easter/easter-logo.png"
      />
      <Box
        my="base"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={0}
        color="black"
        fontFamily="retroica"
        fontWeight="500"
      >
        <Box fontSize={{ _: 88, md: 110, lg: 124 }} lineHeight="0.7">
          {title}
        </Box>
        <Box mt={0} fontSize={{ _: 27, md: 34, lg: 38 }}>
          {`${title === 'PASCUA' ? 'EN' : 'AT'} CHRIST FELLOWSHIP`}
        </Box>
      </Box>
      <Box mt="l" display="flex" justifyContent="center">
        <Styled.HeroButton
          as="a"
          buttonHover={colorHover('#3B7DD9')}
          hoverTextColor="white"
          href={buttonLink}
        >
          {buttonTitle}
        </Styled.HeroButton>
      </Box>
    </Box>
  );
}

export default EasterHero;
