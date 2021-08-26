import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, systemPropTypes } from 'ui-kit';
import Styled from './Avatar.styles';

function Avatar(props = {}) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (!props.src || error) {
    return (
      <Box
        bg="neutrals.600"
        borderRadius="50%"
        height={props.height}
        width={props.width}
      >
        <Icon color="white" name="user" padding="s" size={props.width} />
        <Box as="span" className="srt">
          User
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Styled
        alt={`Avatar of ${props.name}`}
        onError={handleError}
        {...props}
      />
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
