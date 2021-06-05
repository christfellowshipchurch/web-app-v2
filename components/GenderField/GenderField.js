import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormLabel, Radio } from 'ui-kit';

function GenderField(props = {}) {
  const initialValue = props.initialValue;

  return (
    <>
      <FormLabel>Gender</FormLabel>
      <Box display="flex" mt="base">
        <Box mr="s">
          <Radio
            label="Male"
            id="Male"
            value="Male"
            name="gender"
            onChange={props.onChange}
            checked={initialValue === 'Male'}
          />
        </Box>
        <Box>
          <Radio
            label="Female"
            id="Female"
            name="gender"
            value="Female"
            onChange={props.onChange}
            checked={initialValue === 'Female'}
          />
        </Box>
      </Box>
    </>
  );
}

GenderField.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default GenderField;
