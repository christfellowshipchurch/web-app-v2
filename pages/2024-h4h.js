import React from 'react';
import { FAQ, Layout } from 'components';
import { Box, Button, Image } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';

const h4h = () => {
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
              p={0}
              width={{ _: 120, md: 140 }}
              color="#7A7A79"
              variant="secondary"
              href="#give"
              border="1px solid #7A7A79"
              buttonHover="grey"
              //   CHANGE COLOR?
            >
              GIVE
            </Button>
          </Box>
        </Box>
      </Box>

      {/* 40 Years of Building this House */}

      {/* Year in Review */}

      {/* Wistia Carousel */}

      {/* The Future We're Praying for */}

      {/* Give */}
      <Box id="give"></Box>
      {/* Todd and Julie */}

      {/* Generation after Generation */}

      {/* FAQ */}
      <Box id="faq" px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ displayAll showDescription={false} data={faqHeartForHouseData} />
        </Box>
      </Box>
    </Layout>
  );
};

export default h4h;
