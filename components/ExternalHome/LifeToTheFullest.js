import React from 'react';

import { Box, Icon } from 'ui-kit';
import { htmlToReactParser } from 'utils';

import { lifeToTheFullest } from 'lib/externalHomeData';

const LifeToTheFullest = () => (
  <Box
    mx={{ _: '0', md: 'auto' }}
    p="base"
    pb="xxl"
    maxWidth={1200}
    display="grid"
    justifyContent="center"
    gridTemplateColumns={{ _: 'auto', md: '1fr 1fr' }}
  >
    {lifeToTheFullest.map(({ title, subtitle, icon }, i) => (
      <Box
        key={i}
        justifySelf="center"
        display="flex"
        alignItems="start"
        mx={{ _: '0', md: 'base' }}
        my={{ _: 'base', md: 'l' }}
      >
        <Icon
          name={icon}
          color="tertiary"
          size="48"
          alignSelf="normal"
          mr="base"
          minWidth="48px"
        />
        <Box maxWidth={{ _: 290, md: 360 }}>
          <Box
            as="p"
            fontSize={{
              _: '24px',
              md: '28px',
            }}
            mb="s"
          >{`${title}`}</Box>
          <Box as="p" color="neutrals.800">
            {htmlToReactParser.parse(subtitle)}
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
);

export default LifeToTheFullest;
