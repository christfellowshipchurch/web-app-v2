import { useCurrentBreakpoint } from 'hooks';
import React from 'react';
import { Box, Button, Image } from 'ui-kit';

const HeartForHouseYearInReview = () => {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="white"
      py="xl"
    >
      {/* Title */}
      <Box fontWeight="bold" fontSize={{ _: 42, md: 52 }}>
        <Box
          color="#E63E51"
          textDecoration="underline"
          display="inline"
          style={{
            background:
              'no-repeat url(/heart-for-house/inReview-rectangle.png)',
            backgroundPosition: 'bottom ',
          }}
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
        WHAT WE WERE ABLE TO DO BECAUSE OF YOU
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
          borderColor="#E63E51"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          bg="white"
        >
          <Box display="flex" flexDirection="column" p="base">
            <Box color="black" fontSize="17px">
              In 2023:
            </Box>
            <Box fontSize="50px" fontWeight="bold" color="#E63E51">
              4,152{' '}
            </Box>
            <Box color="black" fontSize="17px">
              people said "Yes" to Jesus.
            </Box>
          </Box>
        </Box>
      </Box>

      {currentBreakpoint.isXLarge ? (
        <Box display="flex" flexDirection="row">
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
              <Box as="a" color="primary" fontSize="l" fontWeight="bold">
                2,670{' '}
              </Box>
              people got baptized and made a public declaration of their faith.
            </Box>

            <Box as="p">
              Through{' '}
              <Box as="a" color="primary" fontWeight="bold">
                Christ Fellowship Everywhere{' '}
              </Box>
              on- demand messages had over 5 million views and were shared with
              over 100,000 people!
            </Box>

            <Box as="p">
              Over{' '}
              <Box as="a" color="primary" fontSize="l" fontWeight="bold">
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
              <Box as="a" color="primary" fontWeight="bold">
                Revival Nights
              </Box>
              , where 27,000 people started the year in spiritual strength.
            </Box>

            <Box as="p">
              <Box as="a" color="primary" fontSize="l" fontWeight="bold">
                3,300{' '}
              </Box>
              kids and students attended Summer Camps—our largest ever!
            </Box>

            <Box as="p">
              Christ Fellowship Español hosted its{' '}
              <Box as="a" color="primary" fontWeight="bold">
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
      ) : (
        <Box display="flex" flexDirection="column" px="base">
          <Box as="p" py="s">
            <Box as="a" color="primary" fontSize="l" fontWeight="bold">
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
            <Box as="a" color="primary" fontWeight="bold">
              Christ Fellowship Everywhere{' '}
            </Box>
            on- demand messages had over 5 million views and were shared with
            over 100,000 people!
          </Box>

          <Box as="p" py="s">
            <Box as="a" color="primary" fontSize="l" fontWeight="bold">
              3,300{' '}
            </Box>
            kids and students attended Summer Camps—our largest ever!
          </Box>

          <Box as="p" py="s">
            Over{' '}
            <Box as="a" color="primary" fontSize="l" fontWeight="bold">
              4,000{' '}
            </Box>
            people experienced the Freedom Encounter!
          </Box>

          <Box as="p" py="s">
            Christ Fellowship Español hosted its{' '}
            <Box as="a" color="primary" fontWeight="bold">
              first-ever Esperanza Festival
            </Box>
            , celebrating Hispanic heritage with over 3,000 people joining.
          </Box>
        </Box>
      )}

      <Button
        as="a"
        bg="#E63E51"
        borderColor="#E63E51"
        mt="l"
        target="_blank"
        href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/10?fr=sZDczYjcyMzY2OTU"
      >
        SEE FULL YEAR IN REVIEW
      </Button>
    </Box>
  );
};

export default HeartForHouseYearInReview;
