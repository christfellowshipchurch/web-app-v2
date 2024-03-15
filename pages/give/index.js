import React from 'react';

import { FAQ, HeroFeature, Layout } from 'components';
import { Box, Button } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

export default function Give() {
  const callToAction = [
    {
      title: 'GIVE NOW',
      link: '#give',
    },
  ];
  return (
    <Layout title="Give">
      {/* Hero */}
      <Box
        mb="l"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <HeroFeature
          backgroundImage="/give-background.jpg"
          title="Your Giving Makes an Impact"
          description="When you give, you’re a part of making a difference in the lives of people right here in our region and around the world."
          cta={callToAction}
        />
        <Box mt="l" textAlign="center" maxWidth="580px">
          <Box>
            <Box as="h1" mt="base" mb="base">
              Why We Give
            </Box>
            <Box mt="s">
              <Box
                display="inline"
                fontWeight="bold"
                textDecoration="underline"
              >
                We give because God is a giver.
              </Box>{' '}
              His very heart and nature, as shown throughout Scripture, is
              generosity. Because we’re created in His image, we’re most like
              Him when we give and steward all that He has entrusted to us. When
              we give, it positions us to be the hands and feet of Jesus in our
              region and beyond.
            </Box>
          </Box>
          <Button
            as="a"
            href="#what-the-bible-says"
            mt="l"
            fontWeight="normal"
            fontSize="s"
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>
      {/* Pushpay */}
      <Box id="give"></Box>
      {/* Ways to Give */}

      {/* Wistia Carouse */}
      <Box id="what-the-bible-says"></Box>

      {/* Rock Content #1 */}

      {/* Rock Content #2 */}

      {/* FAQ Section */}
      <Box mx="auto" maxWidth={1200} px="base">
        <FAQ
          customTheme={{ secondary: '#39383A' }}
          py="xl"
          mt="2.5rem !important"
          data={faqData('Give')}
          otherData={{
            title: 'FAQ',
            question: 'Have additional questions?',
            description:
              '<div>Call <span style="font-weight: bold;">561-776-3380</span> to speak to someone on our team that would love to help you.</div>',
            descriptionOverride: true,
          }}
        />
      </Box>
    </Layout>
  );
}
