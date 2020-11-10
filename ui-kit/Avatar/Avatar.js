import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, systemPropTypes } from '../';
import Styled from './Avatar.styles';

function Avatar(props = {}) {
  if (!props.src) {
    return (
      <>
        <Icon name="user" color="fg" size="32" />
        <Box as="span" className="srt">
          User
        </Box>
      </>
    );
  }

  return (
    <>
      <Styled alt={`Avatar of ${props.name}`} {...props} />
      <Box as="span" className="srt">
        {props.name}
      </Box>
    </>
  );
}

Avatar.propTypes = {
  ...systemPropTypes,
  height: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  width: PropTypes.string.isRequired,
};

export default Avatar;
