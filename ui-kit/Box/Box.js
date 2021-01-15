import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './Box.styles';

function Box(props = {}) {
  return <Styled {...props} />;
}

Box.propTypes = {
  ...systemPropTypes,
};

export default Box;
