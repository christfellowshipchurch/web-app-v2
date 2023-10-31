import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Cell, Divider, utils } from 'ui-kit';

import { campusLinks } from '../../../lib/locationData';
import Styled from '../LocationSingle.styles';
import { find } from 'lodash';
import CfEverywhereButtons from './CFEverywhereButtons';
import PastorCard from './PastorCard';

const StyledDivider = props => <Divider bg="secondarySubdued" {...props} />;

const CampusInfo = ({
  name,
  pastor,
  city,
  street1,
  state,
  postalCode,
  phoneNumber,
  serviceTimes,
  additionalInfo,
  mapLink,
}) => {
  const addressFirst = street1 ? `${street1}` : null;
  const addressLast = `${city}, ${state} ${postalCode?.substring(0, 5)}`;

  /** Instagram URLs */
  const campusLink = find(campusLinks, { name: name });

  return (
    <Box bg="white">
      {/* Campus Information */}
      <Cell
        alignItems={{ _: 'center', md: 'start' }}
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent="center"
        maxWidth={utils.rem('1200px')}
        mx="auto"
        position="relative"
        px={{ _: 0, md: 'base' }}
        top={{ _: 0, md: '-2.7rem' }}
        zIndex={1}
        width="100%"
      >
        {/* Service Times */}
        <Box width="100%">
          <Styled.ServiceTimeContainer>
            <Styled.ServiceTimeTitle>{`${
              name === 'Online (CF Everywhere)' ? 'Live ' : ''
            }Every Sunday`}</Styled.ServiceTimeTitle>
            <Styled.FlexBreak />
            {serviceTimes &&
              serviceTimes?.map(
                (n, i) =>
                  n?.time &&
                  n?.time !== '' && (
                    <React.Fragment key={i}>
                      <Box
                        display="flex"
                        flex={1}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Styled.ServiceTime>{n?.time}</Styled.ServiceTime>
                      </Box>
                      {i < serviceTimes.length - 1 && (
                        <Styled.VerticalDivider key={`dividier-${i}`} />
                      )}
                    </React.Fragment>
                  )
              )}
          </Styled.ServiceTimeContainer>

          {/* Addtional Information - Orange Box */}
          <Box mr={{ _: 0, md: 'base' }}>
            {additionalInfo && additionalInfo?.length > 0 && (
              <Styled.InfoBox>
                {additionalInfo.map(n => (
                  <Box key={n} as="li">
                    {n}
                  </Box>
                ))}
              </Styled.InfoBox>
            )}
            {/* Address and Church You Call Home */}
            {name === 'Online (CF Everywhere)' && <CfEverywhereButtons />}
            <Box display={{ _: 'none', md: 'flex' }} my="l">
              <Box flex="1">
                <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
                  During the Week
                </Box>
              </Box>
              <Box flex="2">
                <Box as="p">Weekly content here</Box>
              </Box>
            </Box>
            <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />
            <Box display={{ _: 'none', md: 'flex' }} mt="l">
              <Box flex="1"></Box>
              <Box flex="2">
                <Box as="h3">Additional Groups & Classes</Box>
                <Box>
                  Discover groups and classes to help you grow in your
                  relationship with God and others.
                </Box>
                <Button size="s" mt="s">
                  Find a Group or Class
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Campus Pastors */}
        <PastorCard
          pastor={pastor}
          campusName={name}
          address={{ addressFirst, addressLast }}
          phoneNumber={phoneNumber}
          instagram={campusLink?.instagram}
          mapLink={mapLink}
        />
      </Cell>
    </Box>
  );
};

CampusInfo.propTypes = {
  name: PropTypes.string,
  pastor: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: {
      uri: PropTypes.string,
    },
  }),
  city: PropTypes.string,
  street1: PropTypes.string,
  state: PropTypes.string,
  postalCode: PropTypes.string,
  serviceTimes: PropTypes.array,
  additionalInfo: PropTypes.array,
};

CampusInfo.defaultProps = {
  additionalInfo: [],
  serviceTimes: [],
};

export default CampusInfo;
