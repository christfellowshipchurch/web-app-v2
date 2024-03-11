import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormLabel, systemPropTypes } from 'ui-kit';
import Styled from './TextInput.styles';

function TextInput(props = {}) {
  return (
    <Styled {...props.containerProps}>
      {props.label ? (
        <FormLabel htmlFor={props.id} {...props.labelProps}>
          {props.label}
          {props.required ? (
            <Box as="span" color="alert" fontWeight="bold">
              *
            </Box>
          ) : null}
        </FormLabel>
      ) : null}
      <Styled.Input id={props.id} name={props.id} {...props} />
    </Styled>
  );
}

TextInput.propTypes = {
  ...systemPropTypes,
  /**
   * Props passed down to the container
   */
  containerProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  /**
   * Props passed down to the label
   */
  labelProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  /**
   * Id
   */
  id: PropTypes.string.isRequired,
  /**
   * Label
   */
  label: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
