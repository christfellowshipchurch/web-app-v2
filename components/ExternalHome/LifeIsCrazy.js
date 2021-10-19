import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { Box } from 'ui-kit';

const LifeIsCrazy = () => [
  <Box
    as="h1"
    mt="l"
    fontSize={{ _: '', md: '3rem' }}
    display="flex"
    color="black"
  >
    Life is
    <Box ml="xs" mb="s" minWidth={{ _: 200, md: 320 }} borderBottom="2px solid">
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
    But we want to help you live life to the fullest.
  </Box>,
  <Box as="h2">And here's how.</Box>,
];

export default LifeIsCrazy;
