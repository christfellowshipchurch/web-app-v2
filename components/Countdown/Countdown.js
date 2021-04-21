import PropTypes from 'prop-types';

import { Photo } from 'components';
import { Box, Button, Heading } from 'ui-kit';
import { differenceInDays, differenceInSeconds } from 'date-fns';
import { useEffect, useState } from 'react';

export default function Countdown({
  src,
  date,
  onClick,
  buttonText,
  ...props
}) {
  const now = new Date();

  const [time, setTime] = useState(differenceInSeconds(date, now));

  let countdown = false;
  let dayDiff;
  if (date) {
    dayDiff = differenceInDays(date, new Date());
    if (dayDiff > 0) {
      countdown = `${dayDiff} day${dayDiff > 1 ? 's' : ''}`;
    } else if (time > 0) {
      const hours = `${Math.floor(time / 3600)}`.padStart(2, '0');
      const minutes = `${Math.floor((time % 3600) / 60)}`.padStart(2, '0');
      const seconds = `${time % 60}`.padStart(2, '0');
      countdown = `${hours}:${minutes}:${seconds}`;
    }
  }

  useEffect(() => {
    let interval;
    if (dayDiff < 1) {
      interval = setInterval(() => {
        setTime(differenceInSeconds(date, new Date()));
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [dayDiff, setTime, date]);

  return (
    <Box display="relative">
      <Photo
        src={src}
        overlay={{
          color: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))`,
        }}
        inner={
          <Box mb="m" display="flex" flexDirection="column" alignItems="center">
            {countdown && (
              <>
                <Heading
                  variant="h2"
                  fontWeight="700"
                  color="white"
                  mb="xxs"
                >{`Live in ${countdown}`}</Heading>
              </>
            )}
            <Button size="l" color="primary" onClick={() => onClick?.()}>
              {buttonText || 'Join us!'}
            </Button>
          </Box>
        }
        {...props}
      />
    </Box>
  );
}

Countdown.propTypes = {
  src: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};
