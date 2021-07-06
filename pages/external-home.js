import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding } from 'components';
import { Box, ContentBlock } from 'ui-kit';

const placeholderImage = '/placeholder.png';

export default function HeroLandingPage(props = {}) {
  return (
    <HeroLanding
      heroTitle="Looking for more out of life?"
      heroSummary="Church is a great place to start. Christ Fellowship Church is helping thousands of people every week discover there’s more to life and that it’s easier to find than you think."
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
      >
        <Box textAlign="center" as="h4" px="xxl" py="l" mb="0">
          Know God Personally
        </Box>
        <Box
          textAlign="center"
          as="h4"
          px="xxl"
          py="l"
          mb="0"
          bg="neutrals.200"
        >
          Grow In Relationship
        </Box>
        <Box textAlign="center" as="h4" px="xxl" py="l" mb="0">
          Discover Your Purpose
        </Box>
      </Box>

      {/* Text Carousel */}
      <Box
        bg="neutrals.100"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        p={{ _: 'l', md: 'xxl' }}
        mx="auto"
      >
        <Box as="h2" display="flex">
          Life is
          <Box pl="xs" borderBottom="2px solid">
            <Typewriter
              words={['complicated', 'confusing', 'diffcult', 'crazy']}
              loop={0} //infinite loops
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
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
      <Box mx="auto" maxWidth={1000}>
        <ContentBlock
          mb="l"
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
          mb="xxl"
          title="4. Make a difference"
          htmlContent="A life lived contributing your talents, gifts and passion
          for your world, and a life that others are inspired to
          emulate."
          contentLayout="RIGHT"
          image={placeholderImage}
        />

        {/* It all starts here. */}
        <CollectionPreview
          title="It all starts here."
          summary="Come as you are. Online or in person. Just show up. We promise to give you access to the tools and support you need."
          contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
          center
          cardType="default"
        />
        {/* Need Prayer? */}
        <ContentBlock
          mb="xxl"
          title="Need Prayer?"
          htmlContent="We believe in the power of prayer!</br> We have teams praying around the clock. </br></br> Text or Call us at
          <b>+1-000-000-0000.</b> </br>Let us know how we can pray for you."
        />
      </Box>

      {/* Latest Events */}
      <Box p="l" mx="auto" maxWidth={1000}>
        <CollectionPreview
          title="Watch Online: Latest Messages"
          contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
        />
      </Box>
    </HeroLanding>
  );
}
