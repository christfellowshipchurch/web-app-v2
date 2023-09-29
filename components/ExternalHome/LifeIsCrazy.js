import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { Box } from 'ui-kit';
import { useCurrentBreakpoint } from 'hooks';

const LifeIsCrazy = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      px="base"
      pt={{ _: 'xl', md: 'xxl' }}
      pb="l"
      mx="auto"
      style={{
        backgroundImage:
          !currentBreakpoint.isSmall && !currentBreakpoint.isMedium
            ? 'url(/background-dots-orange.png)'
            : '',
        backgroundPosition: '10px 0px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        as="h1"
        mt="l"
        fontSize={{ _: '1.8rem', md: '3rem' }}
        display="flex"
        color="black"
        textAlign="center"
      >
        Life can be
        {!currentBreakpoint.isSmall && (
          <Box
            as="h1"
            ml="xs"
            mb="s"
            minWidth={{ _: 200, md: 360 }}
            borderBottom="2px solid"
            fontSize={{ _: '1.8rem', md: '3rem' }}
          >
            <Typewriter
              words={['crazy', 'overwhelming', 'complicated', 'unpredictable']}
              loop={0} //infinite loops
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            .
          </Box>
        )}
      </Box>
      {currentBreakpoint.isSmall && (
        <Box
          as="h1"
          ml="xs"
          mb="s"
          minWidth={{ _: 200, md: 360 }}
          borderBottom="2px solid"
          fontSize={{ _: '1.8rem', md: '3rem' }}
        >
          <Typewriter
            words={['crazy', 'overwhelming', 'complicated', 'unpredictable']}
            loop={0} //infinite loops
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
          .
        </Box>
      )}

      <Box
        as="h3"
        mv="s"
        fontWeight="normal"
        width={{ _: 'auto', md: '54%' }}
        fontSize={{ _: '16px', md: '22px' }}
        mt="base"
      >
        But it doesn’t have to be. At Christ Fellowship Church we want to help
        you live life to the fullest.
      </Box>
      <Box as="h3" mb={0} fontWeight="normal">
        <b>And here’s how.</b>
      </Box>
    </Box>
  );
};

export default LifeIsCrazy;
