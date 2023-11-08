import React, { useState, useEffect } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import colors from 'ui-kit/_config/colors';
import {
  Layout,
  FAQ,
  Tabs,
  Video,
  VideoHeader,
  VisionCardCarousel,
} from 'components';
import faqData from 'components/FAQ/faqData';
import { useCurrentBreakpoint } from 'hooks';
import { CustomTab, customTabs } from '../../components/Tabs/cboCustomTabs';
import { Button, Image, Box } from 'ui-kit';

const ChristBirthdayOffering = () => {
  const [imageSize, setImageSize] = useState('');

  const currentBreakpoint = useCurrentBreakpoint();

  useEffect(() => {
    switch (currentBreakpoint?.name) {
      case 'sm':
        return setImageSize('-mobile');
      case 'xl':
        return setImageSize('-desktop');
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
        {/* Header Video */}
        <VideoHeader
          backgroundVideo={{ desktop: '/external-landing/external-bg-vid.mp4' }}
          logoOverlay={'christ-birthday-offering/banners/header-large.png'}
        />

        {/* Header */}
        <Box textAlign="center" my="xl">
          <Box mx="s">
            <Box as="h2">Give A Different Kind of Gift This Christmas</Box>
            <Box my="base">CHRIST BIRTHDAY OFFERING 2023</Box>
            <Box mb="base" maxWidth="650px" mx="auto">
              Every Christmas, we come together as a church to give a special
              offering that helps to fund our mission projects throughout the
              year. Every dollar you give through your Christ Birthday Offering
              will deliver hope to those who need it most.
            </Box>
            <Box
              as="a"
              target="_blank"
              href="https://issuu.com/christfellowshipchurch/docs/events_2023_cbo_print_handouts_8.5x11_spanish_web_?fr=xKAE9_zU1NQ"
              color="primary"
            >
              Lea el libro Ofrenda Especial de Navidad de este año en español.
            </Box>
          </Box>

          <Box
            display="flex"
            pt="base"
            mb={{ _: 'l', md: 'xl' }}
            justifyContent="center"
          >
            <Button
              as="a"
              href="#give"
              mr="s"
              fontSize={{ _: 's', md: 'base' }}
            >
              GIVE MY OFFERING
            </Button>
            <Button
              as="a"
              target="_blank"
              href="https://issuu.com/christfellowshipchurch/docs/events_2023_cbo_print_handouts_8.5x11_web_final?fr=xKAE9_zU1NQ"
              variant="secondary"
              fontSize={{ _: 's', md: 'base' }}
            >
              READ BOOK
            </Button>
          </Box>

          <Box mx="auto" display="flex" justifyContent="center">
            <Video
              src="external-landing/external-bg-vid.mp4"
              playsInline={true}
              poster="christ-birthday-offering/why-we-give.png"
              buttonColor="primary"
              px="l"
              width={{ _: '310px', md: '600px' }}
              height={{ _: '150px', md: '340px' }}
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
        {/* Vision Card Carousel */}
        <VisionCardCarousel />

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
