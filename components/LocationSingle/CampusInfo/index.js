import React from 'react';
import PropTypes from 'prop-types';
import { camelCase, find } from 'lodash';

import { Box, Button, Cell, Divider, utils } from 'ui-kit';

import { campusLinks } from '../../../lib/locationData';
import Styled from '../LocationSingle.styles';
import PastorCard from './PastorCard';
import { validDaysOfWeek } from '../utils';

import {
  TrinityButtons,
  TrinityMobileButtons,
  CfEverywhereButtons,
  CfEverywhereMobileButtons,
  WeekdayScheduleDisplay,
} from './customComponents';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { whatToExpectVideos } from '../../../lib/locationData';

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
  const modalDispatch = useModalDispatch();
  const expectVideo = whatToExpectVideos[camelCase(name)];

  /** Instagram URLs */
  const campusLink = find(campusLinks, { name: name });

  const desktopHeight = name === 'Online (CF Everywhere)' ? null : 560;

  return (
    <Box
      height={{ _: 'auto', md: desktopHeight }}
      bg="white"
      pb={name !== 'Online (CF Everywhere)' ? { _: '0px', md: '39rem' } : '0px'}
    >
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
            {/* Weekday Schedule / Custom Campus Info */}

            {/* Custom Info for CF Everywhere and Trinity */}
            {name === 'Online (CF Everywhere)' && <CfEverywhereButtons />}

            {name === 'Trinity' && <TrinityButtons />}

            {/* Weekday Schedule */}
            {isWeekdaySchedule && (
              <WeekdayScheduleDisplay weekdaySchedules={weekdaySchedules} />
            )}

            {/* What to Expect Section */}
            {name !== 'Trinity' && name !== 'Online (CF Everywhere)' && (
              <Box display={{ _: 'none', md: 'flex' }} my="l">
                <Box ml="base">
                  <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
                    What to Expect
                  </Box>
                </Box>
                <Box maxWidth={500}>
                  <Box mb="s">
                    Here at Christ Fellowship Church in {name}, you can expect
                    to experience church services with uplifting worship music,
                    encouraging messages from our pastors, special programming
                    for your family, and opportunities for you to find people to
                    do life with all throughout the week—it all starts here!
                  </Box>
                  {expectVideo && (
                    <Button
                      variant="secondary"
                      borderRadius="base"
                      px="base"
                      as="a"
                      onClick={() =>
                        modalDispatch(
                          showModal('Video', {
                            step: 0,
                            wistiaId: expectVideo,
                            title: 'What to Expect',
                          })
                        )
                      }
                      size="s"
                      mt="s"
                    >
                      Watch Video
                    </Button>
                  )}
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

      {/* Mobile layout */}
      {isWeekdaySchedule ? (
        <Box mt="xxl" display={{ _: 'inline', md: 'none' }}>
          <Divider my="l" width="80%" />
          <WeekdayScheduleDisplay
            isMobile
            weekdaySchedules={weekdaySchedules}
          />
          <Divider mb="l" width="80%" />
          <Box pt="l" pb="5.25rem" mx="base" textAlign="center" flex="2">
            <Box as="h2" color="secondary">
              What to Expect
            </Box>
            <Box>
              Here at Christ Fellowship Church in {name}, you can expect to
              experience church services with uplifting worship music,
              encouraging messages from our pastors, special programming for
              your family, and opportunities for you to find people to do life
              with all throughout the week—it all starts here!
            </Box>
            <Button
              as="a"
              variant="secondary"
              borderRadius="base"
              px="base"
              onClick={() =>
                modalDispatch(
                  showModal('Video', {
                    step: 0,
                    wistiaId: whatToExpectVideos[camelCase(name)],
                    title: 'What to Expect',
                  })
                )
              }
              size="s"
              mt="s"
            >
              Watch Video
            </Button>
          </Box>
        </Box>
      ) : (
        name === 'Trinity' && <TrinityMobileButtons />
      )}
      {name === 'Online (CF Everywhere)' && <CfEverywhereMobileButtons />}
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