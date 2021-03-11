import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';

import Styled from './LiveIndicator.styles';

function LiveIndicator(props = {}) {
  return <Styled {...props}>{props.text}</Styled>;
}

LiveIndicator.propTypes = {
  ...systemPropTypes,
  text: PropTypes.string,
};

LiveIndicator.defaultProps = {
  text: 'Live',
};

export default LiveIndicator;
