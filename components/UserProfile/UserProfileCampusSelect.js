import React from 'react';
import PropTypes from 'prop-types';

import { Box, FormLabel } from '../../ui-kit';

function UserProfileCampusSelect(props = {}) {
  return (
    <Box mb="base">
      <FormLabel>My Campus</FormLabel>
      <Box
        as="select"
        id="campus"
        name="campus"
        defaultValue={props.selectedCampusId}
        onChange={props.onChange}
      >
        <Box as="option" value="">
          Select...
        </Box>
        {props.data.map(item => (
          <Box key={item.id} as="option" value={item.id}>
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

UserProfileCampusSelect.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  selectedCampusId: PropTypes.string,
};

export default UserProfileCampusSelect;
