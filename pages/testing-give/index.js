import React, { useEffect } from 'react';

import { FAQ, Layout, GiveWithApollos, CardGridFeature } from 'components';
import { Box } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import { FeatureProvider } from 'providers';
import { installApollosWebEmbed } from 'lib/apollosWebEmbed';
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

/**
 * Apollos embed + GiveWithApollos (iframe-first experiment). Production `/give` stays Pushpay-only.
 */
export default function TestingGive() {
  useEffect(() => {
    installApollosWebEmbed();
  }, []);

  return (
    <Layout
      title="Testing Give"
      seoMetaTags={{
        children: (
          <meta
            name="apple-itunes-app"
            content="app-id=244Z6V4SJ9.com.subsplashconsulting.BSVMPR, app-clip-bundle-id=244Z6V4SJ9.com.subsplashconsulting.BSVMPR.Clip, app-clip-display=card"
          />
        ),
      }}
    >
      <GiveHero />

      <GiveWithApollos
        title="Give Online"
        subtitle="Give safely and securely online to Christ Fellowship Church. Give a one-time gift or set up a recurring gift."
        buttonColor="primary"
        amountColor="white"
        giftTextColor="white"
        buttonLink="https://pushpay.com/g/christfellowship"
        backgroundImage="url(/give/give-pushpay-background.png)"
        otherOnlineOptions
      />

      <WaysToGive />

      <WhatTheBibleSays />

      <WistiaCarousel />

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
        </Box>
      </Box>

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
