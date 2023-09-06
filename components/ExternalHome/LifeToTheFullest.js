import React from 'react';

import { Box, Icon } from 'ui-kit';
import { htmlToReactParser } from 'utils';

const data = [
  {
    title: 'Know God personally',
    subtitle:
      'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
    icon: 'heart',
  },
  {
    title: 'Discover your purpose',
    subtitle:
      "You're here for a reason. Find out who God created <i>you</i> to be and learn how to live life on purpose.",
    icon: 'search',
  },
  {
    title: 'Grow in your relationships',
    subtitle:
      'You weren’t meant to do life alone. Find friends and build stronger relationships with God and others.',
    icon: 'handshake',
  },
  {
    title: 'Impact your world',
    subtitle:
      'You can make a difference. Learn how to impact people in your sphere of influence, your community, and on the other side of the world.',
    icon: 'earth',
  },
];

const LifeToTheFullest = () => (
  <Box
    mx={{ _: '0', md: 'auto' }}
    p="base"
    pb="xxl"
    maxWidth={1200}
    display="grid"
    justifyContent="center"
    gridTemplateColumns={{ _: 'auto', md: 'auto auto' }}
  >
    {data.map(({ title, subtitle, icon }, i) => (
      <Box
        key={i}
        display="flex"
        alignItems="center"
        mx={{ _: '0', md: 'l' }}
        my={{ _: 'base', md: 'l' }}
      >
        <Icon
          name={icon}
          color="tertiary"
          size="48"
          alignSelf="normal"
          mr="base"
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
