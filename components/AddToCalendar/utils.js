import { includes, replace } from 'lodash';
import { add, parseISO, format, formatISO } from 'date-fns';
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

export const icsLink = (event, allDay) => {
  let { title, description, address, startTime, endTime } = formatEvent(event);

  if (allDay) {
    endTime = add(endTime, { days: 1 });
  }

  return (
    'data:text/calendar;charset=utf8,' +
    [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `URL:${document.URL}`,
      `DTSTART:${formatTime(startTime, allDay)}`,
      `DTEND:${formatTime(endTime, allDay)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${address}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n')
  );
};
