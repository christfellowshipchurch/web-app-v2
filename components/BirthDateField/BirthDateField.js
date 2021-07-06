import React from 'react';
import PropTypes from 'prop-types';

import { Box, TextInput } from 'ui-kit';

function BirthDateField(props = {}) {
  return (
    <>
      <TextInput
        id="birthDate"
        label="Birth Date"
        type="date"
        fontSize="s"
        {...props}
      />
      {props.error ? (
        <Box as="p" color="alert" fontSize="s" mt="s">
          {props.error}
        </Box>
      ) : null}
    </>
  );
}

BirthDateField.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

BirthDateField.defaultProps = {
  required: true,
};

export default BirthDateField;
