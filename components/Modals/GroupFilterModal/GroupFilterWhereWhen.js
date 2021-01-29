import React from 'react';
import { useRouter } from 'next/router';
import {
  useGroupFilters,
  update,
  toggleValue,
} from 'providers/GroupFiltersProvider';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Checkbox, Select } from 'ui-kit';

function GroupFilterWhereWhen(props = {}) {
  const router = useRouter();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  console.log('<GroupFilterWhereWhen> filtersState:', filtersState);

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    if (name === 'campuses') {
      // Campus selection is stored as a multi-select, but the input
      // is a single-select. Handle it's value specially.
      filtersDispatch(update({ [name]: value === '' ? [] : [value] }));
    } else {
      filtersDispatch(toggleValue({ name, value }));
    }
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
        <Box as="h2">Find your Crew</Box>
        <Box as="p" color="subdued" mb="l">
          Where and when?
        </Box>
      </Box>
      <Box mb="base">
        <Select
          id="campuses"
          name="campuses"
          onChange={handleChange}
          defaultValue={filtersState.values.campuses[0] || ''}
        >
          <Select.Option value="">Select...</Select.Option>
          {filtersState.options.campuses.map(({ label, value }) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Box>
      <Box mb="l">
        <Box as="p" color="subdued" mb="s">
          Preferred meeting days
        </Box>
        {filtersState.options.days.map(({ label, value }) => (
          <Checkbox
            key={value}
            id={value}
            label={label}
            value={value}
            name="days"
            onChange={handleChange}
            checked={filtersState.values.days.includes(value)}
          />
        ))}
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterWhereWhen.propTypes = {};

export default GroupFilterWhereWhen;
