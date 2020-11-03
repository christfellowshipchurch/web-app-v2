import React from 'react';

import { propTypes } from '../_lib/system';
import Styled from './Box.styles';

function Box(props = {}) {
  return <Styled {...props} />;
}

Box.propTypes = {
  ...propTypes,
};

export default Box;
