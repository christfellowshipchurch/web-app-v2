import React from 'react';

import { Box, Image } from 'ui-kit';
import { htmlToReactParser } from 'utils';

const LifeToTheFullest = () => {
  const data = [
    {
      title: 'Know God personally',
      subtitle:
        'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
      image: '/external-home-1.png',
      highlightWidth: '57%',
      highlightWidthSmall: '80%',
    },
    {
      title: 'Grow in your relationships',
      subtitle:
        'You weren’t meant to do life alone. Find friends and build stronger relationships with God and others.',
      image: 'external-home-2.png',
      highlightWidth: '69%',
      highlightWidthSmall: '98%',
    },
    {
      title: 'Discover your purpose',
      subtitle:
        "You're here for a reason. Find out who God created <i>you</i> to be and learn how to live life on purpose.",
      image: 'external-home-3.png',
      highlightWidth: '61%',
      highlightWidthSmall: '85%',
    },
    {
      title: 'Impact your world',
      subtitle:
        'You can make a difference. Learn how to impact people in your sphere of influence, your community, and on the other side of the world.',
      image: 'external-home-4.png',
      highlightWidth: '52%',
      highlightWidthSmall: '70%',
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
      {data.map(
        (
          { title, subtitle, image, highlightWidth, highlightWidthSmall },
          i
        ) => (
          <Box
            display={{ _: 'flex', md: 'grid' }}
            flexDirection="column"
            alignItems="center"
            mx="auto"
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
              my={{ _: '-30px', md: 'base' }}
            >
              <Box as="h1" color="black" borderRadius="xxl">
                <Box
                  position="relative"
                  bottom={{ _: '-25px', md: '-35px' }}
                  height={{ _: '16px', md: '18px' }}
                  bg="primarySubdued"
                  width={{
                    _: highlightWidthSmall,
                    sm: highlightWidth,
                    md: highlightWidthSmall,
                    lg: highlightWidth,
                  }}
                  borderRadius="s"
                  pl="s"
                />
                <Box
                  as="p"
                  fontSize={{
                    _: '1.50rem',
                    sm: '1.75rem',
                    md: '2.03rem',
                    lg: '2.3rem',
                  }}
                  position="relative"
                  pl="xs"
                >{`${i + 1}. ${title}`}</Box>
              </Box>
              <Box
                as="p"
                fontSize={{ _: '1.2rem', md: '1.4rem', lg: '1.7rem' }}
              >
                {htmlToReactParser.parse(subtitle)}
              </Box>
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
        )
      )}
    </Box>
  );
};

export default LifeToTheFullest;