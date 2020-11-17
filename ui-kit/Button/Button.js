import React from 'react';
import PropTypes from 'prop-types';

import { Box, Loader, systemPropTypes } from '../';
import Styled from './Button.styles';

function Button(props = {}) {
  if (props.status === 'LOADING') {
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
  size: PropTypes.oneOf(['s', 'l']),
  status: PropTypes.oneOf(['IDLE', 'LOADING', 'ERROR', 'SUCCESS']),
  variant: PropTypes.oneOf(['secondary']),
};

export default Button;
