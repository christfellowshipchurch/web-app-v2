import React from 'react';

import { Box, Icon } from 'ui-kit';
import { htmlToReactParser } from 'utils';

const LifeToTheFullest = () => {
  const data = [
    // Each is a column
    {
      title: 'Know God personally',
      subtitle:
        'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
      icon: 'bible',
      title2: 'Discover your purpose',
      subtitle2:
        "You're here for a reason. Find out who God created <i>you</i> to be and learn how to live life on purpose.",
      icon2: 'bible',
    },
    {
      title: 'Grow in your relationships',
      subtitle:
        'You weren’t meant to do life alone. Find friends and build stronger relationships with God and others.',
      icon: 'bible',
      title2: 'Impact your world',
      subtitle2:
        'You can make a difference. Learn how to impact people in your sphere of influence, your community, and on the other side of the world.',
      icon2: 'bible',
    },
  ];

  return (
    <Box
      mx={{ _: '0', md: 'auto' }}
      p="base"
      pt="0"
      pb="l"
      maxWidth={1200}
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      justifyContent="center"
    >
      {data.map(({ title, subtitle, icon, title2, subtitle2, icon2 }, i) => (
        <Box
          key={i}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mx={{ _: '0', md: 'l' }}
          mt={{ _: '0', md: 'l' }}
          mb={{ _: '0', md: 'xxl' }}
        >
          <Box
            as="h1"
            display="grid"
            gridTemplateColumns="auto auto"
            color="black"
            fontWeight="normal"
            mt="l"
            gridGap={{ _: '0.5em 0.5em', md: '1em 1em' }}
          >
            <Icon name={icon} color="tertiary" size="48" alignSelf="normal" />
            <Box maxWidth="360px">
              <Box
                as="p"
                fontSize={{
                  _: '24px',
                  md: '28px',
                }}
                mb={{ _: 'xs', md: 'base' }}
              >{`${title}`}</Box>
              <Box as="p" fontSize="16px" color="neutrals.800">
                {htmlToReactParser.parse(subtitle)}
              </Box>
            </Box>
          </Box>

          <Box
            as="h1"
            display="grid"
            gridTemplateColumns="auto auto"
            color="black"
            fontWeight="normal"
            mt="l"
            gridGap={{ _: '0.5em 0.5em', md: '1em 1em' }}
          >
            <Icon name={icon2} color="tertiary" size="48" alignSelf="normal" />
            <Box maxWidth="360px">
              <Box
                as="p"
                fontSize={{
                  _: '24px',
                  md: '28px',
                }}
                mb={{ _: 'xs', md: 'base' }}
              >{`${title2}`}</Box>
              <Box as="p" fontSize="16px" color="neutrals.800">
                {htmlToReactParser.parse(subtitle2)}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LifeToTheFullest;
