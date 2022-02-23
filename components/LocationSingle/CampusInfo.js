import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Cell,
  Divider,
  Icon,
  Loader,
  utils,
} from 'ui-kit';
import nextSunday from 'date-fns/nextSunday';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import addMinutes from 'date-fns/addMinutes';
import setSeconds from 'date-fns/setSeconds';

import { handleSocialShare } from 'components/Share/shareUtils';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import { campusLinks } from './locationData';
import Styled from './LocationSingle.styles';
import { find, includes } from 'lodash';

const DAY_KEYS = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

function parseTimeAsInt(_time) {
  const time = _time?.toString().trim().toUpperCase();
  const a = time.match(/(AM)|(PM)/g).join();
  const [hour, minute] = time
    .replace(/(AM)|(PM)/g, '')
    .trim()
    .split(':')
    .map(n => parseInt(n));
  let hour24 = a === 'PM' ? hour + 12 : hour;

  return [hour24, minute];
}

const StyledDivider = props => <Divider bg="secondarySubdued" {...props} />;

const CampusInfo = ({
  name,
  pastor,
  city,
  street1,
  state,
  postalCode,
  serviceTimes,
  additionalInfo,
}) => {
  const modalDispatch = useModalDispatch();
  const address = `${street1} ${city}, ${state} ${postalCode?.substring(0, 5)}`;

  const icsLinkEvents = serviceTimes?.map(({ day, time }) => {
    const dayKey = DAY_KEYS[day.toUpperCase()] ?? 0;
    let now = new Date();
    let [hour, minute] = parseTimeAsInt(time);
    let sunday = nextSunday(now);
    sunday = setMinutes(sunday, minute ?? 0);
    sunday = setHours(sunday, hour ?? 0);
    sunday = setSeconds(sunday, 0);

    return {
      label: `${time}`,
      event: {
        title: 'Sunday service at Christ Fellowship Church',
        description: `Join us this Sunday!`,
        address,
        startTime: sunday,
        endTime: addMinutes(sunday, 90),
      },
    };
  });

  /** Instagram and Google Map URLs */
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
            <Styled.ServiceTimeTitle>Every Sunday</Styled.ServiceTimeTitle>
            <Styled.FlexBreak />
            {serviceTimes &&
              serviceTimes?.map((n, i) => [
                <Box
                  display="flex"
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Styled.ServiceTime key={i}>{n?.time}</Styled.ServiceTime>
                </Box>,
                <>
                  {i < serviceTimes.length - 1 && (
                    <Styled.VerticalDivider key={i} />
                  )}
                </>,
              ])}
          </Styled.ServiceTimeContainer>

          {/* Addtional Information - Orange Box */}
          <Box mr={{ _: 0, md: 'base' }}>
            {additionalInfo && additionalInfo?.length > 0 && (
              <Styled.InfoBox>
                {additionalInfo.map(n => (
                  <Box as="li">{n}</Box>
                ))}
              </Styled.InfoBox>
            )}
            {/* Address and Church You Call Home */}
            {address && (
              <>
                <Box
                  display="flex"
                  flexDirection={{ _: 'column', md: 'row' }}
                  alignItems={{ _: 'center', md: 'start' }}
                  mx={{ _: 'l', md: 0 }}
                  py="l"
                  mt={{ _: 0, md: 'base' }}
                >
                  <Box
                    display={{ _: 'none', md: 'flex' }}
                    as="h3"
                    color="secondary"
                    flex="1"
                  >
                    Address
                  </Box>
                  <Box
                    as="h3"
                    textAlign={{ _: 'center', md: 'start' }}
                    maxWidth={300}
                    flex="1"
                  >
                    {address}
                  </Box>
                  <Box textAlign="right" flex="1">
                    <Button
                      as="a"
                      target="_blank"
                      href={
                        campusLink?.googleMap
                          ? campusLink?.googleMap
                          : `https://www.google.com/maps/place/${address?.replace(
                              ' ',
                              '+'
                            )}`
                      }
                      borderRadius="xxl"
                      size="s"
                      px="base"
                      mt="base"
                    >
                      GET DIRECTIONS
                    </Button>
                  </Box>
                </Box>
                <StyledDivider
                  display={{ _: 'none', md: 'flex' }}
                  width="100%"
                />
              </>
            )}
            <Box display={{ _: 'none', md: 'flex' }} mt="l">
              <Box flex="1">
                <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
                  Get the Most Out of Life
                </Box>
              </Box>
              <Box flex="2">
                <Box as="p">
                  {`Here at Christ Fellowship Church in ${name}, we want to help you live the life you were created for. Every Sunday, we have church services where you can experience uplifting worship music, encouraging messages from our pastors, special programming for your family, and opportunities for you to find people to do life with all throughout the week—and it all starts here!`}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Campus Pastors */}
        <Styled.PastorsCard>
          <Box display="flex" alignItems="center">
            <StyledDivider width={120} mr="s" />
            <Avatar
              width="115px"
              height="115px"
              name="campus-pastors"
              src={pastor?.photo?.uri}
            />
            <StyledDivider width={120} ml="s" />
          </Box>
          {pastor ? (
            <Box as="h2" mt="base" mb="xs" mx="s">
              {`${pastor?.firstName} ${pastor?.lastName}`}
            </Box>
          ) : (
            <Loader mt="base" mb="xs" />
          )}
          <Box
            as="h5"
            fontWeight="normal"
            fontStyle="italic"
            color="neutrals.700"
            mb={0}
          >
            {`Campus Pastor${includes(pastor?.firstName, ' and ') ? 's' : ''}`}
          </Box>
          <StyledDivider width="100%" my="l" />
          <Box as="h4" fontStyle="italic" mb="base">
            We can’t wait to see you this week!
          </Box>
          <Box display={{ _: 'inline', lg: 'flex' }}>
            <Button
              as="a"
              onClick={() => {
                modalDispatch(
                  showModal('AddToCalendar', {
                    title: 'What service would you like to attend?',
                    events: icsLinkEvents,
                  })
                );
              }}
              size="xs"
              px="base"
              borderRadius="xxl"
              variant="secondary"
              mr="xs"
            >
              ADD TO CALENDAR
            </Button>

            <Button
              size="xs"
              px="base"
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
            <Box
              as="a"
              target="_blank"
              //campus instagram
              href={campusLink?.instagram}
              color="tertiary"
            >
              <Icon name="instagram" size="32" />
            </Box>
          </Box>
        </Styled.PastorsCard>
      </Cell>

      {/* Mobile View for "Church You Can Call Home" section */}
      <Box px="base" bg="white" display={{ _: 'block', md: 'none' }}>
        <StyledDivider />
      </Box>

      <Box
        display={{ _: 'block', md: 'none' }}
        bg="white"
        py="l"
        textAlign="center"
      >
        <Box as="h2" color="secondary">
          Get the Most Out of Life
        </Box>
        <Box mx={{ _: 'base', sm: 'xl' }}>
          <Box as="p">
            {`Here at Christ Fellowship Church in ${name}, we want to help you live the life you were created for. Every Sunday, we have church services where you can experience uplifting worship music, encouraging messages from our pastors, special programming for your family, and opportunities for you to find people to do life with all throughout the week—and it all starts here!`}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

CampusInfo.propTypes = {
  name: PropTypes.string,
  pastor: {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: {
      uri: PropTypes.string,
    },
  },
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
