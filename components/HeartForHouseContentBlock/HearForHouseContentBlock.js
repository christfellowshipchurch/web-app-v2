import React from 'react';
import { Box, HtmlRenderer, Image } from 'ui-kit';

const HeartForHouseContentBlock = props => {
  console.log(props);
  console.log(props);

  return (
    <Box display="flex" alignItems="center">
      <Image
        display={props?.layout === 'left' ? 'block' : 'none'}
        source={props?.image}
        width={500}
        height={300}
        borderRadius={0}
        mr={{ _: '0', md: 'base' }}
      />
      <Box maxWidth={{ _: '90vw', md: 600 }}>
        <HtmlRenderer htmlContent={props?.title} />
        <HtmlRenderer htmlContent={props?.description} />
      </Box>
      <Image
        display={props?.layout === 'right' ? 'block' : 'none'}
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
