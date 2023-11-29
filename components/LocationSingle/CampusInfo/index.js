import React from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';

import { Box, Button, Cell, utils } from 'ui-kit';

import { campusLinks } from '../../../lib/locationData';
import Styled from '../LocationSingle.styles';
import PastorCard from './PastorCard';
import { validDaysOfWeek } from '../utils';

import {
  TrinityButtons,
  CfEverywhereButtons,
  WeekdayScheduleDisplay,
} from './customComponents';
import { is } from 'date-fns/locale';

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
            <Styled.ServiceTimeTitle>
              {name === 'Online (CF Everywhere)'
                ? 'Live Every Sunday'
                : name === 'Christ Fellowship Español Palm Beach Gardens' ||
                  name === 'Christ Fellowship Español Royal Palm Beach'
                ? 'Cada Domingo'
                : 'Every Sunday'}
            </Styled.ServiceTimeTitle>
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
            {/* Weekday Schedule / Custom Campus Info */}

            {/* Custom Info for CF Everywhere and Trinity */}
            {name === 'Online (CF Everywhere)' && <CfEverywhereButtons />}
            {name === 'Trinity' && <TrinityButtons />}

            {/* Weekday Schedule */}
            {isWeekdaySchedule && (
              <WeekdayScheduleDisplay
                campus={name}
                weekdaySchedules={weekdaySchedules}
              />
            )}

            {/* Groups and Classes Section */}
            <Box display="flex" mt="l" px="base">
              <Box
                textAlign={{ _: 'center', md: 'left' }}
                ml={!isWeekdaySchedule && 'base'}
                flex="2"
              >
                <Box as="h3">Groups & Classes</Box>
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

      {isWeekdaySchedule && (
        <Box mt="xxl" display={{ _: 'inline', md: 'none' }}>
          <WeekdayScheduleDisplay
            campus={name}
            isMobile
            weekdaySchedules={weekdaySchedules}
          />
        </Box>
      )}
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
