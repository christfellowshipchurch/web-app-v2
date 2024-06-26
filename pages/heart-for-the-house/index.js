/**
 * Heart for the House Page 2024
 */

import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { FAQ, Layout } from 'components';
import { Box } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';
import colors from 'ui-kit/_config/colors';
import {
  BuildingThisHouse,
  GenerationsCarousel,
  HeartForHouseFutureSection,
  HeartForHouseHero,
  HeartForHousePastorsSection,
  HeartforHouseCarousel,
  HeartForHouseYearInReview,
  HeartforHouseGive,
} from 'components/HeartForHouseComponents';

const H4H = () => {
  return (
    <Layout
      title="Heart for the House | Christ Fellowship Church"
      seoMetaTags={{
        description:
          'This Heart for the House season, we celebrate what God has done over the last 40 years through Christ Fellowship Church and look ahead full of faith for all that God is going to do. ',
        image: '/heart-for-house/h4h-meta-data.jpg',
      }}
    >
      <SCThemeProvider
        theme={{
          colors: {
            ...colors?.light,
            primary: colors?.light?.h4h?.red,
          },
        }}
      >
        {/* Hero */}
        <HeartForHouseHero id="hero" />

        {/* 40 Years of Building this House */}
        <BuildingThisHouse id="building-this-house" />

        {/* Year in Review */}
        <HeartForHouseYearInReview id="year-in-review" />

        {/* Wistia Carousel */}
        <HeartforHouseCarousel id="stories" />

        {/* The Future We're Praying for */}
        <HeartForHouseFutureSection id="our-future" />

        {/* Give */}
        <HeartforHouseGive id="give" />

        {/* Todd and Julie */}
        <HeartForHousePastorsSection id="pastors" />

        {/* Generation after Generation */}
        <GenerationsCarousel id="over-the-years" />

        {/* FAQ */}
        <Box id="faq" bg="white" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              displayAll
              fullWidth
              showDescription={false}
              data={faqHeartForHouseData}
              alternateData={{ title: 'FAQ', titleColor: 'neutrals.800' }}
            />
          </Box>
        </Box>
      </SCThemeProvider>
    </Layout>
  );
};

export default H4H;
