import React from 'react';

import { systemPropTypes } from '../';
import Styled, { styles } from './GlobalStyles.styles';

function GlobalStyles(props = {}) {
  return <Styled {...props} />;
}

GlobalStyles.propTypes = {
  ...systemPropTypes,
};

export { GlobalStyles as default, styles };
