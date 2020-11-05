import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '../';
import Styled from './Button.styles';

function Button(props = {}) {
  return <Styled {...props} />;
}

Button.propTypes = {
  ...systemPropTypes,
  size: PropTypes.oneOf(['l']),
  variant: PropTypes.oneOf(['secondary']),
};

export default Button;
