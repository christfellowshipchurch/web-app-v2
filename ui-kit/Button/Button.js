import React from 'react';

import { propTypes } from '../_lib/system';
import Styled from './Button.styles';

function Button(props = {}) {
  return <Styled {...props} />;
}

Button.propTypes = {
  ...propTypes,
};

export default Button;
