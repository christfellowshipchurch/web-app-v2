import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, systemPropTypes } from 'ui-kit';
import Styled from './SquareAvatar.styles';

function SquareAvatar(props = {}) {
  const [error, setError] = useState(!props.src);

  const handleError = event => {
    setError(true);
  };

  if (error) {
    return (
      <Box
        {...props}
        bg="neutrals.300"
        borderRadius="15%"
        display="flex"
        alignItems="center"
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
        alt={`SquareAvatar of ${props.name}`}
        onError={handleError}
        {...props}
      />
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
