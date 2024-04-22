import React from 'react';
import { Box, Button, Image } from 'ui-kit';

const HeartForHouseYearInReview = ({ id }) => (
  <Box
    id={id}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    bg="white"
    py="xl"
  >
    {/* Title */}
    <Box fontFamily="vision" fontWeight="600" fontSize={{ _: 34, md: 58 }}>
      <Box
        color="#E63E51"
        textDecoration="underline"
        display="inline"
        background="url(/heart-for-house/inReview-rectangle.png)"
        backgroundSize={{ _: 350, md: 460 }}
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom"
        px={{ md: 'xl' }}
      >
        YEAR IN REVIEW
      </Box>
    </Box>
    {/* Subtitle */}
    <Box
      fontFamily="vision"
      color="#818181"
      fontSize="l"
      textAlign="center"
      px={{ _: 'l', md: '' }}
      mt="xs"
    >
      WHAT WE WERE ABLE TO DO{' '}
      <Box display={{ _: 'inline', md: 'none' }}>
        <br />
      </Box>
      BECAUSE OF YOU
    </Box>
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-end"
      backgroundSize="cover"
      backgroundColor="white"
      height="180px"
      width={{ _: 365, md: 430 }}
      borderRadius="0"
      backgroundImage={{
        _: "url('/heart-for-house/Year-in-review-4-mobile.jpg')",
        md: "url('/heart-for-house/Year-in-review-4.jpg')",
        xl: "url('/heart-for-house/Year-in-review-4.jpg')",
      }}
      m="l"
    >
      <Box
        display="flex"
        height="180px"
        width="180px"
        border="2px solid"
        borderColor="primary"
        borderRadius="50%"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        bg="white"
      >
        <Box display="flex" flexDirection="column" p="base" fontFamily="vision">
          <Box color="black" fontSize="17px">
            In 2023:
          </Box>
          <Box fontSize="50px" fontWeight="600" color="primary">
            4,152{' '}
          </Box>
          <Box color="black" fontSize="17px">
            people said{' '}
            <Box display={{ _: 'inline', md: 'none' }}>
              <br />
            </Box>
            "Yes" to{' '}
            <Box display={{ _: 'inline', md: 'none' }}>
              <br />
            </Box>
            Jesus.
          </Box>
        </Box>
      </Box>
    </Box>
    <Box
      display={{ _: 'none', lg: 'flex' }}
      flexDirection="row"
      fontWeight="200"
    >
      <Image
        pl="l"
        width="230px"
        aspectRatio="auto"
        height="275px"
        source="/heart-for-house/Year-in-review-2.png"
        borderRadius="0"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        px="l"
      >
        <Box as="p">
          <Box as="a" color="primary" fontSize="l" fontWeight="600">
            2,670{' '}
          </Box>
          people got baptized and made a public declaration of their faith.
        </Box>

        <Box as="p">
          Through{' '}
          <Box as="a" color="primary" fontWeight="600">
            Christ Fellowship Everywhere{' '}
          </Box>
          on-demand messages had over 5 million views and were shared with over
          100,000 people!
        </Box>

        <Box as="p">
          Over{' '}
          <Box as="a" color="primary" fontSize="l" fontWeight="600">
            4,000{' '}
          </Box>
          people experienced the Freedom Encounter!
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        px="l"
      >
        <Box as="p">
          We kicked off 2024 with{' '}
          <Box as="a" color="primary" fontWeight="600">
            Revival Nights
          </Box>
          , where 27,000 people started the year in spiritual strength.
        </Box>

        <Box as="p">
          <Box as="a" color="primary" fontSize="l" fontWeight="600">
            3,300{' '}
          </Box>
          kids and students attended Summer Camps—our largest ever!
        </Box>

        <Box as="p">
          Christ Fellowship Español hosted its{' '}
          <Box as="a" color="primary" fontWeight="600">
            first-ever Esperanza Festival
          </Box>
          , celebrating Hispanic heritage with over 3,000 people joining.
        </Box>
      </Box>
      <Image
        pr="l"
        width="230px"
        aspectRatio="auto"
        height="275px"
        source="/heart-for-house/Year-in-review-3.png"
        borderRadius="0"
      />
    </Box>
    <Box
      display={{ _: 'flex', lg: 'none' }}
      flexDirection="column"
      px="base"
      fontWeight="200"
    >
      <Box as="p" py="s">
        <Box as="a" color="primary" fontSize="l" fontWeight="600">
          2,670{' '}
        </Box>
        people got baptized and made a public declaration of their faith.
      </Box>

      <Box as="p" py="s">
        We kicked off 2024 with{' '}
        <Box as="a" color="primary" fontWeight="bold">
          Revival Nights
        </Box>
        , where 27,000 people started the year in spiritual strength.
      </Box>

      <Box as="p" py="s">
        Through{' '}
        <Box as="a" color="primary" fontWeight="600">
          Christ Fellowship Everywhere{' '}
        </Box>
        on- demand messages had over 5 million views and were shared with over
        100,000 people!
      </Box>

      <Box as="p" py="s">
        <Box as="a" color="primary" fontSize="l" fontWeight="600">
          3,300{' '}
        </Box>
        kids and students attended Summer Camps—our largest ever!
      </Box>

      <Box as="p" py="s">
        Over{' '}
        <Box as="a" color="primary" fontSize="l" fontWeight="600">
          4,000{' '}
        </Box>
        people experienced the Freedom Encounter!
      </Box>

      <Box as="p" py="s">
        Christ Fellowship Español hosted its{' '}
        <Box as="a" color="primary" fontWeight="600">
          first-ever Esperanza Festival
        </Box>
        , celebrating Hispanic heritage with over 3,000 people joining.
      </Box>
    </Box>
    <Button
      as="a"
      bg="primary"
      borderColor="primary"
      mt="l"
      target="_blank"
      href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/10?fr=sZDczYjcyMzY2OTU"
    >
      SEE FULL YEAR IN REVIEW
    </Button>
  </Box>
);

export default HeartForHouseYearInReview;
