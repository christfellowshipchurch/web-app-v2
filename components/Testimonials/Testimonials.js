import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, systemPropTypes } from 'ui-kit';
import Styled from './Testimonials.styles';
import RatingStars from './RatingStars';

const testimonies = [
  {
    title: 'Beth Ann',
    description:
      'Each time I walk through the doors of Christ Fellowship on a Sunday, I immediately feel like I am at home.',
    rating: 5,
  },
  {
    title: 'Beth Ann',
    description:
      'Each time I walk through the doors of Christ Fellowship on a Sunday, I immediately feel like I am at home.',
    rating: 5,
  },
  {
    title: 'Beth Ann',
    description:
      'Each time I walk through the doors of Christ Fellowship on a Sunday, I immediately feel like I am at home.',
    rating: 4,
  },
];

function Testimonials(props = {}) {
  return (
    <Box textAlign="center">
      <Box as="h2" color="secondary">
        See What Others Are Saying
      </Box>
      <Styled {...props}>
        {props?.data?.map((n, i) => (
          <Styled.Card key={i}>
            <Box as="h4" fontStyle="italic">
              {n.title}
            </Box>
            <Box color="secondary" mb="s">
              {n.description}
            </Box>
            <RatingStars rating={n.rating} />
            <Icon mt="s" color="neutrals.300" name="google" />
          </Styled.Card>
        ))}
      </Styled>
    </Box>
  );
}

Testimonials.propTypes = {
  ...systemPropTypes,
  data: PropTypes.array,
};

Testimonials.defaultProps = {
  data: testimonies,
};

export default Testimonials;
