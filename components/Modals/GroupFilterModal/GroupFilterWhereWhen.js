import React from 'react';
import { useRouter } from 'next/router';

import {
  useGroupFilters,
  update,
  toggleValue,
} from 'providers/GroupFiltersProvider';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';

import { Box, Button, Select } from 'ui-kit';

function GroupFilterWhereWhen(props = {}) {
  const router = useRouter();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  const handleCampusChange = event => {
    const { name, value } = event.target;

    // Campus selection is stored as a multi-select, but the input
    // is a single-select. Handle it's value specially.
    filtersDispatch(update({ [name]: value === '' ? [] : [value] }));
  };

  const handleDayChange = value => {
    filtersDispatch(toggleValue({ name: 'days', value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    router.push({
      pathname: `/community/search`,
      query: filtersState.valuesSerialized,
    });
    modalDispatch(hideModal());
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
    >
      <Box textAlign="center">
        <Box as="h2">Find your Community</Box>
      </Box>
      <Box mb="base">
        <Box as="p" color="subdued" mb="base" textAlign="center">
          What campus do you prefer?
        </Box>
        <Select
          id="campuses"
          name="campuses"
          onChange={handleCampusChange}
          defaultValue={filtersState.values.campuses[0] || ''}
        >
          <Select.Option value="">Select your campus...</Select.Option>
          {filtersState.options.campuses.map(value => (
            <Select.Option key={value} value={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Box>
      <Box mb="l">
        <Box as="p" color="subdued" mb="base" textAlign="center">
          What days can you meet?
        </Box>
        <Box
          display="grid"
          width="100%"
          gridTemplateColumns="repeat(7, 1fr)"
          gridColumnGap="xs"
        >
          {filtersState.options.days.map(value => (
            <Button
              key={value}
              variant="secondary"
              status={
                filtersState.values.days.includes(value) ? 'SELECTED' : 'IDLE'
              }
              onClick={event => {
                event.preventDefault();
                handleDayChange(value);
              }}
              mb="xs"
              px="0"
            >
              {value[0]}
              {/* Gross, but quick way to abbreviate for mobile... */}
              <Box as="span" display={{ _: 'none', md: 'inline' }}>
                {value.slice(1)}
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterWhereWhen.propTypes = {};

export default GroupFilterWhereWhen;
