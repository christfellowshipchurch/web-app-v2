import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '../';
import Styled from './Loader.styles';

function Loader(props = {}) {
  return (
    <Styled {...props}>
      <Styled.Text>
        {props.text}
        <Styled.Dot>.</Styled.Dot>
        <Styled.Dot>.</Styled.Dot>
        <Styled.Dot>.</Styled.Dot>
      </Styled.Text>
    </Styled>
  );
}

Loader.propTypes = {
  ...systemPropTypes,
  text: PropTypes.string,
};

Loader.defaultProps = {
  text: 'Loading',
};

export default Loader;
