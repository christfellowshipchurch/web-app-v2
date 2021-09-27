import PropTypes from 'prop-types';
import { format, isValid, isSameWeek, isSameYear, isTomorrow } from 'date-fns';

const dateTextFormat = date => {
  const fnsDate = new Date(date);

  if (!isValid(fnsDate)) return '';

  const now = new Date();
  let label = '';

  /** If the date is today, display the isTodayText */
  if (format(fnsDate, 'MMddyyyy') === format(now, 'MMddyyyy')) {
    label = format(fnsDate, "'Today at' h:mm aa");
  } else if (isTomorrow(fnsDate)) {
    /** if the date is tomorrow: Tomorrow at 6:00pm*/
    label = format(fnsDate, "'Tomorrow at' h:mm a");
  } else if (isSameWeek(fnsDate, now)) {
    /** If the date is within this week: Monday */
    label = format(fnsDate, "EEEE 'at' h:mm aa");
  } else if (isSameYear(fnsDate, now)) {
    /** If the date is outside of this year: Jan 1, 1996 */
    label = format(fnsDate, 'MMM dd, yyyy');
  } else {
    /** If the date is within this year: January 1 */
    label = format(fnsDate, "MMMM dd 'at' h:mm a");
  }

  return label;
};

dateTextFormat.propTypes = {
  date: PropTypes.string.isRequired,
};

export default dateTextFormat;
