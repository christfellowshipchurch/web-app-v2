import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, systemPropTypes } from 'ui-kit';
import Styled from './Avatar.styles';

function Avatar(props = {}) {
  const [error, setError] = useState(!props.src);

  const handleError = event => {
    setError(true);
  };

  if (error) {
    return (
      <Box
        bg="subdued"
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
