/**
 * This components covers the main informational area of the Location Single page, including service times, weekday schedules, and what to expect, along with the campus pastor's information and location.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { camelCase, find } from 'lodash';

import { Box, Cell, Divider, Icon, Image, utils } from 'ui-kit';

import { campusLinks } from '../../../lib/locationData';
import Styled from '../LocationSingle.styles';
import PastorCard from './PastorCard';
import { validDaysOfWeek } from '../utils';

import {
  TrinityButtons,
  TrinityMobileButtons,
  CFESections,
  CfEverywhereMobileSection,
  CFEMobileButtons,
  WeekdayScheduleDisplay,
  CfEverywhereSection,
} from './AdditionalComponents';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { whatToExpectVideos } from '../../../lib/locationData';
import { useCurrentBreakpoint } from 'hooks';

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
  const currentBreakpoints = useCurrentBreakpoint();

  const addressFirst = street1 ? `${street1}` : null;
  const addressLast = `${city}, ${state} ${postalCode?.substring(0, 5)}`;

  // Make sure there is at least one weekday schedule
  const isWeekdaySchedule = validDaysOfWeek(weekdaySchedules)?.length > 0;
  const modalDispatch = useModalDispatch();
  const expectVideo = whatToExpectVideos[camelCase(name)];

  /** Instagram URLs */
  const campusLink = find(campusLinks, { name: name });

  const desktopHeight = name === 'Online (CF Everywhere)' ? 500 : 560;

  /** Spanish Campuses */
  const CFEPBG = 'Christ Fellowship Español Palm Beach Gardens';
  const CFERPB = 'Christ Fellowship Español Royal Palm Beach';

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
        {/* Easter Banner For Mobile */}
        {currentBreakpoints.isSmall && (
          <Styled.MobileEventBanner>
            <Image
              width={50}
              height={50}
              objectFit="contain"
              source="/location-pages/easter-banner.png"
              m="0px 10px 0px 0px !important"
            />
            <Box display="flex" flexDirection="column">
              <Box as="h3" mb="0">
                Looking for an Easter service?
              </Box>
              <Styled.EventSubtitle>
                See all Easter and Good Friday service times{' '}
                <Box
                  as="a"
                  href="/easter-2024"
                  color="rgba(59, 125, 217, 1)"
                  textDecoration="underline"
                >
                  here
                </Box>
                .
              </Styled.EventSubtitle>
            </Box>
          </Styled.MobileEventBanner>
        )}
        {/* Service Times */}
        <Box width="100%">
          <Styled.ServiceTimeContainer>
            <Styled.ServiceTimeTitle>
              {name === 'Online (CF Everywhere)'
                ? 'Live Every Sunday'
                : name === CFEPBG || name === CFERPB
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
          {/* Desktop Easter Banner */}
          {!currentBreakpoints.isSmall && (
            <Styled.EventBanner>
              <Image
                width={50}
                height={50}
                objectFit="contain"
                source="/location-pages/easter-banner.png"
                mr="10px"
              />

              <Box>
                Looking for an Easter service?
                <Styled.EventSubtitle fontSize="14px">
                  See all Easter and Good Friday service times{' '}
                  <Box
                    as="a"
                    color="rgba(59, 125, 217, 1)"
                    href={`/easter-2024${
                      name === CFEPBG || name === CFERPB ? '-espanol' : ''
                    }`}
                    textDecoration="underline"
                  >
                    here
                  </Box>
                  .
                </Styled.EventSubtitle>
              </Box>
            </Styled.EventBanner>
          )}
          {/* Addtional Information - Orange Box */}
          <Box mr={{ _: 0, lg: 'base' }}>
            {additionalInfo && additionalInfo?.length > 0 && (
              <Styled.InfoBox>
                {additionalInfo.map(n => (
                  <Box key={n} as="li">
                    {n}
                  </Box>
                ))}
              </Styled.InfoBox>
            )}

            {/* Custom Info for CF Everywhere and Trinity */}
            {name === 'Online (CF Everywhere)' && <CfEverywhereSection />}

            {/* Weekday Schedule */}
            {isWeekdaySchedule && (
              <WeekdayScheduleDisplay
                weekdaySchedules={weekdaySchedules}
                campus={name}
              />
            )}

            {name === 'Trinity' && (
              <TrinityButtons
                weekdaySchedules={weekdaySchedules}
                campus={name}
              />
            )}

            {(name === CFEPBG || name === CFERPB) && (
              <CFESections campus={name} />
            )}

            {/* What to Expect Section */}
            {name !== 'Trinity' &&
              name !== 'Online (CF Everywhere)' &&
              name !== CFEPBG &&
              name !== CFERPB && (
                <Box display={{ _: 'none', md: 'flex' }} my="l">
                  <Box ml="base">
                    <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
                      What to Expect
                    </Box>
                  </Box>
                  <Box maxWidth={500}>
                    <Box mb="s" mr="s">
                      Here at Christ Fellowship Church in {name}, you can expect
                      to experience church services with uplifting worship
                      music, encouraging messages from our pastors, special
                      programming for your family, and opportunities for you to
                      find people to do life with all throughout the week—it all
                      starts here!
                    </Box>
                    {expectVideo && (
                      <Box
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
                        mt="s"
                        display="flex"
                        alignItems="center"
                        width="fit-content"
                        fontStyle="italic"
                        textDecoration="underline"
                        cursor="pointer"
                      >
                        See what to expect here!
                        <Icon
                          ml="s"
                          name="play"
                          size="24"
                          variant="secondary"
                        />
                      </Box>
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
      {isWeekdaySchedule &&
      name !== CFEPBG &&
      name !== CFERPB &&
      name !== 'Trinity' ? (
        <Box mt="xxl" display={{ _: 'inline', md: 'none' }}>
          <Divider my="l" width="80%" />
          <WeekdayScheduleDisplay
            isMobile
            weekdaySchedules={weekdaySchedules}
            campus={name}
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
            {expectVideo && (
              <Box
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
                mt="s"
                display="flex"
                alignItems="center"
                width="fit-content"
                fontStyle="italic"
                textDecoration="underline"
                cursor="pointer"
                mx="auto"
              >
                See what to expect here!
                <Icon ml="s" name="play" size="24" variant="secondary" />
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        name === 'Trinity' && (
          <Box display={{ _: 'inline', md: 'none' }}>
            <TrinityMobileButtons
              weekdaySchedules={weekdaySchedules}
              campus={name}
            />
          </Box>
        )
      )}

      {(name === CFEPBG || name === CFERPB) && (
        <Box display={{ _: 'inline', md: 'none' }}>
          <Divider my="l" width="80%" />
          <WeekdayScheduleDisplay
            isMobile
            weekdaySchedules={weekdaySchedules}
            campus={name}
          />
          <Divider width="80%" />
          <CFEMobileButtons campus={name} />
        </Box>
      )}

      {name === 'Online (CF Everywhere)' && <CfEverywhereMobileSection />}
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
