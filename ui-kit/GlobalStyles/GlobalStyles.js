import React from 'react';

import { propTypes } from '../_lib/system';
import Styled, { styles } from './GlobalStyles.styles';

function GlobalStyles(props = {}) {
  return <Styled {...props} />;
}

GlobalStyles.propTypes = {
  ...propTypes,
};

export { GlobalStyles as default, styles };
