import React from 'react';
import { Avatar, Box, Button, Divider, Icon, Image, Loader } from 'ui-kit';

import Styled from '../LocationSingle.styles';
import { handleSocialShare } from 'components/Share/shareUtils';
import { includes } from 'lodash';

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
      <Divider width="100%" my="l" />
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        px="l"
      >
        {address && campusName !== 'Online (CF Everywhere)' ? (
          <>
            <Image
              mb="base"
              maxWidth={250}
              aspectRatio="16by9"
              source="/cfdp-default-map.jpg"
            />
            <Box as="h4" mt="base" mb="xs">
              Address
            </Box>
            <Box as="a" textAlign="left" href={mapLink}>
              {addressFirst}
              {'\n'}
              {addressLast}
            </Box>
          </>
        ) : null}
        <Box as="h4" mt="base" mb="xs">
          Phone
        </Box>
        <Box as="a" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Box>
      </Box>
      <Box my="base">
        <Button
          size="xs"
          px="l"
          borderRadius="xxl"
          ml={{ _: 0, lg: 'xs' }}
          m={{ _: 'xs', lg: 0 }}
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
        </Button>
      </Box>
      {/**
       * todo : Add urls to social media links, maybe setup those up from Rock???
       **/}
      <Box mt="base">
        <Box
          as="a"
          target="_blank"
          href="https://www.facebook.com/CFimpact"
          color="tertiary"
          mr="xs"
        >
          <Icon name="facebook" size="32" />
        </Box>
        <Box as="a" target="_blank" href={instagram} color="tertiary">
          <Icon name="instagram" size="32" />
        </Box>
      </Box>
    </Styled.PastorsCard>
  );
};

export default PastorCard;
