import React from 'react';
import {
  EasterContentBlock,
  EasterHero,
  EasterLocationSearch,
  EasterWordCarousel,
  FAQ,
  Layout,
  PhotoCarousel,
} from 'components';
import { Box } from 'ui-kit';

import faqData from 'components/FAQ/faqData';
import { useCurrentBreakpoint } from 'hooks';
import { colorHover } from 'utils';

const Easter = () => {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Layout
      title="Easter at Christ Fellowship | Christ Fellowship Church"
      seoMetaTags={{
        description:
          'Celebrate Easter here at Christ Fellowship Church! Featuring incredible music, an impactful message, and so much fun for your whole family. With locations all over South Florida you are sure to find an Easter service that works well for you.',
        keywords:
          'Easter at Christ Fellowship Church, Easter services, Easter services near me, Easter services online, Easter services in Belle Glade FL, Easter services in Boynton Beach FL, Easter services in West Palm Beach FL, Easter services in Jupiter FL, Easter services in Okeechobee FL, Easter services in Palm Beach Gardens FL, Easter services in Port St Lucie FL, Easter services in Riviera Beach FL, Easter services in Royal Palm Beach FL, Easter services in Stuart FL, Easter services in Vero Beach FL, Easter services in Westlake FL, Good Friday services, Good Friday services near me, Good Friday services online',
        image: '/easter/easter-logo.png',
      }}
    >
      <Box
        background="url('/easter/paper-background.jpg')"
        backgroundSize="contain"
      >
        {/* Header Section */}
        <EasterHero />

        {/* What to Expect */}
        <EasterWordCarousel
          // Only using Custom Font Styles for English due to lack of support for Spanish
          customFontStyles={{ fontFamily: 'retroica', fontWeight: '500' }}
          words={[
            'a welcoming environment',
            'uplifting worship music',
            'an encouraging message',
            'outdoor activities for kids',
            'time to connect with others',
          ]}
        />

        {/* Times and Locations */}
        <EasterLocationSearch
          description="We have Easter and Good Friday services all over South Florida. Find one near you and invite someone, too!"
          additionalInfo='<span style="font-weight: bold;">Spread the word about Easter at Christ Fellowship with these easy-to-download <a href="https://rock.gocf.org/easterinvite2024"style="color: #3B7DD9; text-decoration: underline;"> invite graphics</a>.</span>'
        />

        {/* Kids Programming Section */}
        <Box
          id="kids-programming"
          py={{ _: 'l', xl: 'xxl' }}
          backgroundColor="#EBCD5F"
          backgroundSize={{ _: '200px', xl: '450px' }}
          backgroundPosition={{
            _: 'top -50px right -30px',
            md: 'top right 0px',
            xl: 'top -90px right -30px',
          }}
          backgroundRepeat="no-repeat"
          borderTop="3px solid black"
          backgroundImage={{
            _: '',
            md: "url('/easter/lines-desktop.png')",
            xl: "url('/easter/lines-desktop-xl.png')",
          }}
        >
          <Box
            m="auto"
            maxWidth="1100px"
            px="base"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EasterContentBlock
              // Only using Custom Font Styles for English due to lack of support for Spanish
              customFontStyles={{ fontFamily: 'retroica', fontWeight: '500' }}
              title={`Special Programming for Kids`}
              actions={[
                {
                  title: 'Find A Service',
                  relatedNode: {
                    url: '#times-locations',
                  },
                  bg: '#FF7D01',
                  buttonHover: colorHover('#FF7D01'),
                  hoverTextColor: 'white',
                },
              ]}
              contentLayout={currentBreakpoint.isSmall ? 'INVERTED' : 'LEFT'}
              htmlContent={`<div>
                <p>
                  Christ Fellowship Kids seeks to lead your kids to love Jesus, love others, and love life! And Easter at Christ Fellowship is designed with your family in mind, including special programming for  <b>babies-elementary</b> during all <b>Good Friday</b> and  <b>Easter services</b>. When you check in your child to Christ Fellowship Kids, they will enjoy a few worship songs, group time led by caring leaders, and a lesson on the Easter story.
                </p>
              </div>
            `}
              image={
                currentBreakpoint.isSmall
                  ? '/easter/special-kids-programming-mobile.png'
                  : 'easter/special-kids-programming.png'
              }
              imageRatio={currentBreakpoint.isSmall ? '' : '12by17'}
            />
          </Box>
        </Box>

        {/* Photo Carousel */}
        <PhotoCarousel photo="/easter/photo-carousel.jpg" />

        {/* Serve Section */}
        <Box
          background="linear-gradient(0deg, rgba(59,125,217,1) 24%, rgba(138,208,194,1) 91%)"
          borderTop="3px solid black"
          borderBottom="3px solid black"
        >
          <Box
            py={{ _: 'l', xl: 'xxl' }}
            backgroundImage="url(/easter/cross-equals-love.png)"
            backgroundPosition={{
              _: 'bottom right 30px',
              md: 'bottom right 100px',
            }}
            backgroundSize={{ _: 200, md: 300 }}
            backgroundRepeat="no-repeat"
          >
            <Box
              m="auto"
              mb={{ _: 'xl', md: 'xs' }}
              maxWidth="1100px"
              p="base"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <EasterContentBlock
                // Only using Custom Font Styles for English due to lack of support for Spanish
                customFontStyles={{ fontFamily: 'retroica', fontWeight: '500' }}
                title={`Serve at Easter`}
                subtitle={'Join the Easter Dream Team'}
                actions={[
                  {
                    title: 'Sign Up to Serve',
                    relatedNode: {
                      url: '/events/join-easter-dream-team',
                    },
                    bg: '#FFEC7F',
                    buttonHover: colorHover('#FFEC7F'),
                    color: 'black',
                    hoverTextColor: 'black',
                  },
                ]}
                contentLayout={currentBreakpoint.isSmall ? 'INVERTED' : 'RIGHT'}
                htmlContent={`<div>
                <p>
                  You can play a part in Easter at Christ Fellowship. And how you serve is up to you! From the streets to the seats to the treats—there’s a spot for everyone on the Easter Dream Team!
                </p>
              </div>
            `}
                image={
                  currentBreakpoint.isSmall
                    ? 'easter/dream-team-image-mobile.png'
                    : 'easter/dream-team-image.png'
                }
                imageRatio={currentBreakpoint.isSmall ? '' : '13by17'}
              />
            </Box>
          </Box>
        </Box>

        {/* FAQ Section Section */}
        <Box mx="auto" maxWidth={1200} px="base">
          <FAQ
            customTheme={{ secondary: '#39383A' }}
            py="xl"
            mt="2.5rem !important"
            data={faqData('Easter')}
            otherData={{
              title: 'FAQ',
              titleColor: 'black',
              question: 'Have additional questions?',
              description:
                '<div>Call <span style="font-weight: bold;">561-776-3380</span> to speak to someone on our team that would love to help you.</div>',
              descriptionOverride: true,
            }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Easter;
