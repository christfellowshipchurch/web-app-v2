import React, { Component } from 'react';
import PropTypes from 'prop-types';
import replace from 'lodash/replace';

import Styled from './Image.styles';
import { systemPropTypes } from 'ui-kit';

const Image = (props = {}) => {
  return (
    <Styled
      {...props}
      src={props.source}
      aspectRatio={replace(props.aspectRatio, 'by', '/')}
    />
  );
};

export default Image;

const RATIOS = ['1by1', '4by3', '16by9', '21by9', '3by4'];

Image.propTypes = {
  ...systemPropTypes,
  aspectRatio: PropTypes.oneOf(RATIOS),
  source: PropTypes.string,
};

Image.defaultProps = {
  aspectRatio: '1by1',
};
