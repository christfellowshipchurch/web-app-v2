/**
 * These are custom informational comoponents for the Location Single - Campus Info component.
 */

import React from 'react';
import { format } from 'date-fns';
import { validDaysOfWeek, weekdaySpanishTranslation } from '../../utils';
import { Box, Divider, Icon } from 'ui-kit';
import { capitalize } from 'lodash';

const StyledDivider = props => <Divider bg="secondarySubdued" {...props} />;

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

export { StyledDivider, WeekdayScheduleDisplay };
