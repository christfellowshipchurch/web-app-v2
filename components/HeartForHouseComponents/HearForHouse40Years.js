import { useCurrentBreakpoint } from 'hooks';
import React from 'react';
import { Box, Button, Icon } from 'ui-kit';
import Styled from './HeartForHouseComponents.styles';
import { colorHover } from 'utils';

const HeartForHouse40Years = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  return (
    <Box
      id="40-years"
      py="xl"
      // Buggy, sometimes backgroundPosition doesn't render locally - Test this on a Vercel testing link
      style={{
        background:
          !currentBreakpoint.isSmall &&
          !currentBreakpoint.isMedium &&
          '#E4E4E3 no-repeat url(/heart-for-house/i-heart-house-red-left.png)',
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
            years of faithfulness, generosity has spanned generations to create
            a church built on small beginnings and the sacrifices of many.{' '}
            <Box display="inline" color="#E63E51">
              On Sunday, May 19,
            </Box>{' '}
            we get to continue in that legacy as we{' '}
            <Box display="inline" fontWeight="500" fontStyle="italic">
              prepare for what we’re praying for
            </Box>{' '}
            and give toward the vision and future God has for our church.
          </Box>
          <Box mt="base" display="flex" flexDirection="column">
            <Box>
              <Button
                as="a"
                href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig?fr=sZTVmNzcyMjI5ODc"
                px="base"
                py="xs"
                bg="#E63E51"
                mr="s"
                buttonHover={colorHover('#E63E51')}
              >
                READ BOOK
              </Button>
              <Button
                as="a"
                href="#give"
                px="base"
                py="xs"
                variant="secondary"
                color="#E63E51"
                borderColor="#E63E51"
                // Hover Color ???
                buttonHover={colorHover('white')}
              >
                GIVE
              </Button>
            </Box>
            <Styled.HeartForHouseRedLink
              hoverColor={colorHover('#E63E51')}
              href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_hand_7396207fa85401?fr=sNDNmNDcyMjI5ODc"
            >
              Leer en Español
              <Icon name="angleRight" />
            </Styled.HeartForHouseRedLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeartForHouse40Years;
