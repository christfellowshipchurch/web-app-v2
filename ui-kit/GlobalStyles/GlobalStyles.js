import React from 'react';

import { systemPropTypes } from 'ui-kit';
import Styled, { styles } from './GlobalStyles.styles';

import 'stream-chat-react/dist/css/index.css';

function GlobalStyles(props = {}) {
  return <Styled {...props} />;
}

GlobalStyles.propTypes = {
  ...systemPropTypes,
};

export { GlobalStyles as default, styles };
