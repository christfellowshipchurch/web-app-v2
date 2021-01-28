import React from 'react';
import PropTypes from 'prop-types';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Checkbox } from 'ui-kit';

function GroupFilterSubPreference(props = {}) {
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    filtersDispatch(toggleValue({ name, value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    modalDispatch(showStep(1));
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Box as="h2">Find your Crew</Box>
      <Box as="p" color="subdued" mb="l">
        Select the types of Crew groups you’re interested in.
      </Box>
      <Box mb="l">
        {filtersState.options.subPreferences.map(({ label, value }) => (
          <Checkbox
            key={value}
            id={value}
            label={label}
            value={value}
            name="subPreferences"
            onChange={handleChange}
            checked={filtersState.values.subPreferences.includes(value)}
          />
        ))}
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterSubPreference.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default GroupFilterSubPreference;
