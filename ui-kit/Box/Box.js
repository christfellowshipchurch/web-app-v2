import React, { forwardRef } from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './Box.styles';

const Box = forwardRef((props = {}, ref) => {
  return <Styled {...props} ref={ref} />;
});

Box.propTypes = {
  ...systemPropTypes,
};

export default Box;
