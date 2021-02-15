import React from 'react';

import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Loader } from 'ui-kit';

function GroupFilterPreferences(props = {}) {
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();

  const handleChange = value => {
    filtersDispatch(toggleValue({ name: 'preferences', value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (filtersState.options.subPreferences.length !== 0) {
      modalDispatch(showStep(1));
    } else {
      modalDispatch(showStep(2));
    }
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
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        px={{ _: 'base', md: 'xl' }}
        mx="auto"
        mb="l"
      >
        {filtersState.options.preferences?.length === 0 && (
          <Loader mx="auto" my="l" />
        )}
        {filtersState.options.preferences.map(value => (
          <Button
            key={value}
            variant="secondary"
            status={
              filtersState.values.preferences.includes(value)
                ? 'SELECTED'
                : 'IDLE'
            }
            onClick={event => {
              event.preventDefault();
              handleChange(value);
            }}
            mb="s"
          >
            {value}
          </Button>
        ))}
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterPreferences.propTypes = {};

export default GroupFilterPreferences;
