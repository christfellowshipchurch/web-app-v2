/**
 * H4H 2023 Page
 */

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CardCarousel,
  CoverImage,
  HtmlRenderer,
  Image,
  Loader,
  ThemeMixin,
} from 'ui-kit';
import { ContentBlockProvider, FeatureProvider } from 'providers';
import { faqHeartForHouseData } from 'components/FAQ/faqData';
import wistiaAPI from 'pages/api/wistia';

import {
  ContentBlockFeature,
  Layout,
  Testimonials,
  Video,
  VerticalCardListFeature,
  WistiaPlayer,
  FAQ,
} from 'components';
import { useCurrentBreakpoint } from 'hooks';
import data from 'lib/heartForHouseData';

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

function HeartForTheHouse({
  videos,
  getThereFirstId,
  statistics,
  testimonies,
}) {
  const [imageSize, setImageSize] = useState('');

  const currentBreakpoint = useCurrentBreakpoint();

  useEffect(() => {
    switch (currentBreakpoint?.name) {
      case 'sm':
        return setImageSize('-mobile');
      case 'xl':
        return setImageSize('-large');
      default:
        return setImageSize('');
    }
  }, [currentBreakpoint]);

  return (
    <Layout>
      <ThemeMixin
        theme={{
          colors: {
            primary: '#E63E51',
            secondary: '#133156',
          },
        }}
      >
        <CoverImage
          type="hero-glass"
          src={`/heart-for-house/banners/header${imageSize}.jpg`}
        />

        {/* ContentBlockFeature */}
        <Box p={{ _: 'l', md: 'xl' }}>
          <ContentBlockProvider
            Component={ContentBlockFeature}
            options={{
              variables: {
                id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c6ab4c005bc498663ad01a13a3194f3b3e',
              },
            }}
            titleColor="secondary"
            newTab
          />
        </Box>

        {/* Year in Review */}
        <Image
          width="100%"
          aspectRatio="none"
          source={`/heart-for-house/banners/year-review${
            imageSize === '-large' ? '' : imageSize
          }.jpg`}
        />

        {/* Statistics */}
        <Box py="l" bg="white">
          <Box as="h1" py="l" color="secondary" textAlign="center">
            Year in Review
          </Box>
          <Box
            color="neutrals.600"
            textAlign="center"
            textTransform="uppercase"
            mt="-2rem"
          >
            <b>what we were able to do because of you</b>
          </Box>
          <Box
            display={{ _: 'block', md: 'grid' }}
            gridTemplateColumns="1fr 1fr"
            gridGap="1rem 5.5rem"
            textAlign="center"
            maxWidth={800}
            margin="auto"
            p="l"
          >
            {statistics?.map(({ image, subtitle }, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                fontSize="1rem"
                lineHeight="1.65rem"
              >
                <Image maxWidth={250} source={image} aspectRatio="16by9" />
                <HtmlRenderer htmlContent={subtitle} />
              </Box>
            ))}
          </Box>
          <Box textAlign="center" p="base">
            <Button
              as="a"
              target="blank"
              href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_web/8?fr=sMjRlZDU5NDI2ODA"
            >
              SEE MORE YEAR IN REVIEW
            </Button>
          </Box>
        </Box>

        {/* Videos */}
        <Box id="video" px="base" py="xl">
          <Image
            maxWidth={900}
            aspectRatio="none"
            source={`/heart-for-house/special-header-text${
              imageSize === '-large' ? '' : imageSize
            }.png`}
            mb="l"
          />
          {videos?.length > 0 ? (
            videos?.length > 1 ? (
              <CardCarousel p={{ _: 0, lg: 'xxl' }}>
                {videos?.map((video, index) => (
                  <Box
                    key={index}
                    boxShadow="l"
                    m="base"
                    borderRadius="xl"
                    overflow="hidden"
                  >
                    <WistiaPlayer
                      videoId={video?.hashed_id}
                      wrapper={`wistia-player-container-${index}`}
                    />
                  </Box>
                ))}
              </CardCarousel>
            ) : (
              <Box
                maxWidth={800}
                boxShadow="l"
                m="base"
                borderRadius="xl"
                overflow="hidden"
                mx="auto"
              >
                <Video wistiaId={videos[0]?.hashed_id} />
              </Box>
            )
          ) : (
            <Loader />
          )}
        </Box>

        {/* Vision */}
        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/vision${
            imageSize === '-large' ? '' : imageSize
          }.jpg`}
        />

        <Box id="vision" p={{ _: 'base', md: 'xl' }} bg="white">
          <Box py={{ _: 'l', md: 'xl' }} mx="auto" maxWidth={1000}>
            <FeatureProvider
              Component={VerticalCardListFeature}
              customCardSize="HIGHLIGHT_MEDIUM"
              dataOverride={{
                subtitle: `
                  <h1 style="color: #133156;">Get There First</h1>
                  <p style="text-align:center"><b>VISION 2023</b></p>
                  <div>
                    Starting this year, we’re doing more to reach the next generation than ever before.
                    This isn’t just a vision to lead a radical transformation in our region—
                    <b>we’re believing for a radical transformation of a generation.</b>
                    And this isn’t just a vision for 2023—it marks the starting line for a new era in who our church will be.
                  </div>
                `,
              }}
              options={{
                variables: {
                  id: getThereFirstId,
                },
              }}
            />
          </Box>
          <Box my="xxl">
            <ContentBlockProvider
              Component={ContentBlockFeature}
              titleColor="secondary"
              newTab
              options={{
                variables: {
                  id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c62da2d96d2608ecf241da5ba54117e825',
                },
              }}
            />
          </Box>
          <ContentBlockProvider
            Component={ContentBlockFeature}
            titleColor="secondary"
            newTab
            options={{
              variables: {
                id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c6d00073b82ab3e729ba8e0fce1561d464',
              },
            }}
          />
        </Box>

        {/* Give */}
        <Box
          id="give"
          py="xxl"
          px="base"
          backgroundImage="url(/heart-for-house/give-bg.jpeg)"
          backgroundPosition="center"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          color="white"
        >
          <Box as="h1" id="give" color="white">
            <HtmlRenderer htmlContent='Be a part of the <span style="color:#133156">heart.</span>' />
          </Box>
          <Box as="h3" color="neutrals.200">
            GIVE TOWARD HEART FOR THE HOUSE UNTIL DECEMBER 31, 2023.
          </Box>
          <Box
            my="l"
            bg="neutrals.200"
            py="base"
            px={{ _: 's', md: 'l' }}
            borderRadius="base"
          >
            <Box color="secondary">Choose a Giving Option:</Box>
            <GiveButton
              title="Give Now"
              description="One-time gifts can be given any time throughout 2023."
              url="https://rock.christfellowship.church/heartforthehouse"
            />
            <GiveButton
              type="secondary"
              title="Plan to Give"
              description="Set up a recurring (weekly/monthly) gift throughout 2023."
              url="https://rock.christfellowship.church/heartforthehouse"
            />
            <Box as="a" color="secondary" href="#faq" fontSize={14}>
              Need help? Check out these FAQs.
            </Box>
          </Box>

          <HtmlRenderer htmlContent='GIVE IN PERSON<br/>Give by cash or check through a giving station at your campus location.<br/><br/> GIVE BY MAIL<br/>Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:15px;" >*Note: Please designate "Heart for the House" on the memo line.</i>' />
        </Box>

        {/* Resources */}
        <Box p="l" bg="white">
          <ContentBlockProvider
            Component={ContentBlockFeature}
            titleColor="secondary"
            newTab
            options={{
              variables: {
                id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c65c0241e0df70da97c3c8cd8ea3f73a92',
              },
            }}
          />
        </Box>

        {/* Testimonials */}
        <Box py="xxl" bg="secondary">
          <Testimonials
            py="l"
            maxWidth={1200}
            m="auto"
            title={
              <>
                <span style={{ color: '#FFFFFF' }}>This is our </span>
                <span style={{ color: '#E63E51' }}>heart.</span>
              </>
            }
            testimonies={testimonies}
          />
        </Box>

        {/* FAQs */}
        <Box id="faq" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              displayAll
              showDescription={false}
              data={faqHeartForHouseData}
            />
          </Box>
        </Box>

        {/* Bottom Banner */}
        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/bottom-banner.png`}
        />
      </ThemeMixin>
    </Layout>
  );
}

export default HeartForTheHouse;

export async function getStaticProps() {
  // Wistia Videos
  const wistiaId = 'dt78oks1hq';
  const wistiaProject = await wistiaAPI({ wistiaId });
  const videos = wistiaProject?.medias;

  // H4H Static Data
  const { getThereFirstId, statistics, testimonies } = data;

  return {
    props: {
      videos,
      getThereFirstId,
      statistics,
      testimonies,
    },
  };
}
