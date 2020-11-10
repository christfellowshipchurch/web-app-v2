import React from 'react';
import PropTypes from 'prop-types';

import { Box, systemPropTypes } from '../';
import Styled from './Avatar.styles';

function Avatar(props = {}) {
  if (!props.src) {
    return (
      <Box
        bg="subdued"
        borderRadius="50%"
        height={props.height}
        width={props.width}
      >
        <Box as="span" className="srt">
          User
        </Box>
      </Box>
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
