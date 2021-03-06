import React from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';

import { Box, Button, Select, systemPropTypes } from 'ui-kit';

export default function FilterField(props = {}) {
  if (!props.options || !props.options.length) return null;

  return (
    <Box mb={props.mb || 'l'} textAlign="left">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
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
      <Box {...props.optionsProps}>
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
            defaultValue={props.defaultValue}
          >
            <Select.Option
              value=""
              selected={props.values.length === 0 || props.values[0] === ''}
            >
              {props.placeholder}
            </Select.Option>
            {props.options.map(value => {
              const isDisabled = includes(props.disabledValues, value);
              return (
                <Select.Option
                  key={value}
                  value={value}
                  selected={props.values[0] === value}
                  disabled={isDisabled}
                >
                  {value}
                </Select.Option>
              );
            })}
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
  optionsProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  // Currently selected options
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledValues: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  // Will be given an object with a `name` and `value` prop
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

FilterField.defaultProps = {
  filterType: 'multi-select',
  placeholder: 'Select...',
  disabledValues: [],
};
