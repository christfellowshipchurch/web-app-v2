import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '../';
import Styled from './CardGrid.styles';

function CardGrid(props = {}) {
  return <Styled {...props} />;
}

CardGrid.propTypes = {
  ...systemPropTypes,
  columns: PropTypes.string,
};

CardGrid.defaultProps = {
  columns: '3',
};

export default CardGrid;
