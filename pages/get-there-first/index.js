import { ContentBlockFeature, Layout } from 'components';
import { getThereFirstCards } from './utils';
import React from 'react';

import { Box, Button, CoverImage, HtmlRenderer, Image } from 'ui-kit';
import { ContentBlockProvider } from 'providers';

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

      {/* Join the Race with Video Section*/}
      <Box my="xxl">
        <ContentBlockProvider
          Component={ContentBlockFeature}
          titleColor="secondary"
          newTab
          options={{
            variables: {
              // Change ID to the right feature ID once it is made
              id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c62da2d96d2608ecf241da5ba54117e825',
            },
          }}
        />
      </Box>

      {/* How We're Getting There Section */}
      <Box
        py="xl"
        px={{ _: 's', md: '0px' }}
        color="white"
        backgroundImage="url(/get-there-first/background.jpg)"
      >
        <Box as="h1" textAlign="center" mx={{ _: 'base', md: 'auto' }}>
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
          justifyContent="center"
          maxWidth="100vw"
          mb="l"
        >
          {getThereFirstCards?.map((card, index) => (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
              width={{ _: '90%', md: '400px' }}
              height={{ _: 'auto', md: '310px' }}
              bg="white"
              color="black"
              py="base"
              my={{ _: 'base', md: '0px' }}
              mx={{ _: 's', md: 'base', xl: 'l' }}
              borderRadius="l"
            >
              <Box
                minWidth={{ _: 250, md: 300 }}
                mx="base"
                textAlign="center"
                mt={{ _: 'base', md: '0px' }}
                pt="s"
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

      {/* Join the Race Section*/}
      <Box my="xxl">
        <ContentBlockProvider
          Component={ContentBlockFeature}
          titleColor="secondary"
          newTab
          options={{
            variables: {
              // Change ID to the right feature ID once it is made
              id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c62da2d96d2608ecf241da5ba54117e825',
            },
          }}
        />
      </Box>

      {/* Last Section */}
      <Box
        backgroundImage="url(/get-there-first/background.jpg)"
        textAlign="center"
        py="xl"
      >
        <Box
          px={{ _: 's', md: '0px' }}
          mx={{ _: '0px', md: 'auto' }}
          maxWidth={{ _: 'auto', md: '800px' }}
          color="white"
        >
          <Box as="h2" mb="s">
            Want to learn more about available resources for your family?
          </Box>
          <Box>
            Check out our{' '}
            <Box color="white" as="a" href="/christ-fellowship-kids">
              kids
            </Box>
            ,{' '}
            <Box color="white" as="a" href="/students">
              students
            </Box>
            ,{' '}
            <Box color="white" as="a" href="/young-adults">
              young adults
            </Box>
            , and{' '}
            <Box color="white" as="a" href="https://www.cfseu.com/">
              Southeastern University
            </Box>{' '}
            at Christ Fellowship ministry pages to see everything we’ve made
            avaialble for your family.
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default getThereFirst;
