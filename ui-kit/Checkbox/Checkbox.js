import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import Styled from './Checkbox.styles';
// import { useCustomValidity } from 'device-agnostic-ui';

function Checkbox(props = {}) {
  /**
   * todo : Need to find better solution updating Custom Validity text for checkboxes.
   */
  // const ref = useRef();
  // useCustomValidity(ref, props.validationMessage);

  return (
    <Styled {...props.containerProps}>
      <Styled.Input id={props.id} name={props.id} {...props} />
      {props.label && (
        <Styled.Label htmlFor={props.id} {...props.labelProps}>
          {props.label}
        </Styled.Label>
      )}
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
  label: PropTypes.string,
  size: PropTypes.number,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  validationMessage: 'Select this checkbox to continue',
  size: 15,
};

export default Checkbox;
