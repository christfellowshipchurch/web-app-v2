import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './Image.styles';

function Image(props = {}) {
  return <Styled {...props} />;
}

Image.propTypes = {
  ...systemPropTypes,
};

export default Image;
