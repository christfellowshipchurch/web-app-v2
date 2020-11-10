import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '../';
import Styled from './TextInput.styles';

function TextInput(props = {}) {
  return (
    <Styled {...props.containerProps}>
      <Styled.Label htmlFor={props.id} {...props.labelProps}>
        {props.label}
      </Styled.Label>
      <Styled.Input id={props.id} name={props.id} {...props} />
    </Styled>
  );
}

TextInput.propTypes = {
  ...systemPropTypes,
  containerProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  labelProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
