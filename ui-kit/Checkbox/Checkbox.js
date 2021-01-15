import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import Styled from './Checkbox.styles';

function Checkbox(props = {}) {
  return (
    <Styled {...props.containerProps}>
      <Styled.Input id={props.id} name={props.id} {...props} />
      <Styled.Label htmlFor={props.id} {...props.labelProps}>
        {props.label}
      </Styled.Label>
    </Styled>
  );
}

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  type: 'checkbox',
};

export default Checkbox;
