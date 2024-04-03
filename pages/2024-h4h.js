import { FAQ, Layout } from 'components';
import React from 'react';
import { Box } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';

const h4h = () => {
  return (
    <Layout>
      {/* Hero */}
      <Box></Box>

      {/* 40 Years of Building this House */}

      {/* Year in Review */}

      {/* Wistia Carousel */}

      {/* The Future We're Praying for */}

      {/* Give */}

      {/* Todd and Julie */}

      {/* Generation after Generation */}

      {/* FAQ */}
      <Box id="faq" px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ displayAll showDescription={false} data={faqHeartForHouseData} />
        </Box>
      </Box>
    </Layout>
  );
};

export default h4h;
