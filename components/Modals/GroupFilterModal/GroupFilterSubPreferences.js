import React from 'react';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Loader } from 'ui-kit';

function GroupFilterSubPreferences(props = {}) {
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();

  const handleChange = value => {
    filtersDispatch(toggleValue({ name: 'subPreferences', value }));
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
        Select the activities you're interested in doing with a group.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        px={{ _: 'base', md: 'xl' }}
        mx="auto"
        mb="l"
      >
        {filtersState.options.subPreferences?.length === 0 && (
          <Loader mx="auto" my="l" />
        )}
        {filtersState.options.subPreferences.map(value => (
          <Button
            key={value}
            variant="secondary"
            size="s"
            status={
              filtersState.values.subPreferences.includes(value)
                ? 'SELECTED'
                : 'IDLE'
            }
            onClick={event => {
              event.preventDefault();
              handleChange(value);
            }}
            mb="xs"
          >
            {value}
          </Button>
        ))}
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterSubPreferences.propTypes = {};

export default GroupFilterSubPreferences;
