/**
 * These are custom informational comoponents for the Location Single - Campus Info component.
 */

import React from 'react';
import { format } from 'date-fns';

import { validDaysOfWeek } from '../utils';
import { Box, Button, Divider, Icon } from 'ui-kit';
import { capitalize } from 'lodash';

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
        >
          <Icon name="youtube" mr="xs" /> YOUTUBE
        </Button>
        <Button
          as="a"
          variant="secondary"
          target="_blank"
          href="https://www.facebook.com/CFimpact/"
          size="s"
          borderRadius="l"
          px="base"
        >
          <Icon name="facebook" mr="xs" /> FACEBOOK LIVE
        </Button>
      </Box>
    </Box>
    <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />
  </>
);

const TrinityButtons = () => [
  <Box ml="base" display={{ _: 'none', md: 'flex' }} my="l">
    <Box>
      <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
        Experience Something New!
      </Box>
    </Box>
    <Box flex="2">
      Have you been searching for a meaningful community but haven’t found it
      yet? If so, you’re not alone. Trinity Church by Christ Fellowship is a new
      church experience coming to your neighborhood! This community location in
      Palm Beach Gardens offers a different way to experience church so you can
      get to know people in your neighborhood and enjoy a more traditional
      worship setting. Find a place for you and your family to belong with even
      more regional events offered just down the street—it’s big church made
      small, and you’ll feel right at home!
    </Box>
  </Box>,
  <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />,
];

const WeekdayScheduleDisplay = ({ weekdaySchedules, isMobile }) => {
  return !isMobile ? (
    [
      <Box display={{ _: 'none', md: 'flex' }} my="l">
        <Box ml="base">
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
        During the Week
      </Box>
      <Box>
        {validDaysOfWeek(weekdaySchedules)?.map(day => {
          return (
            <Box mt="base" textAlign="center">
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
  StyledDivider,
  WeekdayScheduleDisplay,
};
