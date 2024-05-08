import React from 'react';

import { FAQ, Layout, GiveWithPushpay, CardGridFeature } from 'components';
import { Box, Button } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import { FeatureProvider } from 'providers';
import {
  financialImprovementId,
  moreGivingOpportunitiesId,
} from '../../lib/giveData';
import {
  GiveHero,
  WaysToGive,
  WhatTheBibleSays,
  WistiaCarousel,
} from 'components/GiveComponents';

export default function Give() {
  return (
    <Layout title="Give">
      {/* Hero */}
      <GiveHero />

      {/* Pushpay */}
      <Box id="give">
        <Box id="give">
          <GiveWithPushpay
            title="Give Online"
            subtitle="Give safely and securely online to Christ Fellowship Church. Give a one-time gift or set up a recurring gift."
            buttonColor="primary"
            amountColor="white"
            backgroundImage="url(/give/give-pushpay-background.png)"
            buttonLink="https://pushpay.com/g/christfellowship"
            otherOnlineOptions
          />
        </Box>
      </Box>

      {/* Ways to Give */}
      <WaysToGive />

      {/* What Does the Bible Say About Giving */}
      <WhatTheBibleSays />

      {/* Wistia Carousel */}
      <WistiaCarousel />

      {/* Rock Content #1 */}
      <Box maxWidth={1100} mx="auto" my="l" py="l" id="opportunities">
        <FeatureProvider
          Component={CardGridFeature}
          customCardSize={'HIGHLIGHT_MEDIUM'}
          horizontalScroll={false}
          titleOverride
          dataOverride={{
            title:
              '<div style="color: #004F71; font-size: 2.25rem; font-weight: bold;"> More Opportunities to Give</div>',
          }}
          options={{
            variables: {
              id: moreGivingOpportunitiesId,
            },
          }}
        />
      </Box>

      {/* Rock Content #2 */}
      <Box bg="secondary" py="xl" id="finances">
        <Box maxWidth={1100} mx="auto" my="base">
          <FeatureProvider
            Component={CardGridFeature}
            customCardSize={'HIGHLIGHT_MEDIUM'}
            horizontalScroll={false}
            titleOverride
            dataOverride={{
              title:
                '<div style="color: white; font-size: 2.25rem; font-weight: bold;"> Looking to Improve Your Finances?</div>',
              subtitle:
                '<div style=" margin-top: 5px; color: white; font-size: 1rem; font-weight: bold;"> CLASSES & OTHER RESOURCES</div>',
            }}
            options={{
              variables: {
                id: financialImprovementId,
              },
            }}
          />
          <Button
            as="a"
            mt="l"
            display="flex"
            mx="auto"
            width="fit-content"
            href=""
            bg="white"
            color="primary"
            border="2px solid"
          >
            SEE ALL
          </Button>
        </Box>
      </Box>

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
