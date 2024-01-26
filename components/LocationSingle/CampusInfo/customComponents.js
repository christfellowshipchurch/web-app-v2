/**
 * These are custom informational comoponents for the Location Single - Campus Info component.
 */

import React from 'react';
import { format } from 'date-fns';
import { validDaysOfWeek, weekdaySpanishTranslation } from '../utils';
import { Box, Button, Divider, Icon } from 'ui-kit';
import { capitalize } from 'lodash';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { whatToExpectVideos } from '../../../lib/locationData';

const StyledDivider = props => <Divider bg="secondarySubdued" {...props} />;

const CfEverywhereButtons = () => (
  <>
    <Box
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      alignItems={{ _: 'center', md: 'start' }}
      mx={{ _: 'base', md: 0 }}
      py="l"
      mt={{ _: 0, md: 'base' }}
    >
      <Box
        as="h3"
        display="flex"
        color="secondary"
        flex="1"
        maxWidth={{ _: '', md: 200 }}
        textAlign={{ _: 'center', md: 'left' }}
        mb="base"
        ml="base"
      >
        Ways to Join Online
      </Box>
      <Box
        textAlign={{ _: 'center', md: 'left' }}
        ml={{ _: '', lg: 'xl' }}
        flex={{ _: '', md: 1 }}
        display={{ _: 'flex', md: 'block' }}
      >
        <Button
          as="a"
          target="_blank"
          href="https://www.youtube.com/c/ChristFellowshipWelcomeHome"
          size="s"
          borderRadius="l"
          mr="s"
          px="base"
          display="flex"
          width="185px"
          alignItems="center"
          justifyContent="center"
        >
          <Icon name="youtube" mr="xs" />
          <Box>YOUTUBE</Box>
        </Button>
        <Button
          as="a"
          variant="secondary"
          target="_blank"
          href="https://www.facebook.com/CFimpact/"
          size="s"
          borderRadius="l"
          px="base"
          display="flex"
          width="185px"
          alignItems="center"
          justifyContent="center"
        >
          <Icon name="facebook" mr="xs" />
          <Box>FACEBOOK LIVE</Box>
        </Button>
      </Box>
    </Box>
    <Box ml="base" display={{ _: 'none', md: 'flex' }} my="l">
      <Box>
        <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s">
          Here at Christ Fellowship Everywhere, you can expect to experience
          church services with uplifting worship music, encouraging messages
          from our pastors, special programming for your family, and
          opportunities for you to find people to do life with all throughout
          the week—it all starts here!
        </Box>
      </Box>
    </Box>
  </>
);

const TrinityButtons = ({ weekdaySchedules }) => {
  const modalDispatch = useModalDispatch();

  return [
    <Box ml="base" display={{ _: 'none', md: 'flex' }} my="l">
      <Box>
        <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s">
          Here at Trinity Church by Christ Fellowship Church you can expect to
          experience church services with uplifting worship music, encouraging
          messages from our pastors, special programming for your family, and
          opportunities for you to find people to do life with all throughout
          the week—it all starts here!
        </Box>
        <Box
          as="a"
          onClick={() =>
            modalDispatch(
              showModal('Video', {
                step: 0,
                wistiaId: whatToExpectVideos['trinity'],
                title: 'What to Expect',
              })
            )
          }
          mt="s"
          width="fit-content"
          fontStyle="italic"
          textDecoration="underline"
          cursor="pointer"
          mx="auto"
        >
          See what to expect here!
          <Icon ml="s" name="play" size="24" variant="secondary" />
        </Box>
      </Box>
    </Box>,
  ];
};

const CFEButtons = name => {
  const modalDispatch = useModalDispatch();
  const campusName = name.campus;

  return (
    <Box display={{ _: 'none', md: 'flex' }} my="l">
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <Box ml="base">
            <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
              ¿Qué puedo esperar?
            </Box>
          </Box>

          <Box maxWidth={500}>
            <Box mb="s">
              En Christ Fellowship Español puedes ser parte de nuestros
              servicios que cuentan con música y espacios de adoración
              edificantes, mensajes alentadores de nuestros pastores,
              programación especial para tu familia y oportunidades para
              encontrar personas con quienes puedes caminar por la vida y hacer
              comunidad durante toda la semana—¡todo comienza aquí!
            </Box>

            <Box
              as="a"
              onClick={() =>
                modalDispatch(
                  showModal('Video', {
                    step: 0,
                    wistiaId:
                      campusName ===
                      'Christ Fellowship Español Palm Beach Gardens'
                        ? whatToExpectVideos['cfe']
                        : whatToExpectVideos['royalPalmBeach'],
                    title: '¿Qué puedo esperar?',
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
              Mira lo que puedes esperar aquí!
              <Icon ml="s" name="play" size="24" variant="secondary" />
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" mt="base">
          <Box ml="base">
            <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
              Tenemos más para ti
            </Box>
          </Box>
          <Box maxWidth={500}>
            <Box mb="s" fontStyle="italic">
              {campusName === 'Christ Fellowship Español Palm Beach Gardens' ? (
                <Box fontStyle="italic">
                  Consulta{' '}
                  <Box as="a" href="/locations/iglesia-royal-palm-beach">
                    Christ Fellowship Church Español en Royal Palm Beach
                  </Box>
                  <Box fontStyle="italic">
                    para conocer más espacios entre semana.
                  </Box>
                </Box>
              ) : (
                <Box fontStyle="italic">
                  Consulta{' '}
                  <Box as="a" href="/locations/iglesia-palm-beach-gardens">
                    Christ Fellowship Church Español en Palm Beach Gardens
                  </Box>
                  <Box fontStyle="italic">
                    para conocer más espacios entre semana.
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const CfEverywhereMobileButtons = () => {
  return [
    <StyledDivider display="flex" width="100%" />,
    <Box
      ml="base"
      display={{ _: 'flex', md: 'none' }}
      flexDirection="column"
      alignItems="center"
      mt="base"
      mb={{ _: '0px', md: 'base' }}
      pb="l"
    >
      <Box>
        <Box as="h3" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" pr="base" textAlign="center">
          Here at Christ Fellowship Everywhere, you can expect to experience
          church services with uplifting worship music, encouraging messages
          from our pastors, special programming for your family, and
          opportunities for you to find people to do life with all throughout
          the week—it all starts here!
        </Box>
      </Box>
    </Box>,
  ];
};

const CFEMobileButtons = name => {
  const modalDispatch = useModalDispatch();
  const campusName = name.campus;

  return [
    <Box
      ml="base"
      display={{ _: 'flex', md: 'none' }}
      flexDirection="column"
      alignItems="center"
      mt="xl"
      mb={{ _: '0px', md: 'base' }}
      pb="l"
    >
      <Box>
        <Box as="h3" color="secondary" maxWidth={200}>
          ¿Qué puedo esperar?
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" pr="base" textAlign="center">
          En Christ Fellowship Español puedes ser parte de nuestros servicios
          que cuentan con música y espacios de adoración edificantes, mensajes
          alentadores de nuestros pastores, programación especial para tu
          familia y oportunidades para encontrar personas con quienes puedes
          caminar por la vida y hacer comunidad durante toda la semana—¡todo
          comienza aquí!
        </Box>
      </Box>

      <Box
        as="a"
        onClick={() =>
          modalDispatch(
            showModal('Video', {
              step: 0,
              wistiaId:
                campusName === 'Christ Fellowship Español Palm Beach Gardens'
                  ? whatToExpectVideos['cfe']
                  : whatToExpectVideos['royalPalmBeach'],
              title: '¿Qué puedo esperar?',
            })
          )
        }
        mt="xxs"
        display="flex"
        alignItems="center"
        width="fit-content"
        fontStyle="italic"
        textDecoration="underline"
        cursor="pointer"
        mx="auto"
      >
        ¿Qué puedo esperar?
        <Icon ml="s" name="play" size="24" variant="secondary" />
      </Box>

      <Box mt="l">
        <Box as="h3" color="secondary" maxWidth={200}>
          Tenemos más para ti
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" px="base" fontStyle="italic" textAlign="center">
          {campusName === 'Christ Fellowship Español Palm Beach Gardens' ? (
            <Box fontStyle="italic">
              Consulta{' '}
              <Box as="a" href="/locations/iglesia-royal-palm-beach">
                Christ Fellowship Church Español en Royal Palm Beach
              </Box>{' '}
              para conocer más espacios entre semana.
            </Box>
          ) : (
            <Box fontStyle="italic">
              Consulta{' '}
              <Box as="a" href="/locations/iglesia-palm-beach-gardens">
                Christ Fellowship Church Español en Palm Beach Gardens
              </Box>{' '}
              para conocer más espacios entre semana.
            </Box>
          )}
        </Box>
      </Box>
    </Box>,
  ];
};

const TrinityMobileButtons = ({ weekdaySchedules }) => {
  const modalDispatch = useModalDispatch();

  return [
    <Box
      ml="base"
      display={{ _: 'flex', md: 'none' }}
      flexDirection="column"
      alignItems="center"
      mt="base"
      mb={{ _: '0px', md: 'base' }}
      pb="l"
    >
      <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />
      <Box>
        <Box as="h3" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" mr="base" textAlign="center">
          Here at Trinity Church by Christ Fellowship Church you can expect to
          experience church services with uplifting worship music, encouraging
          messages from our pastors, special programming for your family, and
          opportunities for you to find people to do life with all throughout
          the week—it all starts here!
        </Box>
      </Box>
      <Box
        as="a"
        onClick={() =>
          modalDispatch(
            showModal('Video', {
              step: 0,
              wistiaId: whatToExpectVideos['trinity'],
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
    </Box>,
  ];
};

const WeekdayScheduleDisplay = ({ weekdaySchedules, isMobile, campus }) => {
  const CFEPBG = 'Christ Fellowship Español Palm Beach Gardens';
  const CFERPB = 'Christ Fellowship Español Royal Palm Beach';

  return !isMobile ? (
    [
      <Box display={{ _: 'none', md: 'flex' }} my="l">
        <Box ml="base">
          <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
            {campus === CFEPBG || campus === CFERPB
              ? 'Durante la Semana'
              : 'During the Week'}
          </Box>
        </Box>
        <Box
          flex="2"
          display="grid"
          gridColumnGap="xs"
          gridRowGap="l"
          gridTemplateColumns={
            campus === CFERPB ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'
          }
        >
          {validDaysOfWeek(weekdaySchedules)?.map(day => {
            const formattedDay = capitalize(Object?.keys(day));
            return (
              <Box>
                <Box as="h3" mb="xs">
                  {campus === CFEPBG || campus === CFERPB
                    ? weekdaySpanishTranslation(formattedDay)
                    : formattedDay}
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
      <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />,
    ]
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt="l"
      pb="xxl"
    >
      <Box as="h2" color="secondary">
        {campus === CFEPBG || campus === CFERPB
          ? 'Durante la Semana'
          : 'During the Week'}
      </Box>
      <Box>
        {validDaysOfWeek(weekdaySchedules)?.map(day => {
          const formattedDay = capitalize(Object?.keys(day));
          return (
            <Box mt="base" textAlign="center">
              <Box as="h3" mb="xs">
                {campus === CFEPBG || campus === CFERPB
                  ? weekdaySpanishTranslation(formattedDay)
                  : formattedDay}
              </Box>
              {day[Object?.keys(day)]?.map(event => {
                const formattedTime = format(
                  //parse time into valid date to format(added random day for date to parse)
                  Date.parse(`2023-01-01T${event?.time}`),
                  'h:mm a'
                );
                return (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
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
    </Box>
  );
};

export {
  CfEverywhereButtons,
  TrinityButtons,
  CFEButtons,
  CfEverywhereMobileButtons,
  CFEMobileButtons,
  TrinityMobileButtons,
  StyledDivider,
  WeekdayScheduleDisplay,
};
