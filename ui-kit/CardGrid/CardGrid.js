import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from '../_lib/system';
import Styled from './CardGrid.styles';

function CardGrid(props = {}) {
  return <Styled {...props} />;
}

CardGrid.propTypes = {
  ...propTypes,
  columns: PropTypes.string,
};

CardGrid.defaultProps = {
  columns: '3',
};

export default CardGrid;
