import React from 'react';
import PropTypes from 'prop-types';
import { capitalize, find } from 'lodash';

import { Box, Button, Cell, Divider, Icon, utils } from 'ui-kit';

import { campusLinks } from '../../../lib/locationData';
import Styled from '../LocationSingle.styles';
import CfEverywhereButtons from './CFEverywhereButtons';
import PastorCard from './PastorCard';
import { validDaysOfWeek } from '../utils';
import { format } from 'date-fns';

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
  weekdaySchedules,
}) => {
  const addressFirst = street1 ? `${street1}` : null;
  const addressLast = `${city}, ${state} ${postalCode?.substring(0, 5)}`;

  // Make sure there is at least one weekday schedule
  const isWeekdaySchedule = validDaysOfWeek(weekdaySchedules)?.length > 0;

  /** Instagram URLs */
  const campusLink = find(campusLinks, { name: name });

  const desktopHeight = name === 'Online (CF Everywhere)' ? 500 : 560;

  return (
    <Box height={{ _: 'auto', md: desktopHeight }} bg="white">
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
            {name === 'Trinity' || name === 'Online (CF Everywhere)' ? (
              <Box ml="base" display={{ _: 'none', md: 'flex' }} my="l">
                <Box flex="1">
                  <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
                    {name === 'Trinity'
                      ? 'Experience Something New!'
                      : 'Groups & Classes'}
                  </Box>
                </Box>
                {name === 'Trinity' ? (
                  <Box flex="2">
                    Have you been searching for a meaningful community but
                    haven’t found it yet? If so, you’re not alone. Trinity
                    Church by Christ Fellowship is a new church experience
                    coming to your neighborhood! This community location in Palm
                    Beach Gardens offers a different way to experience church so
                    you can get to know people in your neighborhood and enjoy a
                    more traditional worship setting. Find a place for you and
                    your family to belong with even more regional events offered
                    just down the street—it’s big church made small, and you’ll
                    feel right at home!
                  </Box>
                ) : (
                  <Box ml={!isWeekdaySchedule && 'base'} flex="2">
                    <Box>
                      Discover groups and classes to help you grow in your
                      relationship with God and others.
                    </Box>
                    <Button size="s" mt="s">
                      Find a Group or Class
                    </Button>
                  </Box>
                )}
              </Box>
            ) : null}
            {isWeekdaySchedule && [
              <Box display={{ _: 'none', md: 'flex' }} my="l">
                <Box flex="1">
                  <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
                    During the Week
                  </Box>
                </Box>
                <Box
                  flex="2"
                  display="grid"
                  gridColumnGap="xs"
                  gridRowGap="l"
                  gridTemplateColumns="repeat(2, 1fr)"
                >
                  {validDaysOfWeek(weekdaySchedules)?.map(day => {
                    return (
                      <Box>
                        <Box as="h3" mb="xs">
                          {capitalize(Object?.keys(day))}
                        </Box>
                        {day[Object?.keys(day)]?.map(event => {
                          const formattedTime = format(
                            //parse time into valid date to format(added random day for date to parse)
                            Date.parse(`2023-01-01T${event?.time}`),
                            'h:mm a'
                          );
                          return (
                            <Box display="flex" alignItems="center">
                              {`${formattedTime} - 
                                ${event?.title}`}
                              {event?.url && (
                                <Box mb="3px" as="a" href={event?.url}>
                                  <Icon ml="3px" size={13} name="link-out" />
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    );
                  })}
                </Box>
              </Box>,
              <StyledDivider
                display={{ _: 'none', md: 'flex' }}
                width="100%"
              />,
            ]}
            {name !== 'Online (CF Everywhere)' && (
              <Box display={{ _: 'none', md: 'flex' }} mt="l">
                {isWeekdaySchedule && <Box flex="1" />}
                <Box ml={!isWeekdaySchedule && 'base'} flex="2">
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
            )}
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
