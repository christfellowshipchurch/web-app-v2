import React from 'react';
import { Avatar, Box, Button, Divider, Icon, Image, Loader } from 'ui-kit';

import Styled from '../LocationSingle.styles';
import { handleSocialShare } from 'components/Share/shareUtils';
import { includes, kebabCase } from 'lodash';
import { useCurrentBreakpoint } from 'hooks';
import { links } from 'config/metadata';

/**
 * This component displays Pastor and Campus information
 */
const PastorCard = ({
  pastor,
  campusName,
  address,
  phoneNumber,
  instagram,
  mapLink,
}) => {
  const { addressFirst, addressLast } = address;
  const currentBreakpoints = useCurrentBreakpoint();

  return (
    <Styled.PastorsCard>
      <Box display="flex" alignItems="center">
        <Divider width={120} mr="s" />
        <Avatar
          width="115px"
          height="115px"
          name="campus-pastors"
          src={pastor?.photo?.uri}
        />
        <Divider width={120} ml="s" />
      </Box>
      {pastor ? (
        <Box as="h2" mt="base" mb="xs" mx="s">
          {`${pastor?.firstName} ${pastor?.lastName}`}
        </Box>
      ) : (
        <Loader noLabel mt="base" mb="xs" />
      )}
      <Box
        as="h5"
        fontWeight="normal"
        fontStyle="italic"
        color="neutrals.700"
        mb={0}
      >
        {campusName === 'Online (CF Everywhere)'
          ? 'Online Community Pastor'
          : `Campus Pastor${includes(pastor?.firstName, ' and ') ? 's' : ''}`}
      </Box>

      {campusName !== 'Online (CF Everywhere)' && (
        <Divider width="100%" my="base" />
      )}
      {address && campusName !== 'Online (CF Everywhere)' ? (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px="l"
        >
          {!currentBreakpoints.isSmall && (
            <Box as="a" target="_blank" href={mapLink}>
              <Image
                maxWidth={250}
                aspectRatio="16by9"
                source={`/location-pages/maps/${kebabCase(campusName)}.jpg`}
              />
            </Box>
          )}
          <Box as="h4" mt="base" mb="xs">
            Address
          </Box>
          <Box as="a" target="_blank" textAlign="center" href={mapLink}>
            {addressFirst}
            <br />
            {addressLast}
          </Box>
          <Box as="h4" mt="base" mb="xs">
            Phone
          </Box>
          <Box as="a" href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </Box>
        </Box>
      ) : null}
      <Box my="base">
        {campusName === 'Online (CF Everywhere)' ? (
          /**
           * todo : Add url to contact us button
           */
          <Button
            size="xs"
            mr={{ _: 'xs', lg: 0 }}
            variant="secondary"
            width="132px"
            px="base"
            borderRadius="xxl"
          >
            CONTACT US
          </Button>
        ) : (
          [
            <Button
              size="xs"
              px="base"
              variant="secondary"
              borderRadius="xxl"
              ml={{ _: 0, lg: 'xs' }}
              m={{ _: 'xs', lg: 0 }}
              width="132px"
              onClick={() =>
                handleSocialShare({
                  shareType: 'sms',
                  shareMessages: {
                    sms: `Would you like to join me for service at Christ Fellowship Church? Here’s a link with all the details. ${document.URL}`,
                  },
                })
              }
            >
              INVITE A FRIEND
            </Button>,
          ]
        )}
        <Button
          as="a"
          size="xs"
          px="base"
          borderRadius="xxl"
          m={{ _: 'xs', lg: 0 }}
          ml={{ _: 0, lg: 's' }}
          width="132px"
          href="/locations"
        >
          MORE LOCATIONS
        </Button>
      </Box>
      <Box mt="base">
        <Box
          as="a"
          target="_blank"
          href="https://www.facebook.com/CFimpact"
          color="tertiary"
        >
          <Icon name="facebook" size="32" />
        </Box>
        <Box as="a" target="_blank" href={instagram} color="tertiary" mx="s">
          <Icon name="instagram" size="32" />
        </Box>
        <Box as="a" target="_blank" href={links.youtube} color="tertiary">
          <Icon name="youtube" size="32" />
        </Box>
      </Box>
    </Styled.PastorsCard>
  );
};

export default PastorCard;
