import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './Text.styles';

function Text(props = {}) {
  return <Styled {...props} />;
}

Text.propTypes = {
  ...systemPropTypes,
};

export default Text;
