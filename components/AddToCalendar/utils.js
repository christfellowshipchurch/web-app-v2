import replace from 'lodash/replace';
import includes from 'lodash/includes';
import uniqueId from 'lodash/uniqueId';
import { add, parseISO, format, formatISO } from 'date-fns';
import { isString } from 'lodash';

const formatEvent = event => ({
  title: event?.title || 'Christ Fellowship Church Event',
  description: event?.description || '',
  address: event?.address || '',
  startTime: parseISO(event?.startTime) || parseISO(new Date()),
  endTime: parseISO(
    event?.endTime
      ? event?.endTime || new Date()
      : event?.startTime || new Date()
  ),
});

const formatTime = (date, allDay) => {
  let formattedDate = allDay
    ? format(date, 'yyyyMMdd')
    : formatISO(date, { format: 'basic', representation: 'complete' });
  return formattedDate.replace('+00:00', 'Z');
};

export const replaceAndSymbol = string => {
  const includesAndSymbol = includes(string, '&');

  if (includesAndSymbol) {
    string = replace(string, '&', 'and');
  }

  return string;
};

export const googleCalLink = (event, allDay) => {
  let { title, description, address, startTime, endTime } = formatEvent(event);

  //NOTE: when using all day format(removing time), the time defaults to midnight.
  // In order to show correct days, we must add a day to the endTime

  if (allDay) {
    const parseTime = parseISO(endTime);
    endTime = add(parseTime, { days: 1 });
  }

  title = replaceAndSymbol(title);

  return encodeURI(
    [
      'https://calendar.google.com/calendar/render',
      '?action=TEMPLATE',
      `&dates=${formatTime(startTime, allDay)}`,
      `/${formatTime(endTime, allDay)}`,
      `&location=${address}`,
      `&text=${title}`,
      `&details=${description}`,
    ].join('')
  );
};

/**
 * todo : As of now this is the only working method for Add to Calendar. We will need to update the other methods above to work like this one. For now we are only downloading ics files that are all day events.
 */

export const icsLink = event => {
  let { title, description, address, startTime, endTime, url } = event;

  if (isString(startTime) || isString(endTime)) {
    startTime = parseISO(startTime);
    endTime = parseISO(endTime);
  }

  const icsString = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//www.cf.church//Christ Fellowship Church',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `DTSTAMP:${format(new Date(), 'yyyyMMddhhmmss')}Z`,
    `UID:${uniqueId()}-@christfellowship.church`,
    `DTSTART;TZID=America/New_York:${format(startTime, "yyyyMMdd'T'HHmmss")}`,
    `DTEND;TZID=America/New_York:${format(endTime, "yyyyMMdd'T'HHmmss")}`,
    `SUMMARY:${title}`,
    `URL:${url ?? document?.URL ?? 'https://www.christfellowship.church'}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${address}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');

  // We use blob method and removed `charset=utf8` in order to be compatible with Safari IOS
  let blob = new Blob([icsString], { type: 'text/calendar' });
  let calendarLink = window.URL.createObjectURL(blob);

  return calendarLink;
};
