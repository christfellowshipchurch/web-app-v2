import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding } from 'components';
import { Box, ContentBlock } from 'ui-kit';

import random from 'lodash/random';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'l';

// const placeholderImage = '/placeholder.png';
const placeholderImage = () =>
  `https://source.unsplash.com/random?random=${random(0, 100, true)}`;

const ValueStack = ({ children, color }) => (
  <Box
    bg={color ? color : 'neutrals.800'}
    textAlign="center"
    as="h3"
    py="l"
    mb="0"
    flexGrow={1}
  >
    {children}
  </Box>
);

const LifeToTheFullest = ({ variant }) => {
  if (variant === 2) {
    const linearGradient = [
      'rgba(255, 255, 255, 1) 40%',
      'rgba(255, 255, 255, 0.9) 50%',
      'rgba(255, 255, 255, 0.65) 70%',

      'rgba(255, 255, 255, 0) 100%',
    ];

    const data = [
      {
        title: 'Know God Personally',
        subtitle:
          'Experience the most out of life through a life-giving relationship with Jesus Christ.',
      },
      {
        title: 'Grow in your relationships',
        subtitle:
          'A life marked by the depth of your relationships, with God and others.',
      },
      {
        title: 'Discover your Purpose',
        subtitle:
          'A life of purpose, where you are fully engaged with the process and fully committed to God’s vision for your life.',
      },
      {
        title: 'Make a difference',
        subtitle:
          'A life lived contributing your talents, gifts and passion for your world, and a life that others are inspired to emulate.',
      },
    ];

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
            p="l"
            pt="xxl"
            minHeight="500px"
            textAlign="center"
            bg="white"
            backgroundImage={`linear-gradient(${linearGradient.join(
              ','
            )}), url(${placeholderImage()})`}
          >
            <Box as="h1" fontSize="2.5rem" color="black">
              {`${i + 1}. ${title}`}
            </Box>
            <Box as="span" fontSize="1.545rem">
              {subtitle}
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box
      mx="auto"
      p={BASE_VERITCAL_PADDING}
      pt="l"
      maxWidth={BASE_MAX_WIDTH}
      fontSize={{ _: '1.2rem', md: '1.7rem' }}
    >
      <ContentBlock
        title="1. Know God Personally"
        htmlContent="Experience the most out of life through a life-giving relationship with Jesus Christ."
        contentLayout="LEFT"
        image={placeholderImage()}
        pb={{ _: 'base', md: 's' }}
      />

      <ContentBlock
        title="2. Grow in your relationships"
        htmlContent="A life marked by the depth of your relationships, with
  God and others."
        contentLayout="RIGHT"
        image={placeholderImage()}
        pb={{ _: 'base', md: 's' }}
      />

      <ContentBlock
        title="3. Discover your Purpose"
        htmlContent="A life of purpose, where you are fully engaged with
  the process and fully committed to God’s vision for
  your life."
        contentLayout="LEFT"
        image={placeholderImage()}
        pb={{ _: 'base', md: 's' }}
      />

      <ContentBlock
        title="4. Make a difference"
        htmlContent="A life lived contributing your talents, gifts and passion
  for your world, and a life that others are inspired to
  emulate."
        contentLayout="RIGHT"
        image={placeholderImage()}
        pb={{ _: 'base', md: 's' }}
      />
    </Box>
  );
};

export default function HeroLandingPage(props = {}) {
  return (
    <HeroLanding
      heroTitle="Get the most out of life."
      heroSummary="Christ Fellowship Church helps thousands of people every week grow in their relationship with God, discover their purpose and make a difference in their community."
      backgroundVideo="/external-landing/home-background-vid.mp4"
      actions={[
        {
          title: 'Start Now',
          url: '#startnow',
        },
      ]}
    >
      {/* Value Stack */}
      <Box
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        width="100%"
        color="white"
      >
        <ValueStack>Know God Personally</ValueStack>
        <ValueStack color="primary">Grow In Relationship</ValueStack>
        <ValueStack>Discover Your Purpose</ValueStack>
      </Box>

      {/* Text Carousel */}
      <Box p="0.5rem" pb="0">
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
          <Box as="h1" fontSize={{ _: '', md: '3rem' }} display="flex">
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
            But you can do more than just get by.
          </Box>
          <Box as="h2">We want to help.</Box>
        </Box>
      </Box>

      {/* Life to the Fullest Blocks */}
      <Box bg="white">
        <LifeToTheFullest variant={21} />
      </Box>

      <Box bg="nuetrals.200" p={BASE_VERITCAL_PADDING}>
        {/* It all starts here. */}
        <Box maxWidth={1200} mx="auto" py="s">
          <CollectionPreview
            title="It all starts here."
            summary="Come as you are. Online or in person. Just show up. We promise to give you access to the tools and support you need."
            contentId="UniversalContentItem:86a4c7f40414e00c8f045c268cd3c4cc"
            center
            cardType="default"
            hideButton
          />
        </Box>

        <Box
          bg="primarySubdued"
          maxWidth={BASE_MAX_WIDTH}
          mx="auto"
          fontSize={{ _: '1.2rem', md: '1.5rem' }}
          px="base"
          py="xl"
          textAlign="center"
          borderRadius="radii.base"
          my={BASE_VERITCAL_PADDING}
        >
          <Box as="h1" color="black">
            Need Prayer?
          </Box>
          <Box as="p">We believe in the power of prayer!</Box>
          <Box as="p" pb="s">
            We have teams praying around the clock.
          </Box>
          <Box as="p">
            Text or Call us at&nbsp;
            <b>
              <a href="tel:+15617997600">(561) 799-7600</a>.
            </b>
          </Box>
          <Box as="p">Let us know how we can pray for you.</Box>
        </Box>
      </Box>

      {/* Church isn’t just a building you walk in to */}
      <Box
        fontSize={{ _: '1.2rem', md: '1.5rem' }}
        p={BASE_VERITCAL_PADDING}
        bg="white"
      >
        <Box maxWidth={BASE_MAX_WIDTH} mx="auto">
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
      </Box>

      {/* Latest Messages */}
      <Box py="xl" mx="auto" maxWidth={1200}>
        <CollectionPreview
          title="Stay in the Know"
          contentId="UniversalContentItem:021a93e4715936dcecd0bc57898d6fa5"
        />
      </Box>

      {/* Latest Messages */}
      <Box bg="white">
        <Box py="xl" mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Latest Messages"
            contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
