/**
 * This components covers the main informational area of the Location Single page, including service times, weekday schedules, and what to expect, along with the campus pastor's information and location.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { camelCase, find } from 'lodash';

import { Box, Cell, Divider, Icon, Image } from 'ui-kit';

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

const CampusInfo = ({
  name,
  pastor,
  cfe,
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

  const mdHeight = name === 'Online (CF Everywhere)' ? 500 : 'auto';

  /** ---- Event Banner Props ----  */
  const bannerUrl = 'https://www.christmasatcf.com/';

  /** Spanish Campuses */

  let subtitle, title, cta;
  if (cfe) {
    title = '¿Buscas un servicio de Navidad?';
    subtitle = 'Mira todos los horarios de servicios de Navidad ';
    cta = 'aquí';
  } else {
    title = 'Looking for a Christmas service?';
    subtitle = 'See all Christmas service times ';
    cta = 'here';
  }
  /** ---- Event Banner Props ----  */

  return (
    <Box height={{ _: 'auto', md: mdHeight, lg: 'auto' }} bg="white" pb="0px">
      {/* Campus Information */}
      <Cell
        alignItems={{ _: 'center', md: 'start' }}
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent="center"
        // maxWidth={utils.rem('1200px')}
        bg="white"
        mx="auto"
        position="relative"
        px={{ _: 0, md: 'base', lg: 0 }}
        top={{ _: 0, md: '-2.7rem' }}
        zIndex={1}
        width="100%"
      >
        {/* Event Banner For Mobile --- For Easter/Christmas */}
        {/* <Styled.MobileEventBanner
          display={{ _: 'flex', md: 'none' }}
          backgroundColor="#C6353D"
          textColor="white"
          flexDirection="column"
          alignItems="center"
          px="base"
        >
          <Image
            width={50}
            height={50}
            objectFit="contain"
            source="/location-pages/christmas-star.png"
            m="0px 10px 0px 0px !important"
          />
          <Box display="flex" flexDirection="column">
            <Box as="h3" mb="0">
              {title}
            </Box>
            <Styled.EventSubtitle>
              {subtitle}
              <Box
                as="a"
                href={bannerUrl}
                textDecoration="underline"
                color="white"
                target="_blank"
                rel="noreferrer"
              >
                {cta}
              </Box>
              .
            </Styled.EventSubtitle>
          </Box>
        </Styled.MobileEventBanner> */}

        {/* Service Times */}
        <Box width="100%" mt="-0.3rem">
          <Styled.ServiceTimeContainer>
            <Styled.ServiceTimeTitle>
              {name === 'Online (CF Everywhere)'
                ? 'Live Every Sunday'
                : cfe
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
          </Box>

          {/* Event Banner for Desktop --- For Easter/Christmas */}
          {/* <Styled.EventBanner
            display={{ _: 'none', md: 'flex' }}
            position="relative"
            top={cfe ? '-160px' : '-170px'}
            backgroundColor="#C6353D"
            textColor="white"
            fontSize={cfe && 15}
          >
            <Image
              m="0px 10px 0px 20px"
              width={cfe ? 35 : { md: 35, lg: 40 }}
              height={cfe ? 35 : { md: 35, lg: 40 }}
              objectFit="contain"
              source="/location-pages/christmas-star.png"
            />

            <Box
              alignItems="center"
              display="inline-block"
              justifyContent="center"
              textWrap="pretty"
              fontSize={16}
            >
              {title}
              <Styled.EventSubtitle>
                {subtitle}
                <a
                  style={{ textDecoration: 'underline', color: 'white' }}
                  href={bannerUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cta}
                </a>
              </Styled.EventSubtitle>
            </Box>
          </Styled.EventBanner> */}

          <Box mr={{ _: 0, lg: 'base' }}>
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

            {cfe && <CFESections campus={name} />}

            {/* What to Expect Section */}
            {name !== 'Trinity' &&
              name !== 'Online (CF Everywhere)' &&
              !cfe && (
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
                      <br />
                      {name === 'Belle Glade' &&
                        `Since the beginning, our heart has been to serve kids in our community, that's why we offer our Kids After School and Saturday program where kids can encounter Jesus through a safe and fun experience where they will grow spiritually, relationally, and academically.`}
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
                    {name === 'Belle Glade' && (
                      <Box
                        as="a"
                        href="https://rock.christfellowship.church/page/412?OpportunityId=240"
                        target="_blank"
                        mt="s"
                        width="fit-content"
                        fontStyle="italic"
                        textDecoration="underline"
                        cursor="pointer"
                      >
                        Learn more about our Kids After School Program here!
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
      {isWeekdaySchedule && !cfe && name !== 'Trinity' ? (
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

      {cfe && (
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
