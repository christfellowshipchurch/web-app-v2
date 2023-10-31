import React from 'react';
import PropTypes from 'prop-types';

import { Box, TextInput } from 'ui-kit';

function BirthDateField(props = {}) {
  return (
    <>
      <TextInput id="birthDate" label="Birth Date" type="date" {...props} />
      {props.error ? (
        <Box as="p" color="alert" fontSize="s" mt="s">
          {props.error}
        </Box>
      ) : null}
    </>
  );
}

BirthDateField.propTypes = {
  /**
   * Error message to display
   */
  error: PropTypes.string,
  /**
   * Function to call when the value changes
   */
  onChange: PropTypes.func,
  /**
   * Is this field required
   */
  required: PropTypes.bool,
};

BirthDateField.defaultProps = {
  required: true,
};

export default BirthDateField;
