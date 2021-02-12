import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Select } from 'ui-kit';

export default function FilterField(props = {}) {
  if (!props.options) return null;

  return (
    <Box mb={props.mb || 'xl'} textAlign="left">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mb="base"
      >
        <Box as="h4" mb="0">
          {props.label}
        </Box>
        {props.values.length > 0 && (
          <Button
            name={props.name}
            variant="link"
            size="s"
            lineHeight={1.2}
            onClick={props.onClear}
          >
            Clear
          </Button>
        )}
      </Box>
      <Box>
        {props.filterType === 'multi-select' ? (
          props.options.map(value => (
            <Button
              key={value}
              mb="s"
              mr="xs"
              onClick={event => {
                event.preventDefault();
                props.onChange({ name: props.name, value });
              }}
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
            onChange={event => {
              event.persist();
              const { value } = event.target;
              props.onChange({ name: props.name, value });
            }}
          >
            <Select.Option
              value=""
              selected={props.values.length === 0 || props.values[0] === ''}
            >
              Select...
            </Select.Option>
            {props.options.map(value => (
              <Select.Option
                key={value}
                value={value}
                selected={props.values[0] === value}
              >
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
  onClear: PropTypes.func.isRequired,
};

FilterField.defaultProps = {
  filterType: 'multi-select',
};
