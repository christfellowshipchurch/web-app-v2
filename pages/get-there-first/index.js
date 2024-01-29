import { CardGridFeature, ContentBlockFeature, Layout } from 'components';
import React from 'react';

import { Box, Button, CoverImage, HtmlRenderer, Image } from 'ui-kit';
import { ContentBlockProvider, FeatureProvider } from 'providers';

function getThereFirst() {
  const getThereFirstCards = [
    {
      title: 'Christ Fellowship Kids University',
      description:
        'In addition to Sundays, we host <span style="font-weight: bold; font-style: italic">Christ Fellowship Kids University (Kids U)</span> during the week for preschool and elementary kids. This special midweek programming is all about making disciples of Jesus.',
      cta: { title: 'LEARN MORE', action: 'https' },
    },
    {
      title: 'Camps, Retreats & Mission Trips',
      description:
        '<div>This year, we’re offing more camps, retreats, and mission trip opportunities than ever before.</div>',
      cta: { title: 'FIND A CAMP', action: 'https' },
    },
    {
      title: 'Foster and Adoptive Family Support',
      description:
        '<div>Though hosting Foster and Adoptive Parent Nights Outs and equipping families with valuable support and resources we are a part of supporting the most vulnerable children in our region.</div>',
      cta: { title: 'LEARN MORE', action: 'https' },
    },
  ];
  
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
              id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c6f4973fc873ff33960e350b761fddccdf',
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

      {/* Vertical Cardlist Feature Section*/}
      <Box my="xxl" mx="l">
        <FeatureProvider
          Component={CardGridFeature}
          titleLarge
          titleColor="#353535"
          options={{
            variables: {
              id: 'VerticalCardListFeature:f6b30a38eb547f1f75676ce0557a7e05bed66de665564bd0c5e37f0692676795e12dca024e16de4c6d7782ed0288eb10570bc45a488bee66c93ee7b8735beb7675d6a9ab1a060d39594fa3a2468a99fb7243ca9b485554978c1c16ebd9815f1d47bb23af5338a1a665b992c2047ab2680659fa39eeb61d2f48e231f89d8c3e8899ce1951f9ddfe389234d07f8628d01bf06517512005c5b99c3da0fb0648d299c2595763216223a7cac01b25b792dbb612f14d2489fabae48801ac628f8885755016ac7a78a23bb8a44c8731e781162112e7591fe1596a793249c1eccefbbfc460ea060f0caaa352ac56adf1184a985d21e74f3faf174e18468fac9da317f441',
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
          maxWidth={{ _: 'auto', md: '1000px' }}
          color="white"
        >
          <Box as="h1" mb="s" fontSize="2rem">
            Want to learn more about available resources for your family?
          </Box>
          <Box
            mt="l"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontSize="l"
          >
            <Box color="white" as="a" href="/christ-fellowship-kids">
              Kids (Babies - 5th Grade)
            </Box>
            <Box color="white" as="a" href="/students">
              Students (6th - 12th Grade)
            </Box>
            <Box color="white" as="a" href="/young-adults">
              Young Adults (College and 20s + 30s)
            </Box>
            <Box color="white" as="a" href="https://www.cfseu.com/">
              Southeastern University at Christ Fellowship
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default getThereFirst;
