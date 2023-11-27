import React, { useState, useEffect } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import colors from 'ui-kit/_config/colors';
import { Button, Image, Box } from 'ui-kit';
import { useCurrentBreakpoint } from 'hooks';
import {
  Layout,
  FAQ,
  Tabs,
  Video,
  VideoHeader,
  VisionCardCarousel,
  CardGridFeature,
  GiveWithPushpay,
} from 'components';
import { FeatureProvider } from 'providers';

import faqData from 'components/FAQ/faqData';
import { CustomTab, customTabs } from '../../components/Tabs/cboCustomTabs';

const ChristBirthdayOffering = () => {
  const [imageSize, setImageSize] = useState('');
  const currentBreakpoint = useCurrentBreakpoint();
  const link =
    'https://pushpay.com/g/cfchristbirthdayoffering?f[1]=Christ%20Birthday%20Offering&f[0]=';

  //Fix for anchor links not scrolling on page load
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '');
        const el = window.document.getElementById(id);
        const r = el?.getBoundingClientRect();
        window.top.scroll({
          // eslint-disable-next-line
          top: scrollY + r?.top,
          behavior: 'smooth',
        });
      }, 600);
    }
  });

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
          backgroundVideo={{
            desktop: '/christ-birthday-offering/cbo-header-vid.mp4',
          }}
          logoOverlay={'christ-birthday-offering/banners/header.png'}
          backgroundImage="url(/christ-birthday-offering/cbo-header-frame-1.png)"
          backgroundPosition="center"
          backgroundSize="cover"
        />

        {/* Give a Different Gift - Content Block */}
        <Box textAlign="center" my="xl">
          <Box mx="s">
            <Box as="h1">Give a Different Kind of Gift This Christmas</Box>
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
              wistiaId="7bkgfs4cwx"
              playsInline={true}
              width={{ _: '310px', md: '600px' }}
              height={{ _: '150px', md: '340px' }}
            />
          </Box>
        </Box>

        {/* Our Impact Banner */}
        <Box id="impact" bg="white" py="l">
          <Image
            source={`christ-birthday-offering/banners/our-impact${imageSize}.jpg`}
            width="100%"
            height="100%"
            aspectRatio="auto"
            borderRadius="0px"
          />
        </Box>

        {/* How We Delivered Hope */}
        <Box bg="white">
          <Box maxWidth={1200} mx="auto" py="xl" px={{ _: 0, md: 'base' }}>
            <FeatureProvider
              //Using CardGridFeature instead of VerticalCardListFeature
              Component={CardGridFeature}
              titleLarge
              titleColor="#353535"
              options={{
                variables: {
                  id: 'VerticalCardListFeature:f6b30a38eb547f1f75676ce0557a7e05bed66de665564bd0c5e37f0692676795e12dca024e16de4c6d7782ed0288eb10570bc45a488bee66c93ee7b8735beb7675d6a9ab1a060d39594fa3a2468a99fb13ffe67e9661e7cccdbf404007bc650e51ef2d61925e9a10c9569d1891c8854171e84f094fc6165d87b4f4dadeab61733ccfb6a3c7eeaf8d85017b5ad501acdb93ee9c0c776d30d487a3f09da22c8335897f16cf807a814826c09e05dbd656ba',
                },
              }}
            />
            <Button
              as="a"
              mt="l"
              display="flex"
              mx="auto"
              width="fit-content"
              href="#give"
            >
              GIVE MY OFFERING
            </Button>
          </Box>
        </Box>

        {/* Tab Section */}
        <Box id="stories" my="xl">
          <Tabs
            title="Stories of Impact"
            TabComponent={CustomTab}
            tabs={customTabs}
          />
        </Box>
        {/* Vision Card Carousel */}
        <VisionCardCarousel />

        {/* Give Section */}
        <Box id="give">
          <GiveWithPushpay
            title="Give Your Christ Birthday Offering"
            subtitle="GIVE IN PERSON DURING CHRISTMAS SERVICES OR ONLINE & BY MAIL ANYTIME"
            buttonColor="#E63E51"
            backgroundImage="url(/cbo/cbp-give-background.png)"
            showOtherGiveOptions
            buttonLink={link}
          />
        </Box>

        {/* FAQs Section */}
        <Box
          id="FAQ"
          px="base"
          pb="xl"
          pt={{ _: 'base', md: 'xl' }}
          width="100%"
        >
          <Box mx="auto" maxWidth={1200} mb={{ md: 'base' }}>
            <FAQ
              data={faqData('CBO')}
              showDescription={false}
              customTheme={{ primary: '#CB2C30', secondary: '#39383A' }}
              fullWidth
              displayAll={true}
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
