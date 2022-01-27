import React from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from 'ui-kit';

function RatingStars(props = {}) {
  const stars = [];
  let i = 0;
  do {
    i = i + 1;
    stars.push(i);
  } while (i < props.rating);

  return (
    <Box display="flex" justifyContent="center">
      {stars.map(() => (
        <Icon mx={2} color="hues.yellow" name="star" />
      ))}
    </Box>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.oneOf[(1, 2, 3, 4, 5)],
};

RatingStars.defaultProps = {
  rating: 5,
};

export default RatingStars;
