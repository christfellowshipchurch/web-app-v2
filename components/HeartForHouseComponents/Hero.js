import React from 'react';
import { Box, Button } from 'ui-kit';

const HeartForHouseHero = ({ id }) => {
  return (
    <Box id={id} bg="white" py={{ lg: 'base' }}>
      <Box
        display="flex"
        justifyContent="end"
        py={{ _: 'l', md: 'xxl' }}
        backgroundImage="url('/heart-for-house/h4h-logo.png')"
        backgroundRepeat="no-repeat"
        backgroundSize={{ _: '64vh', sm: '70vh', md: '85vh', lg: '95vh' }}
        backgroundPosition={{
          _: '-260px 50%',
          sm: '-300px 50%',
          md: '-240px 50%',
          lg: '-200px 50%',
        }}
        height="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          mr={{ _: 's', md: '8%' }}
          py={{ _: 'xxl', md: 0 }}
        >
          <Box
            fontSize={{ _: 42, md: 56 }}
            fontWeight="600"
            fontFamily="vision"
            color="primary"
            style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
          >
            2024
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Box
              fontSize={{ _: 42, md: 56 }}
              fontWeight="600"
              fontFamily="vision"
              textAlign="right"
              color="primary"
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
              buttonHover="#E63E51"
              href="#give"
              border="1px solid #7A7A79"
            >
              GIVE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeartForHouseHero;
