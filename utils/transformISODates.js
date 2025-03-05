/**
 * utils/string/index.js
 *
 * Author: Caleb Panza
 * Created: Feb 10, 2021
 *
 * String utility methods to be used throughout the platform
 */

import {
  parseISO,
  format,
  isToday,
  isWithinInterval,
  addDays,
  addYears,
} from 'date-fns';

/**
 * Detects if a date is in Daylight Saving Time by comparing
 * the UTC offset at the given date with the UTC offset of the same date in January
 * (when DST is not active in the northern hemisphere)
 * @param {Date} date - The date to check
 * @returns {boolean} - True if date is in DST, false otherwise
 */
const isInDST = date => {
  // January (month 0) will be in standard time
  const januaryDate = new Date(date.getFullYear(), 0, 1);
  // Get the timezone offset in minutes (negative means ahead of UTC)
  const januaryOffset = januaryDate.getTimezoneOffset();
  const dateOffset = date.getTimezoneOffset();

  // If the date's offset is less than January's offset, it's in DST
  // Remember timezone offset is negative for positive UTC offsets
  return dateOffset < januaryOffset;
};

/**
 * Adjusts a date to maintain the same local time regardless of DST changes
 * @param {Date} date - The date to adjust
 * @param {boolean} preserveTime - Whether to preserve the time across DST changes
 * @returns {Date} - The adjusted date
 */
const adjustForDST = (date, preserveTime = true) => {
  if (!preserveTime) return date;

  const now = new Date();
  const isSourceInDST = isInDST(date);
  const isCurrentlyInDST = isInDST(now);

  // If both dates are in DST or both are not in DST, no adjustment needed
  if (isSourceInDST === isCurrentlyInDST) {
    return date;
  }

  // Clone the date to avoid modifying the original
  const adjustedDate = new Date(date);

  // If source date is NOT in DST but we ARE currently in DST (spring forward):
  // Subtract an hour to preserve the original time
  // If source date IS in DST but we are NOT currently in DST (fall back):
  // Add an hour to preserve the original time
  const adjustment = isSourceInDST && !isCurrentlyInDST ? 60 : -60;

  // Apply the opposite adjustment to counteract the DST change
  const counterAdjustment = -adjustment;
  adjustedDate.setMinutes(adjustedDate.getMinutes() + counterAdjustment);

  return adjustedDate;
};

/**
 *
 * @param {string} str  | String to be transformed
 * @param {object} args |
 */
// eslint-disable-next-line import/prefer-default-export
const transformISODates = (
  str,
  { isTodayText = 'Today', withTime = false, preserveTime = true } = {}
) => {
  if (!!str && typeof str === 'string') {
    const isoRegex =
      /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

    return str.replace(isoRegex, match => {
      try {
        const iso = parseISO(match);
        const adjustedIso = adjustForDST(iso, preserveTime);

        /** If the date is today, display the isTodayText */
        if (isToday(adjustedIso)) {
          return withTime
            ? format(adjustedIso, `'Today at' h:mmaaa`)
            : isTodayText;
        }

        /** If the date is within this week: Monday */
        if (
          isWithinInterval(adjustedIso, {
            start: new Date(),
            end: addDays(new Date(), 7),
          })
        ) {
          return withTime
            ? format(adjustedIso, `EEEE 'at' h:mmaaa`)
            : format(adjustedIso, 'EEEE');
        }

        /** If the date is outside of this year: Jan 1, 1996 */
        if (
          !isWithinInterval(adjustedIso, {
            start: new Date(),
            end: addYears(new Date(), 1),
          })
        ) {
          return format(adjustedIso, 'EEE f, YYYY');
        }

        /** If the date is within this year: January 1 */
        return withTime
          ? format(adjustedIso, `MMM d 'at' h:mmaaa`)
          : format(adjustedIso, 'MMMM d');
      } catch (e) {
        console.warn('Unable to parse ISO string', { e });
      }

      return match;
    });
  }

  return str;
};

export default transformISODates;
