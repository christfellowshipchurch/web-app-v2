import React from 'react';
import { Box, HtmlRenderer, Image } from 'ui-kit';

const HeartForHouseContentBlock = props => {
  return (
    <Box
      display="flex"
      mx={{ _: 'base', lg: '0' }}
      flexDirection={{ _: 'column', md: 'row' }}
      alignItems="center"
    >
      <Image
        display={{
          _: 'block',
          md: props?.layout === 'left' ? 'block' : 'none',
        }}
        source={props?.image}
        width={{ _: '90vw', md: 500 }}
        height={{ _: 200, md: 300 }}
        borderRadius={0}
        m={0}
        mr={{ _: '0', md: 'base' }}
        mb={{ _: 'base', md: 0 }}
      />
      <Box maxWidth={{ _: '90vw', md: 600 }}>
        <Box as="h1" color="primary" fontFamily="vision">
          {props?.title}
        </Box>
        <HtmlRenderer htmlContent={props?.description} />
      </Box>
      <Image
        display={{
          _: 'none',
          md: props?.layout === 'right' ? 'block' : 'none',
        }}
        source={props?.image}
        width={500}
        height={300}
        borderRadius={0}
        mr={{ _: '0', md: 'base' }}
      />
    </Box>
  );
};

export default HeartForHouseContentBlock;
