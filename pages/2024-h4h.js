import React from 'react';
import { FAQ, Layout } from 'components';
import { Box, Button, Icon, Image } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';
import { colorHover } from 'utils';
import { useCurrentBreakpoint } from 'hooks';

const H4H = () => {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Layout>
      {/* Hero */}
      <Box bg="white" display="flex" justifyContent="space-between" py="base">
        <Box py="base">
          <Image
            source="/heart-for-house/h4h-cropped-logo.png"
            objectFit="contain"
            height={{ _: 520, md: 700 }}
            ml={{ _: 0, md: -54 }}
            mt={{ _: -40, md: 0 }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          mr={{ _: 's', md: '8%' }}
          py="l"
        >
          <Box
            fontSize={{ _: 42, md: 52 }}
            fontWeight="bold"
            fontFamily="vision"
            color="#E63E51"
            style={{ textOrientation: 'mixed', writingMode: 'vertical-rl' }}
          >
            2024
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Box
              fontSize={{ _: 42, md: 52 }}
              fontWeight="bold"
              fontFamily="vision"
              textAlign="right"
              color="#E63E51"
            >
              HEART <br />
              FOR <br />
              THE <br />
              HOUSE
            </Box>
            <Button
              as="a"
              mt="s"
              px={0}
              py="xs"
              width={{ _: 120, md: 140 }}
              color="#7A7A79"
              variant="secondary"
              href="#give"
              border="1px solid #7A7A79"
              buttonHover={colorHover('white')}
            >
              GIVE
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 40 Years of Building this House */}
      <Box
        id="40-years"
        py="xl"
        // Buggy, sometimes backgroundPosition doesn't render locally - Test this on a Vercel testing link
        style={{
          background:
            !currentBreakpoint.isSmall &&
            !currentBreakpoint.isMedium &&
            '#E4E4E3 no-repeat url(/heart-for-house/testing.png)',
          backgroundPosition: 'left 8% bottom 88%',
        }}
      >
        <Box mx={{ _: 'base', md: 'auto' }} maxWidth={1200} my={{ md: 'xl' }}>
          <Box
            display="flex"
            mb="base"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              fontWeight="bold"
              fontSize={{ _: 42, md: 52 }}
              width={{ _: 270, md: 330 }}
            >
              40 YEARS <br />
              OF{' '}
              <Box color="#E63E51" textDecoration="underline" display="inline">
                BUILDING THIS HOUSE
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              maxWidth={{ _: '90vw', md: 770 }}
              mx={{ md: 's' }}
              textAlign="center"
              my="l"
            >
              This{' '}
              <Box display="inline" color="#E63E51">
                Heart for the House
              </Box>{' '}
              season, we celebrate what God has done over the last 40 years
              through Christ Fellowship Church and look ahead full of faith for
              all that God is going to do. As we stand on the shoulders of 40
              years of faithfulness, generosity has spanned generations to
              create a church built on small beginnings and the sacrifices of
              many.{' '}
              <Box display="inline" color="#E63E51">
                On Sunday, May 19,
              </Box>{' '}
              we get to continue in that legacy as we{' '}
              <Box display="inline" fontWeight="500" fontStyle="italic">
                prepare for what we’re praying for
              </Box>{' '}
              and give toward the vision and future God has for our church.
            </Box>
            <Box mt="base">
              <Box>
                <Button
                  as="a"
                  px="base"
                  py="xs"
                  bg="#E63E51"
                  borderColor="#E63E51"
                  mr="s"
                >
                  READ BOOK
                </Button>
                <Button
                  as="a"
                  px="base"
                  py="xs"
                  variant="secondary"
                  color="#E63E51"
                  borderColor="#E63E51"
                >
                  GIVE
                </Button>
              </Box>
              <Box
                color="#E63E51"
                textAlign="center"
                fontStyle="italic"
                textDecoration="underline"
                mt="base"
              >
                Leer en Español
                <Icon name="angleRight" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Year in Review */}

      {/* Wistia Carousel */}

      {/* The Future We're Praying for */}

      {/* Give */}
      <Box id="give"></Box>
      {/* Todd and Julie */}

      {/* Generation after Generation */}

      {/* FAQ */}
      <Box id="faq" bg="white" px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ displayAll showDescription={false} data={faqHeartForHouseData} />
        </Box>
      </Box>
    </Layout>
  );
};

export default H4H;
