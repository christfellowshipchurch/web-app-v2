import PropTypes from 'prop-types';
import { format, isValid, isSameWeek, isSameYear } from 'date-fns';

const dateTextFormat = date => {
  const fnsDate = new Date(date);

  console.log(isValid(fnsDate));
  if (!isValid(fnsDate)) return '';

  const now = new Date();
  let label = '';

  /** If the date is today, display the isTodayText */
  if (format(fnsDate, 'MMddyyyy') === format(now, 'MMddyyyy')) {
    label = format(fnsDate, "'Today at' h:mm aa");
  } else if (isSameWeek(fnsDate, now)) {
    /** If the date is within this week: Monday */
    label = format(fnsDate, "dddd 'at' h:mm aa");
  } else if (isSameYear(fnsDate, now)) {
    /** If the date is outside of this year: Jan 1, 1996 */
    label = format(fnsDate, 'MMM dd, yyyy');
  } else {
    /** If the date is within this year: January 1 */
    label = format(fnsDate, "MMMM dd 'at' h:mm A");
  }

  return label;
};

dateTextFormat.propTypes = {
  date: PropTypes.string.isRequired,
};

export default dateTextFormat;
