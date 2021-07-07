import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding, GradientBackground } from 'components';
import { Box, ContentBlock } from 'ui-kit';

const placeholderImage = '/placeholder.png';

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
        justifyContent="center"
        width="100%"
        bg="secondary"
        color="white"
      >
        <Box textAlign="center" as="h3" px="xxl" py="l" mb="0">
          Know God Personally
        </Box>
        <Box textAlign="center" as="h3" px="xxl" py="l" mb="0" bg="primary">
          Grow In Relationship
        </Box>
        <Box textAlign="center" as="h3" px="xxl" py="l" mb="0">
          Discover Your Purpose
        </Box>
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
        <Box as="h1" display="flex">
          Life is
          <Box ml="xs" minWidth={220} borderBottom="2px solid">
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
        <Box as="h1" fontWeight="normal">
          But you can do more than just get by.
        </Box>
        <Box as="h1">We want to help.</Box>
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
            mb="xxl"
            title="1. Know God Personally"
            htmlContent="Experience the most out of life through a life-givingrelationship with Jesus Christ."
            contentLayout="LEFT"
            image={placeholderImage}
          />
          <ContentBlock
            mb="xxl"
            title="2. Grow in your relationships"
            htmlContent="A life marked by the depth of your relationships, with
          God and others."
            contentLayout="RIGHT"
            image={placeholderImage}
          />
          <ContentBlock
            mb="xxl"
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
      </Box>

      {/* It all starts here. */}
      <GradientBackground bottomShade="primarySubduedHover">
        <Box py="xxl" px="xl" mx="auto" maxWidth={800}>
          <CollectionPreview
            title="It all starts here."
            summary="Come as you are. Online or in person. Just show up. We promise to give you access to the tools and support you need."
            contentId="UniversalContentItem:86a4c7f40414e00c8f045c268cd3c4cc"
            center
            cardType="default"
            hideButton
          />
        </Box>
      </GradientBackground>

      {/* Need Prayer? */}
      <Box
        maxWidth={1200}
        mx="auto"
        fontSize={{ _: '1.2rem', md: '1.5rem' }}
        px="base"
        py="xl"
      >
        <ContentBlock
          pb="l"
          title="Need Prayer?"
          htmlContent="We believe in the power of prayer!</br> We have teams praying around the clock. </br></br> Text or Call us at
            <b>+1-000-000-0000.</b> </br>Let us know how we can pray for you."
        />
        <ContentBlock
          mt="xl"
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

      {/* Latest Messages */}
      <Box px="base" py="xl" mx="auto" maxWidth={1300}>
        <CollectionPreview
          title="Stay in the Know"
          contentId="UniversalContentItem:021a93e4715936dcecd0bc57898d6fa5"
        />
      </Box>

      {/* Latest Messages */}
      <Box bg="neutrals.200">
        <Box px="base" py="xl" mx="auto" maxWidth={1300}>
          <CollectionPreview
            title="Latest Messages"
            contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
