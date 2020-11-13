import React from 'react';
import PropTypes from 'prop-types';

import { Box, Loader, systemPropTypes } from '../';
import Styled from './Button.styles';

function Button(props = {}) {
  if (props.loading) {
    return (
      <Styled {...props}>
        <Loader noLabel={true} />
        <Box as="span">{props.children}</Box>
      </Styled>
    );
  }

  return <Styled {...props} />;
}

Button.propTypes = {
  ...systemPropTypes,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'l']),
  variant: PropTypes.oneOf(['secondary']),
};

export default Button;
