import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormLabel, Select } from '../../ui-kit';

function UserProfileCampusSelect(props = {}) {
  return (
    <Box mb="base">
      <FormLabel>My Campus</FormLabel>
      <Select
        id="campus"
        name="campus"
        defaultValue={props.selectedCampusId}
        onChange={props.onChange}
      >
        <Select.Option value="">Select...</Select.Option>
        {props.data.map(item => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    </Box>
  );
}

UserProfileCampusSelect.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  selectedCampusId: PropTypes.string,
};

export default UserProfileCampusSelect;
