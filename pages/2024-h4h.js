import React from 'react';
import { FAQ, Layout } from 'components';
import { Box } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';
import {
  HeartForHouse40Years,
  HeartForHouseHero,
  HeartForHousePastorsSection,
} from 'components/HeartForHouseComponents';

const H4H = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeartForHouseHero />

      {/* 40 Years of Building this House */}
      <HeartForHouse40Years />

      {/* Year in Review */}

      {/* Wistia Carousel */}

      {/* The Future We're Praying for */}

      {/* Give */}
      <Box id="give"></Box>

      {/* Todd and Julie */}
      <HeartForHousePastorsSection />

      {/* Generation after Generation */}

      {/* FAQ */}
      <Box id="faq" bg="white" px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ displayAll showDescription={false} data={faqHeartForHouseData} />
        </Box>
      </Box>
    </Layout>
  );
};

export default H4H;
