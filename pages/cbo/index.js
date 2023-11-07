import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import colors from 'ui-kit/_config/colors';
import { Layout, FAQ, Tabs } from 'components';
import Box from 'ui-kit/Box/Box.styles';
import faqData from 'components/FAQ/faqData';

import { CustomTab, customTabs } from '../../components/Tabs/cboCustomTabs';

const christBirthdayOffering = () => {
  return (
    <Layout>
      <SCThemeProvider
        theme={{
          colors: {
            ...colors?.light,
            primary: '#CB2C30',
            secondary: '#39383A',
          },
        }}
      >
        <Box id="stories">
          <Tabs
            title="Stories of Impact"
            summary="HEAR HOW YOUR CHRIST BIRTHDAY OFFERING DELIVERS HOPE"
            TabComponent={CustomTab}
            tabs={customTabs}
          />
        </Box>
        {/* FAQs Section */}
        <Box id="FAQ" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              data={faqData('CBO')}
              showDescription={false}
              customTheme={{ primary: '#CB2C30', secondary: '#39383A' }}
            />
          </Box>
        </Box>
      </SCThemeProvider>
    </Layout>
  );
};

export default christBirthdayOffering;
