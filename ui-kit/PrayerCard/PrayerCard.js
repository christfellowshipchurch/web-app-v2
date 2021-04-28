import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, systemPropTypes } from 'ui-kit';
import { Box } from 'ui-kit';
import Styled from '../Card/Card.styles';

const PrayerCard = (props = {}) => {
  return (
    <Styled {...props}>
      <Styled.Content
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingBottom="base"
        >
          {props?.date && (
            <Box as="h5" marginBottom={0} color="neutrals.600">
              {props?.date}
            </Box>
          )}
          {props?.coverImage && (
            <Avatar src={props?.coverImage} maxWidth="20%" />
          )}
        </Box>

        {props?.description ? (
          <Box as="h5" fontSize="base" fontWeight="normal">
            {props?.description}
          </Box>
        ) : null}
      </Styled.Content>
    </Styled>
  );
};

PrayerCard.propTypes = {
  ...systemPropTypes,
  coverImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

PrayerCard.defaultProps = {};

export default PrayerCard;
