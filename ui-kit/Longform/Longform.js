import React from 'react';

import { propTypes } from '../_lib/system';
import Styled from './Longform.styles';

function Longform(props = {}) {
  return <Styled {...props} />;
}

Longform.propTypes = {
  ...propTypes,
};

export default Longform;
