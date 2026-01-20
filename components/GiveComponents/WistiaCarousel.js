import WistiaPlayer from 'components/WistiaPlayer';
import React from 'react';
import { Box, HtmlRenderer, Icon } from 'ui-kit';
import { giveImpactData, carouselCards } from '../../lib/giveData';

const WistiaCarousel = () => {
  return (
    <Box
      id="impact"
      py="l"
      display="flex"
      flexDirection="column"
      alignItems={{ _: 'flex-start', md: 'center' }}
    >
      <Box
        as="h1"
        fontSize={{ _: 28, md: 40 }}
        my="base"
        color="secondary"
        maxWidth={{ md: 800 }}
        mx={{ _: 's', md: 0 }}
        textAlign="center"
      >
        When you give, you’re impacting others with the love and message of
        Jesus Christ.
      </Box>
      {/* Carousel */}
      <Box
        display="flex"
        justifyContent={{ md: 'center' }}
        width="100%"
        overflow="auto"
        py="l"
      >
        {carouselCards?.map((card, index) => (
          <Box
            minWidth={{ _: '80vw', md: 0 }}
            maxWidth={{ _: '80vw', md: 450, lg: 500 }}
            width={{ _: '80vw', md: '45vw' }}
            boxShadow="xl"
            borderRadius="base"
            overflow="auto"
            mr={
              index === 0
                ? { md: 'base' }
                : index === carouselCards.length - 1
                ? { _: 'base', md: 0 }
                : 0
            }
            ml={{ _: 'base', md: index !== 0 ? 'base' : 0 }}
          >
            <WistiaPlayer
              videoId={card?.wistiaId}
              wrapper={`wistia-player-container-${index}`}
            />
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent={{ _: 'center', md: 'center', xl: 'space-between' }}
        alignItems={{ _: 'center', md: 'flex-start' }}
        flexDirection={{ _: 'column', md: 'row' }}
        flexWrap="wrap"
        mt="base"
        pb="l"
        mx="auto"
      >
        {giveImpactData?.map((card, index) => (
          <Box textAlign="center">
            <Box
              height={{ _: 'auto', md: '340px' }}
              textAlign="center"
              display="flex"
              mt={index !== 0 ? { _: 'l', md: 0 } : 0}
              ml={index !== 0 && { md: 'l' }}
              mr={index === 0 && { md: 'l' }}
              alignItems="center"
              justifyContent="flex-start"
              flexDirection="column"
              mx={{ md: 's' }}
              width={{ _: '80vw', md: 260 }}
            >
              <Box color="#818181">
                <Icon
                  width="80px"
                  height="80px"
                  name={card?.icon}
                  mt={index !== 0 && { _: 'base', md: 0 }}
                  mb="s"
                />
                <Box mb="base" as="h2" mt="base" width={{ md: '220px' }}>
                  {card?.title}
                </Box>
              </Box>
              <Box as="p">{card?.htmlContent}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WistiaCarousel;
