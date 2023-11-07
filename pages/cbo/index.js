import React, { useState, useEffect } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import colors from 'ui-kit/_config/colors';
import { Layout, FAQ, Tabs, Video } from 'components';
import Box from 'ui-kit/Box/Box.styles';
import faqData from 'components/FAQ/faqData';
import { useCurrentBreakpoint } from 'hooks';
import { CustomTab, customTabs } from '../../components/Tabs/cboCustomTabs';
import { Button, Image } from 'ui-kit';

const ChristBirthdayOffering = () => {
  const [imageSize, setImageSize] = useState('');

  const currentBreakpoint = useCurrentBreakpoint();

  useEffect(() => {
    switch (currentBreakpoint?.name) {
      case 'sm':
        return setImageSize('-mobile');
      case 'xl':
        return setImageSize('-large');
      default:
        return setImageSize('-desktop');
    }
  }, [currentBreakpoint]);

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
        {/* Header Video - Look at h4h */}
        <Box m="0px">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/external-landing/external-bg-vid.mp4"
            type="video/mp4"
            width="100%"
            height="100%"
          />
          <Image
            source="christ-birthday-offering/banners/header-large.png"
            position="absolute"
            maxWidth={{ _: '390px', lg: '1360px', xl: '2000px' }}
            maxHeight={{ _: '160px', lg: '500px', xl: '740px' }}
            top={{ _: '110px', lg: '100px', xl: '300px' }}
            left={{ xl: '120px' }}
            zIndex="10"
          />
        </Box>

        {/* Header */}
        <Box textAlign="center" my="l">
          <Box as="h2">Give A Different Kind of Gift This Christmas</Box>
          <Box my="base">CHRIST BIRTHDAY OFFERING 2023</Box>
          <Box mb="base" maxWidth="650px" mx="auto">
            Every Christmas, we come together as a church to give a special
            offering that helps to fund our mission projects throughout the
            year. Every dollar you give through your Christ Birthday Offering
            will deliver hope to those who need it most.
          </Box>
          <Box as="a" href="#" color="primary">
            Lea el libro Ofrenda Especial de Navidad de este año en español.
          </Box>

          <Box display="flex" pt="base" pb="l" justifyContent="center">
            <Button> GIVE MY OFFERING</Button>
            <Button variant="secondary">READ BOOK</Button>
          </Box>

          <Box mx="auto" px="auto">
            <Video
              buttonColor="primary"
              px="l"
              width={{ _: '200px', md: '400px' }}
              height={{ _: '100px', md: '260px' }}
            />
          </Box>
        </Box>

        {/* Tab Section */}
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

        {/* Footer */}
        <Box id="footer" mx={0} width="100%">
          <Image
            source={`christ-birthday-offering/banners/verse${imageSize}.png`}
            width="100%"
            height="100%"
            aspectRatio="auto"
            borderRadius="0px"
          />
        </Box>
      </SCThemeProvider>
    </Layout>
  );
};

export default ChristBirthdayOffering;
