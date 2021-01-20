import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled from './Heading.styles';

function Heading(props = {}) {
  return <Styled {...props} />;
}

Heading.propTypes = {
  ...systemPropTypes,
};

export default Heading;
