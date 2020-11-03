import React from 'react';

import { propTypes } from '../_lib/system';
import Styled from './GlobalStyles.styles';

function GlobalStyles(props = {}) {
  return <Styled {...props} />;
}

GlobalStyles.propTypes = {
  ...propTypes,
};

export default GlobalStyles;
