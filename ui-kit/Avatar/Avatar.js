import React from 'react';
import PropTypes from 'prop-types';
import { UserCircle } from 'phosphor-react';
import { Box, systemPropTypes } from 'ui-kit';
import Styled from './Avatar.styles';
import { useTheme } from 'styled-components';

function Avatar(props = {}) {
  const theme = useTheme();
  if (!props.src) {
    return (
      <UserCircle
        color={theme.colors.fg}
        size={props.height}
      />
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
