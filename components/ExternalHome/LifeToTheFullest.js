import React from 'react';

import { Box, Image } from 'ui-kit';

const LifeToTheFullest = () => {
  const data = [
    {
      title: 'Know God personally',
      subtitle:
        'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
      image: '/external-home-1.png',
      highlightWidth: '57%',
    },
    {
      title: 'Grow in your relationships',
      subtitle:
        "You weren't meant to do life alone. Find friends and build stronger relationships with those you love.",
      image: 'external-home-2.png',
      highlightWidth: '68%',
      shortBar: true,
    },
    {
      title: 'Discover your purpose',
      subtitle:
        "You're here for a reason. Find out who God created you to be and learn how to live life on purpose.",
      image: 'external-home-3.png',
      highlightWidth: '61%',
    },
    {
      title: 'Impact your world',
      subtitle:
        'A life lived contributing your talents, gifts and passion for your world, and a life that others are inspired to emulate.',
      image: 'external-home-4.png',
      highlightWidth: '52%',
    },
  ];

  return (
    <Box
      mx="auto"
      p="base"
      pt="l"
      maxWidth={1200}
      fontSize={{ _: '1.2rem', md: '1.7rem' }}
    >
      {data.map(({ title, subtitle, image, highlightWidth, shortBar }, i) => (
        <Box
          display={{ _: 'block', md: 'grid' }}
          gridTemplateColumns={i % 2 === 0 ? '1fr 1.618fr' : '1.618fr 1fr'}
          gridTemplateRows="1fr"
          gridGap="1em 1em"
          gridTemplateAreas={i % 2 === 0 ? `"img content"` : `"content img"`}
          my="l"
        >
          <Image
            source={image}
            maxWidth="400px"
            gridArea="img"
            my="base"
            objectFit="contain"
          />

          <Box
            gridArea="content"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            my="base"
          >
            <Box as="h1" color="black" borderRadius="xxl">
              <Box
                position="relative"
                bottom={{ _: '-29px', md: '-35px' }}
                height="18px"
                bg="primarySubdued"
                width={
                  !shortBar
                    ? { _: '90%', md: highlightWidth }
                    : { _: '60%', md: highlightWidth }
                }
                borderRadius="s"
                pl="s"
              />
              <Box as="p" position="relative" pl="xs">{`${
                i + 1
              }. ${title}`}</Box>
            </Box>
            <Box as="p">{subtitle}</Box>
          </Box>

          <Box
            as="hr"
            display={{ md: 'none' }}
            my="l"
            height="1px"
            border="none"
            backgroundColor="neutrals.200"
          />
        </Box>
      ))}
    </Box>
  );
};

export default LifeToTheFullest;
