import React from 'react';

import { rem } from 'ui-kit/_utils';
import { systemPropTypes } from 'ui-kit';
import Styled from './Cell.styles';

const DEFAULT_MAX_WIDTH = rem('1100px');

function Cell(props = {}) {
  return <Styled {...props} />;
}

Cell.propTypes = {
  ...systemPropTypes,
};

Cell.defaultProps = {
  maxWidth: DEFAULT_MAX_WIDTH,
};

export default Cell;
