import React from 'react';
import { Layout, FAQ } from 'components';
import Box from 'ui-kit/Box/Box.styles';

import faqData from 'components/FAQ/faqData';

const christBirthdayOffering = () => {
  return (
    <Layout>
      {/* FAQs Section */}
      <Box id="FAQ" px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ data={faqData('CBO')} showDescription={false} />
        </Box>
      </Box>
    </Layout>
  );
};

export default christBirthdayOffering;
