import React from 'react';
import PropTypes from 'prop-types';

import { propTypes } from '../_lib/system';
import Styled from './List.styles';

function List(props = {}) {
  return <Styled {...props} />;
}

List.propTypes = {
  ...propTypes,
  space: PropTypes.string,
};

List.defaultProps = {
  space: 's',
};

export default List;
