import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding } from 'components';
import { Box, ContentBlock, Image, Icon, ValueStack } from 'ui-kit';

import random from 'lodash/random';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'xl';

// const placeholderImage = '/placeholder.png';
const placeholderImage = () =>
  `https://source.unsplash.com/random?random=${random(0, 100, true)}`;

const StartHere = () => {
  const data = [
    {
      title: 'Plan a Visit',
      subtitle: 'Attend a Sunday service. We would love to meet you!',
    },
    {
      title: 'Find Friends',
      subtitle: 'Meet other people just like you. Find a group or class today.',
    },
    {
      title: 'Ask a Question',
      subtitle:
        'Do you have questions or need prayer? Text or call us at (561) 799-5600.',
    },
  ];

  const StyledCard = styled.div`
    background: white;
    border-radius: ${themeGet('radii.base')};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: ${themeGet('space.base')};
    padding-bottom: ${themeGet('space.l')};
    margin-bottom: ${themeGet('space.base')};
    box-shadow: ${themeGet('shadows.base')};
    transition: box-shadow ease-in 0.3s;

    :hover {
      box-shadow: ${themeGet('shadows.xl')};
      cursor: pointer;
    }
  `;

  return (
    <Box>
      <Box textAlign="center" mb="base">
        <Box as="h1" color="black" fontSize="2.5rem">
          It all starts here.
        </Box>
      </Box>

      <Box
        display={{ _: 'block', md: 'grid' }}
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr"
        gridGap="1rem 1rem"
        gridTemplateAreas={`". . ."`}
        textAlign="center"
        maxWidth={BASE_MAX_WIDTH}
        margin="auto"
      >
        {data.map(({ title, subtitle }, i) => (
          <StyledCard boxShadow={i === 0 ? 'l' : 'base'}>
            <Image mb="2rem" source={placeholderImage()} aspectRatio={16 / 9} />

            <Box px="s">
              <Box as="a" href="#" textDecoration="none">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box as="h2" m="0" mb="0.25rem">
                    {`${title}`}
                  </Box>
                  <Icon name="angleRight" size={32} />
                </Box>
              </Box>
              <Box as="p" fontSize="1.35rem" lineHeight="1.65rem" mt="s">
                {subtitle}
              </Box>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

const LifeToTheFullest = ({ variant }) => {
  const data = [
    {
      title: 'Know God personally',
      subtitle:
        'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
    },
    {
      title: 'Grow in your relationships',
      subtitle:
        "You weren't meant to do life alone. Find friends and build stronger relationships with those you love.",
    },
    {
      title: 'Discover your purpose',
      subtitle:
        "You're here for a reason. Find out who God created you to be and learn how to live life on purpose.",
    },
    {
      title: 'Impact your world',
      subtitle:
        'A life lived contributing your talents, gifts and passion for your world, and a life that others are inspired to emulate.',
    },
  ];

  const mask = [1, 3, 2, 1];

  if (variant === 2) {
    return (
      <Box
        display={{ md: 'grid' }}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="1fr 1fr"
        gridGap="0.5rem"
        gridTemplateAreas={`
    ". ."
    ". ."`}
        p="0.5rem"
        bg="neutrals.100"
      >
        {data.map(({ title, subtitle }, i) => (
          <Box
            px="xxl"
            pt="xxl"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            textAlign="center"
            bg="white"
          >
            <Box mb="xl">
              <Box as="h1" fontSize="40px" color="black">
                {`${title}`}
              </Box>
              <Box as="span" fontSize="21px">
                {subtitle}
              </Box>
            </Box>
            <Image
              mask={`/shape-mask-${mask[i]}.png`}
              source={placeholderImage()}
              maxWidth="400px"
            />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box
      mx="auto"
      p="base"
      pt="l"
      maxWidth={BASE_MAX_WIDTH}
      fontSize={{ _: '1.2rem', md: '1.7rem' }}
    >
      {data.map(({ title, subtitle }, i) => (
        <Box
          display={{ _: 'block', md: 'grid' }}
          gridTemplateColumns={i % 2 === 0 ? '1fr 1.618fr' : '1.618fr 1fr'}
          gridTemplateRows="1fr"
          gridGap="1em 1em"
          gridTemplateAreas={i % 2 === 0 ? `"img content"` : `"content img"`}
          my="l"
        >
          <Image
            mask={`/shape-mask-${mask[i]}.png`}
            source={placeholderImage()}
            maxWidth="400px"
            gridArea="img"
            my="base"
          />

          <Box
            gridArea="content"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            my="base"
          >
            <Box as="h1" color="black">
              {`${i + 1}. ${title}`}
            </Box>
            <Box as="p">{subtitle}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default function HeroLandingPage(props = {}) {
  return (
    <HeroLanding
      heroTitle="Get the most out of life."
      heroSummary="A church that wants to help you do more than just get by."
      backgroundVideo="/external-landing/home-background-vid.mp4"
      actions={[
        {
          title: 'Start Now',
          url: '#start-here',
        },
      ]}
    >
      {/* Value Stack */}
      <ValueStack
        items={[
          'Know God Personally',
          'Grow In Relationships',
          'Discover Your Purpose',
        ]}
      />

      {/* Text Carousel */}
      <Box
        bg="primarySubdued"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        p={{ _: 's', md: 'xxl' }}
        py="xxl"
        mx="auto"
      >
        <Box
          as="h1"
          fontSize={{ _: '', md: '3rem' }}
          display="flex"
          color="black"
        >
          Life is
          <Box
            ml="xs"
            mb="s"
            minWidth={{ _: 200, md: 320 }}
            borderBottom="2px solid"
          >
            <Typewriter
              words={['complicated', 'confusing', 'difficult', 'crazy']}
              loop={0} //infinite loops
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Box>
          .
        </Box>
        <Box as="h2" mb={0} fontWeight="normal">
          But we want to help you live life to the fullest.
        </Box>
        <Box as="h2">And here's how.</Box>
      </Box>

      {/* Life to the Fullest Blocks */}
      <Box bg="white">
        <LifeToTheFullest variant={21} />
      </Box>

      {/* It all starts here. */}
      <Box
        id="start-here"
        bg="nuetrals.200"
        px="base"
        py={BASE_VERITCAL_PADDING}
      >
        <StartHere />
      </Box>

      {/* Church isn’t just a building you walk in to */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="white">
        <Box
          fontSize={{ _: '1.2rem', md: '1.5rem' }}
          maxWidth={BASE_MAX_WIDTH}
          mx="auto"
        >
          <ContentBlock
            title="Church isn’t just a building you walk in to,
          but a family you can belong to."
            htmlContent="We’ve helped tens of thousands of people grab hold of
          their vision for getting the most out of their life, their
          family, and for their future – by equipping them with
          direction, resources, coaching, and encouragement to
          discover their purpose through a deeper relationship with
          Christ. What we’ve done for them, we want to do for you."
            image={
              'https://cloudfront.christfellowship.church/GetImage.ashx?guid=8b846fd4-ee88-4a24-b07f-af5a2924b369'
            }
            contentLayout="RIGHT"
            imageRatio="3by4"
            actions={[
              {
                title: 'Read More',
                relatedNode: {
                  url: '/',
                },
              },
            ]}
          />
        </Box>

        {/* Stay in the Know */}
        <Box pt={BASE_VERITCAL_PADDING} mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Stay in the Know"
            contentId="UniversalContentItem:021a93e4715936dcecd0bc57898d6fa5"
          />
        </Box>
      </Box>

      {/* Latest Messages */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Latest Messages"
            contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
