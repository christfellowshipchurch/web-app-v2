import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Select } from 'ui-kit';

export default function FilterField(props = {}) {
  return (
    <Box mb="l" textAlign="left" {...props}>
      <Box as="h4" mb="base">
        {props.label}
      </Box>
      <Box>
        {props.filterType === 'multi-select' ? (
          props.options.map(value => (
            <Button
              key={value}
              label={value}
              mr="xs"
              mb="s"
              onClick={() => props.onChange({ name: props.name, value })}
              rounded={true}
              size="s"
              status={props.values.includes(value) ? 'SELECTED' : 'IDLE'}
              variant="chip"
            >
              {value}
            </Button>
          ))
        ) : (
          <Select
            id={props.name}
            name={props.name}
            onChange={props.onChange}
            defaultValue={props.values[0] || ''}
          >
            <Select.Option value="">Select...</Select.Option>
            {props.options.map(value => (
              <Select.Option key={value} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        )}
      </Box>
    </Box>
  );
}

FilterField.propTypes = {
  filterType: PropTypes.oneOf(['select', 'multi-select']),
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  // Possible Options
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Currently selected options
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Will be given an object with a `name` and `value` prop
  onChange: PropTypes.func.isRequired,
};

FilterField.defaultProps = {
  filterType: 'multi-select',
};
