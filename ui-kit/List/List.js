import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import Styled from './List.styles';

function List(props = {}) {
  return <Styled {...props} />;
}

List.propTypes = {
  ...systemPropTypes,
  space: PropTypes.string,
};

List.defaultProps = {
  space: 's',
};

export default List;
