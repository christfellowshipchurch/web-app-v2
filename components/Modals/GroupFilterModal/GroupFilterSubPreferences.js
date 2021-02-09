import React from 'react';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Checkbox, Loader } from 'ui-kit';

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
    modalDispatch(showStep(2));
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Box as="h2">Find your Community</Box>
      <Box as="p" color="subdued" mb="l">
        Select the types of community groups you’re interested in.
      </Box>
      <Box mb="l">
        {filtersState.options.subPreferences?.length === 0 && (
          <Loader mx="auto" />
        )}
        {filtersState.options.subPreferences.map(value => (
          <Checkbox
            key={value}
            id={value}
            label={value}
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

GroupFilterSubPreference.propTypes = {};

export default GroupFilterSubPreference;
