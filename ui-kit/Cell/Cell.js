import React from 'react';

import { rem } from '../_utils';
import { propTypes } from '../_lib/system';
import Styled from './Cell.styles';

const DEFAULT_MAX_WIDTH = rem('1100px');

function Cell(props = {}) {
  return <Styled {...props} />;
}

Cell.propTypes = {
  ...propTypes,
};

Cell.defaultProps = {
  maxWidth: DEFAULT_MAX_WIDTH,
};

export default Cell;
