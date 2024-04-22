import React from 'react';
import { Box, HtmlRenderer, Image } from 'ui-kit';

export const HeartForHouseContentBlock = props => {
  return (
    <Box
      display="flex"
      mx={{ _: 'base', lg: '0' }}
      flexDirection={{ _: 'column', md: 'row' }}
      alignItems="center"
    >
      <Box as="a" href={props?.url} target="_blank">
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
      </Box>
      <Box maxWidth={{ _: '90vw', md: 600 }}>
        <Box
          as="a"
          fontSize="h1"
          target="_blank"
          color="primary"
          fontFamily="vision"
          textDecoration="none"
          fontWeight={600}
          href={props?.url}
        >
          {props?.title}
        </Box>
        <HtmlRenderer htmlContent={props?.description} />
      </Box>
      <Box as="a" href={props?.url} target="_blank">
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
    </Box>
  );
};
