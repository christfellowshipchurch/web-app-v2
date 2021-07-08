import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding } from 'components';
import { Box, ContentBlock } from 'ui-kit';

const placeholderImage = '/placeholder.png';

const ValueStack = ({ children, color }) => (
  <Box
    bg={color ? color : 'neutrals.500'}
    textAlign="center"
    as="h3"
    py="l"
    mb="0"
    flexGrow={1}
  >
    {children}
  </Box>
);

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
        <ValueStack color="primaryHover">Grow In Relationship</ValueStack>
        <ValueStack>Discover Your Purpose</ValueStack>
      </Box>

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
        <Box as="h1" fontSize={{ _: '', md: '3rem' }} display="flex">
          Life is
          <Box ml="xs" minWidth={{ _: 200, md: 320 }} borderBottom="2px solid">
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
        <Box as="h2" fontWeight="normal">
          But you can do more than just get by.
        </Box>
        <Box as="h2">We want to help.</Box>
      </Box>

      {/* Life to the Fullest Blocks */}
      <Box bg="white">
        <Box
          mx="auto"
          p="base"
          maxWidth={1300}
          fontSize={{ _: '1.2rem', md: '1.7rem' }}
        >
          <ContentBlock
            py="xl"
            title="Live life to the fullest."
            htmlContent="Discover how to live a life full of purpose and significance."
          />
          <ContentBlock
            title="1. Know God Personally"
            htmlContent="Experience the most out of life through a life-giving relationship with Jesus Christ."
            contentLayout="LEFT"
            image={placeholderImage}
          />
          <ContentBlock
            title="2. Grow in your relationships"
            htmlContent="A life marked by the depth of your relationships, with
          God and others."
            contentLayout="RIGHT"
            image={placeholderImage}
          />
          <ContentBlock
            title="3. Discover your Purpose"
            htmlContent="A life of purpose, where you are fully engaged with
          the process and fully committed to God’s vision for
          your life."
            contentLayout="LEFT"
            image={placeholderImage}
          />
          <ContentBlock
            title="4. Make a difference"
            htmlContent="A life lived contributing your talents, gifts and passion
          for your world, and a life that others are inspired to
          emulate."
            contentLayout="RIGHT"
            image={placeholderImage}
          />
        </Box>

        {/* It all starts here. */}
        <Box maxWidth={1200} mx="auto">
          <CollectionPreview
            title="It all starts here."
            summary="Come as you are. Online or in person. Just show up. We promise to give you access to the tools and support you need."
            contentId="UniversalContentItem:86a4c7f40414e00c8f045c268cd3c4cc"
            center
            cardType="default"
            hideButton
          />
        </Box>
      </Box>

      {/* Need Prayer? */}
      <Box p="base" bg="white">
        <Box
          bg="primarySubdued"
          maxWidth={1200}
          mx="auto"
          fontSize={{ _: '1.2rem', md: '1.5rem' }}
          px="base"
          py="xl"
          textAlign="center"
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
      <Box fontSize={{ _: '1.2rem', md: '1.5rem' }} p="base">
        <Box maxWidth={1200} mx="auto">
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
      <Box px="base" py="xl" mx="auto" maxWidth={1200}>
        <CollectionPreview
          title="Stay in the Know"
          contentId="UniversalContentItem:021a93e4715936dcecd0bc57898d6fa5"
        />
      </Box>

      {/* Latest Messages */}
      <Box bg="neutrals.200">
        <Box px="base" py="xl" mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Latest Messages"
            contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
