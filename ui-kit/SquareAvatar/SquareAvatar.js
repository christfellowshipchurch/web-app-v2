import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, systemPropTypes } from '..';
import Styled from './SquareAvatar.styles';


function SquareAvatar(props = {}) {
  if (!props.src) {
    return (
      <Box
        {...props}
        bg="subdued"
        borderRadius="15%"
        display='flex'
        alignItems='center'
        height={props.height}
        width={props.width}
      >
        <Icon 
          color="white" 
          name="user"
          padding='s'
          size={props.width} />
        <Box as="span" className="srt">
          User
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Styled alt={`SquareAvatar of ${props.name}`} {...props} />
      <Box as="span" className="srt">
        {props.name}
      </Box>
    </>
  );
}

SquareAvatar.propTypes = {
  ...systemPropTypes,
  height: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  width: PropTypes.string.isRequired,
};

export default SquareAvatar;
