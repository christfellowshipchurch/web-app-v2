import { Layout } from 'components';
import { getThereFirstCards } from './utils';
import React from 'react';

import { Box, Button, CoverImage, HtmlRenderer, Image } from 'ui-kit';

function getThereFirst() {
  return (
    <Layout>
      {/* Hero Section */}
      <Box position="relative">
        <Box
          position="absolute"
          zIndex="2"
          top="50%"
          left="50%"
          style={{ transform: 'translateX(-50%) translateY(-50%);' }}
        >
          <Image
            width={{ _: '200px', md: '800px' }}
            aspectRatio="16/9"
            source="/get-there-first/logo.png"
          />
        </Box>
        <CoverImage type="hero-glass" src="/get-there-first/banner.jpg" />
      </Box>

      {/* Race Section */}

      {/* How We're Getting There Section */}
      <Box my="l" mx="s">
        <Box as="h1" textAlign="center" color="secondary" mx="auto">
          How We Are Getting There First in 2024
        </Box>
        <Box
          as="p"
          fontSize="16px"
          maxWidth={760}
          textAlign="center"
          mx={{ _: 'base', md: 'auto' }}
          my="base"
        >
          We’re committed to do more than ever before to reach the next
          generation. That means creating more spaces and places for kids,
          students, and young adults to discover their purpose and learn about
          the love of Jesus.
        </Box>

        {/* Cards */}
        <Box
          display="flex"
          flexDirection={{ _: 'column', md: 'row' }}
          alignItems="center"
          maxWidth="100vw"
          overFlow="scroll"
        >
          {getThereFirstCards?.map((card, index) => (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              width={{ _: '90%', md: '400px' }}
            >
              <Box
                minWidth={{ _: 250, md: 300 }}
                mx="base"
                textAlign="center"
                mt={{ _: 'base', md: 'l' }}
                pt="l"
              >
                <Box as="h2" textAlign="center" mx="auto" maxWidth={320}>
                  {card?.title}
                </Box>
                <Box mt="base" mx="base">
                  <HtmlRenderer htmlContent={card?.description} />
                </Box>
              </Box>
              <Button mt="base" mx="auto" width="60%">
                {card?.cta?.title}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Cards */}
    </Layout>
  );
}

export default getThereFirst;
