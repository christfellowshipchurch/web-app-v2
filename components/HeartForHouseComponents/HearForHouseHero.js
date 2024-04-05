import React from 'react';
import { Box, Button, Image } from 'ui-kit';
import { colorHover } from 'utils';

const HeartForHouseHero = () => {
  return (
    <Box bg="white" display="flex" justifyContent="space-between" py="base">
      <Box py="base">
        <Image
          source="/heart-for-house/h4h-cropped-logo.png"
          objectFit="contain"
          height={{ _: 520, md: 700 }}
          ml={{ _: 0, md: -54 }}
          mt={{ _: -40, md: 0 }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mr={{ _: 's', md: '8%' }}
        py="l"
      >
        <Box
          fontSize={{ _: 42, md: 52 }}
          fontWeight="bold"
          fontFamily="vision"
          color="#E63E51"
          style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
        >
          2024
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Box
            fontSize={{ _: 42, md: 52 }}
            fontWeight="bold"
            fontFamily="vision"
            textAlign="right"
            color="#E63E51"
          >
            HEART <br />
            FOR <br />
            THE <br />
            HOUSE
          </Box>
          <Button
            as="a"
            mt="s"
            px={0}
            py="xs"
            width={{ _: 120, md: 140 }}
            color="#7A7A79"
            variant="secondary"
            href="#give"
            border="1px solid #7A7A79"
            buttonHover={colorHover('white')}
          >
            GIVE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeartForHouseHero;
