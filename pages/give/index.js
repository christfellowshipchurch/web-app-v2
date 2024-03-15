import React from 'react';

import { FAQ, Layout } from 'components';
import { Box } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

export default function Give(props) {
  return (
    <Layout title="Give">
      {/* Hero */}

      {/* Pushpay */}

      {/* Ways to Give */}

      {/* Wistia Carouse */}

      {/* Rock Content #1 */}

      {/* Rock Content #2 */}

      {/* FAQ */}
      {/* FAQ Section Section */}
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
