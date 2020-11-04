import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from '../_lib/system';
import Styled from './Button.styles';

function Button(props = {}) {
  return <Styled {...props} />;
}

Button.propTypes = {
  ...propTypes,
  size: PropTypes.oneOf(['l']),
  variant: PropTypes.oneOf(['secondary']),
};

export default Button;
