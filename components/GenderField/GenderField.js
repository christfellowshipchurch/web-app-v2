import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormLabel, Radio } from 'ui-kit';

function GenderField(props = {}) {
  const initialValue = props.initialValue?.toLowerCase();

  return (
    <>
      <FormLabel>Gender</FormLabel>
      <Box display="flex" mt="base">
        <Box mr="s">
          <Radio
            label="Male"
            id="male"
            value="male"
            name="gender"
            onChange={props.onChange}
            checked={initialValue === 'male'}
          />
        </Box>
        <Box>
          <Radio
            label="Female"
            id="female"
            name="gender"
            value="female"
            onChange={props.onChange}
            checked={initialValue === 'female'}
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
