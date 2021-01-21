import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './Divider.styles';

function Divider(props = {}) {
  return <Styled {...props} />;
}

Divider.propTypes = {
  ...systemPropTypes,
};

export default Divider;
