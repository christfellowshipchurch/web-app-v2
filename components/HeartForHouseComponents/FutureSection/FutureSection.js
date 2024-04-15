import React from 'react';
import { Box, Button } from 'ui-kit';

import { HeartForHouseContentBlock } from './FutureSection.components';

import { CONTENT_BLOCK_DATA } from './FutureSection.data';

const HeartForHouseFutureSection = ({ id }) => {
  return (
    <Box id={id} bg="#EBEBEB">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="xl"
        backgroundImage={{
          lg: 'url(/heart-for-house/i-heart-house-white.png)',
        }}
        backgroundSize="170px"
        backgroundRepeat="no-repeat"
        backgroundPosition="right 8% bottom 95%"
      >
        <Box
          width="fit-content"
          color="#414141"
          fontSize={{ _: 34, md: 58 }}
          fontWeight={600}
          textAlign="center"
          mx={{ _: 's', md: '0' }}
          background="url(/heart-for-house/future-rectangle.png)"
          backgroundSize={{ _: 400, md: 640 }}
          backgroundPosition="center 55%"
          backgroundRepeat="no-repeat "
        >
          THE{' '}
          <Box display="inline" color="primary" textDecoration="underline">
            FUTURE
          </Box>
          <br /> WE’RE PRAYING FOR
          <br /> STARTS{' '}
          <Box display="inline" color="primary" textDecoration="underline">
            TODAY
          </Box>
        </Box>
        <Box
          display={{ _: 'none', md: 'inline' }}
          mt="s"
          mb="base"
          textAlign="center"
          color="#818181"
        >
          WHY WE'RE GIVING
        </Box>
        {CONTENT_BLOCK_DATA?.map((section, index) => {
          return (
            <Box my="l">
              <HeartForHouseContentBlock
                title={section?.title}
                description={section?.description}
                image={section?.image}
                layout={section?.orientation}
              />
            </Box>
          );
        })}
        <Button
          mt="l"
          as="a"
          href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/16?fr=sNWI3MDcyMzY3MDE"
          target="_blank"
        >
          SEE MORE
        </Button>
      </Box>
    </Box>
  );
};

export default HeartForHouseFutureSection;
