import React, { useEffect, useState } from 'react';

import {
  ContentBlockFeature,
  FAQ,
  HorizontalCardListFeature,
  Layout,
  Testimonials,
  Video,
} from 'components';
import { useCurrentBreakpoint } from 'hooks';
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
import { faqHeartForHouseData } from 'components/FAQ/faqData';
import data from 'lib/heartForHouseData';
import { ContentBlockProvider, FeatureProvider } from 'providers';
import wistiaAPI from 'pages/api/wistia';

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

//Heart for the House Data
const { getThereFirstId, statistics, testimonies } = data;

function HeartForTheHouse(props = {}) {
  const [imageSize, setImageSize] = useState('');
  const [wistiaData, setWistiaData] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentBreakpoint = useCurrentBreakpoint();

  // Fetches Wistia Data for for Video Carousel
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      //project Id for H4H videos
      const wistiaId = 'dt78oks1hq';
      if (wistiaId !== '') {
        const wistiaProject = await wistiaAPI({ wistiaId });
        setWistiaData(wistiaProject?.medias);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  //changes banner image based on screen size.
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
        <Box p={{ _: 'l', md: 'xl' }}>
          <ContentBlockProvider
            Component={ContentBlockFeature}
            options={{
              variables: {
                id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c6ab4c005bc498663ad01a13a3194f3b3e',
              },
            }}
            newTab
          />
        </Box>

        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/year-review${
            imageSize === '-large' ? '' : imageSize
          }.jpg`}
        />

        <Box py="l" bg="white">
          <Box as="h1" py="l" color="secondary" size="16" textAlign="center">
            Year in Review
          </Box>
          <Box
            as="h4"
            color="neutrals.600"
            textAlign="center"
            textTransform="uppercase"
            mt="-2rem"
          >
            what we were able to do because of you
          </Box>
          <Box
            display={{ _: 'block', md: 'grid' }}
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="1fr 1fr"
            gridGap="1rem 5.5rem"
            gridTemplateAreas={`". ."`}
            textAlign="center"
            maxWidth={800}
            margin="auto"
            p="l"
          >
            {statistics?.map(({ image, subtitle }) => (
              <Box display="flex" flexDirection="column">
                <Image
                  mb="-3rem"
                  maxWidth={250}
                  source={image}
                  aspectRatio="16by9"
                />
                <Box
                  as="p"
                  fontSize={{ _: '1rem', lg: '1rem' }}
                  lineHeight="1.65rem"
                  mt="l"
                >
                  <HtmlRenderer htmlContent={subtitle} />
                </Box>
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

        <Box px="base" py="xl">
          <Image
            maxWidth={900}
            aspectRatio="none"
            borderRadius="0px"
            source={`/heart-for-house/special-header-text${
              imageSize === '-large' ? '' : imageSize
            }.png`}
            mb="l"
          />
          {!loading && wistiaData?.length > 0 ? (
            wistiaData?.length > 1 ? (
              <CardCarousel p="xxl">
                {wistiaData?.map(video => (
                  <Box
                    boxShadow="l"
                    m="base"
                    borderRadius="xl"
                    overflow="hidden"
                  >
                    <Video wistiaId={video?.hashed_id} />
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
                <Video wistiaId={wistiaData[0]?.hashed_id} />
              </Box>
            )
          ) : (
            <Loader />
          )}
        </Box>

        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/vision${
            imageSize === '-large' ? '' : imageSize
          }.jpg`}
        />

        <Box p={{ _: 'base', md: 'xl' }} bg="white">
          <Box py={{ _: 'l', md: 'xl' }} mx="auto" maxWidth={1000}>
            <FeatureProvider
              Component={HorizontalCardListFeature}
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
            newTab
            options={{
              variables: {
                id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c6d00073b82ab3e729ba8e0fce1561d464',
              },
            }}
          />
        </Box>

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
            GIVE TOWARD HEART FOR THE HOUSE ON MAY 21, 2023.
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

        <Box p="l" bg="white">
          <ContentBlockProvider
            Component={ContentBlockFeature}
            newTab
            options={{
              variables: {
                id: 'ContentBlockFeature:d0d7407920381ab5b3b4d32cd65762c65c0241e0df70da97c3c8cd8ea3f73a92',
              },
            }}
          />
        </Box>

        <Box py="xxl" bg="secondary">
          <Testimonials
            py="l"
            maxWidth={1200}
            m="auto"
            title='<span style="color:#FFFFFF">This is our </span><span style="color:#E63E51">heart.</span>'
            testimonies={testimonies}
          />
        </Box>
        <Box id="faq" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              showDescription={false}
              data={faqHeartForHouseData}
              scrollPosition={{ mobile: 8635, desktop: 7350 }}
            />
          </Box>
        </Box>
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
