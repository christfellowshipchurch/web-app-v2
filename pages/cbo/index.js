import React, { useState, useEffect } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import colors from 'ui-kit/_config/colors';
import { HtmlRenderer, Select, TextInput,  Button, Image, Box } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import {
  Layout,
  FAQ,
  Tabs,
  Video,
  VideoHeader,
  VisionCardCarousel,
  ClientSideComponent,
} from 'components';
import { useCurrentBreakpoint } from 'hooks';
import { CustomTab, customTabs } from '../../components/Tabs/cboCustomTabs';

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

const christBirthdayOffering = () => {
  const campuses = ['psl', 'stuart', 'Palm Beach Gardens'];
  const GiveButton = ({ title, description, type, url }) => {
    return (
      <Box as="a" href={url} target="_blank" textDecoration="none">
        <Box
          m="base"
          py="base"
          maxWidth={300}
          bg={type === 'secondary' ? 'white' : 'secondary'}
          color={type === 'secondary' ? 'secondary' : 'white'}
          borderRadius="l"
          px="base"
        >
          <Box as="h4">{title}</Box>
          {description}
        </Box>
      </Box>
    );
  };

  return (
    /**
     * todo : fix hyrdation errors
     */
    <ClientSideComponent>
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
              desktop: '/external-landing/external-bg-vid.mp4',
            }}
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
                year. Every dollar you give through your Christ Birthday
                Offering will deliver hope to those who need it most.
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

                  {/* Give Section */}
        <Box
          id="give"
          py="xxl"
          px="base"
          backgroundImage="url(/cbo/cbp-give-background.png)"
          backgroundPosition="center"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          color="white"
        >
          <Box as="h2" color="secondary">
            Give Your Christ Birthday Offering
          </Box>
          <Box as="h4" color="secondary" fontWeight="normal">
            GIVE IN PERSON DURING CHRISTMAS SERVICES OR ONLINE & BY MAIL ANY
            TIME
          </Box>
          <Box
            my="l"
            bg="#F5F5F5"
            py="base"
            px={{ _: 's', md: 'l' }}
            borderRadius="base"
          >
            <Box as="h4" color="secondary">
              Give Online
            </Box>
            <Box as="form">
              {/* on submit */}
              <Select borderColor="primary">
                <Select.Option value={null}>Select a Campus</Select.Option>
                {campuses.map(name => {
                  return <Select.Option>{name}</Select.Option>;
                })}
              </Select>
              <TextInput
                border="none"
                bg="#F5F5F5"
                color="primary"
                placeholder="$0.00"
              />
            </Box>

            {/* <Box color="primary">$0.00</Box> */}
    
          </Box>
          <Box my="l" bg="primary" py="base" px={{ _: 's', md: 'l' }}>
            <Box fontWeight="bold">GIVE BY MAIL</Box>
            <HtmlRenderer
              py="xl"
              htmlContent='Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:13px;" >*Note: Please designate "Heart for the House" on the memo line.</i>'
            />
            <Box as="a" color="white" href="#faq" fontStyle="italic">
              Need help? Check out these FAQs.
            </Box>
          </Box>
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
    </ClientSideComponent>
  );
};

export default ChristBirthdayOffering;
