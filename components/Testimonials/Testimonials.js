import React from 'react';
import PropTypes from 'prop-types';

import { Box, HtmlRenderer, Icon, Image, systemPropTypes } from 'ui-kit';
import Styled from './Testimonials.styles';
import RatingStars from './RatingStars';

function Testimonials(props = {}) {
  return (
    <Box textAlign="center">
      <Box as="h2" color="secondary">
        <HtmlRenderer htmlContent={props.title} />
      </Box>
      <Styled {...props}>
        {props?.testimonies?.map((testimony, i) => (
          <Styled.Card noIcons={!testimony?.rating && !testimony?.icon} key={i}>
            {testimony?.image && (
              <Image
                mb="base"
                height={70}
                width={70}
                source={testimony?.image}
              />
            )}
            {testimony?.rating && <RatingStars rating={testimony?.rating} />}
            <Box color="secondary" my="s">
              <HtmlRenderer htmlContent={testimony?.description} />
            </Box>
            <Box mt="base">
              {testimony?.name && (
                <Box as="h4">
                  <HtmlRenderer htmlContent={testimony?.name} />
                </Box>
              )}
              {testimony?.region && (
                <Box>
                  <HtmlRenderer htmlContent={testimony?.region} />
                </Box>
              )}
              {testimony?.icon && (
                <Icon
                  mt="base"
                  size="30"
                  color="neutrals.300"
                  name={testimony?.icon}
                />
              )}
            </Box>
          </Styled.Card>
        ))}
      </Styled>
    </Box>
  );
}

Testimonials.propTypes = {
  ...systemPropTypes,
  title: PropTypes.string,
  testimonies: PropTypes.array,
};

Testimonials.defaultProps = {
  title: 'See What Others Are Saying',
  testimonies: [
    {
      name: '<i>Roy Lee H.</i>',
      description:
        "Always a great experience and sermons are true to God's word. I was a church hopper. I discovered Christ Fellowship in 2013 and have been a member ever since. JUST GO! You will be glad you did.",
      icon: 'google',
      rating: 5,
    },
    {
      name: '<i>Courtney C.</i>',
      description:
        'Christ Fellowship is a place where you can be yourself and you are welcome no matter who you are or what you have done. They are real, genuine people that love God and love people. Love this church!',
      icon: 'yelp',
      rating: 5,
    },
    {
      name: '<i>Mayra M.</i>',
      description:
        'Me and my family attended Christ Fellowship for the first time today and we loved it! Very nice, friendly people. The music was amazing and we loved the sermon. We definitely felt at home. Just want to say to the people from Christ Fellowship thank you for making us feel welcomed.',
      icon: 'google',
      rating: 5,
    },
  ],
};

export default Testimonials;
