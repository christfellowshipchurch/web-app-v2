import { isAfter, isBefore, parseISO } from 'date-fns';

export default function parseLiveStreamDates(liveStream) {
  if (!liveStream) {
    return null;
  }
  const { isLive, eventStartTime, eventEndTime } = liveStream;

  const startDate = eventStartTime ? parseISO(eventStartTime) : null;
  const endDate = eventEndTime ? parseISO(eventEndTime) : null;

  return {
    startDate,
    endDate,
    isLive,
    isBefore: startDate ? isBefore(new Date(), startDate) : false,
    isAfter: endDate ? isAfter(new Date(), endDate) : false,
  };
}
