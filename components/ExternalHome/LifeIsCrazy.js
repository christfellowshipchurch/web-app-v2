import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { Box } from 'ui-kit';

const LifeIsCrazy = () => [
  <Box
    as="h1"
    mt="l"
    fontSize={{ _: '1.5rem', md: '3rem' }}
    display="flex"
    color="black"
  >
    Life can be
    <Box ml="xs" mb="s" minWidth={{ _: 200, md: 360 }} borderBottom="2px solid">
      <Typewriter
        words={['crazy', 'overwhelming', 'complicated', 'unpredictable']}
        loop={0} //infinite loops
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </Box>
    .
  </Box>,
  <Box as="h2" mb={0} fontWeight="normal">
    But it doesn’t have to be. We want to help you live life to the fullest.
    <br />
    <b>And here’s how.</b>
  </Box>,
];

export default LifeIsCrazy;
