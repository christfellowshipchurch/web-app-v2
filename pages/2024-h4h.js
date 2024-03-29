import { FAQ, Layout } from 'components';
import React from 'react';
import { Box } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';

const h4h = () => {
  return (
    <Layout>
      {/* Hero */}
      <Box></Box>

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
