import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { FAQ, H4HStoryCarousel, Layout } from 'components';
import { Box } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';
import colors from 'ui-kit/_config/colors';

import {
  HeartForHouse40Years,
  HeartForHouseFutureSection,
  HeartForHouseHero,
  HeartForHousePastorsSection,
  HeartForHouseYearInReview,
} from 'components/HeartForHouseComponents';

const H4H = () => {
  return (
    <Layout>
      <SCThemeProvider
        theme={{
          colors: {
            ...colors?.light,
            primary: '#E63E51',
          },
        }}
      >
        {/* Hero */}
        <HeartForHouseHero />

        {/* 40 Years of Building this House */}
        <HeartForHouse40Years />

        {/* Year in Review */}
        <HeartForHouseYearInReview />

        {/* Wistia Carousel */}
        <H4HStoryCarousel />

        {/* The Future We're Praying for */}
        <HeartForHouseFutureSection />

        {/* Give */}
        <Box id="give"></Box>

        {/* Todd and Julie */}
        <HeartForHousePastorsSection />
        {/* Generation after Generation */}

        {/* FAQ */}
        <Box id="faq" bg="white" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              displayAll
              showDescription={false}
              data={faqHeartForHouseData}
            />
          </Box>
        </Box>
      </SCThemeProvider>
    </Layout>
  );
};

export default H4H;
