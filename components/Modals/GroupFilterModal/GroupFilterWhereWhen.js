import React from 'react';
import { useRouter } from 'next/router';

import {
  useGroupFilters,
  update,
  toggleValue,
} from 'providers/GroupFiltersProvider';
import { showStep, hideModal, useModalDispatch } from 'providers/ModalProvider';

import { Box, Button, Select, Icon, FormLabel } from 'ui-kit';

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

  const handleGoBack = event => {
    event.preventDefault();
    if (filtersState.options.subPreferences.length !== 0) {
      modalDispatch(showStep(1));
    } else {
      modalDispatch(showStep(0));
    }
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
        <FormLabel color="subdued">What campus do you prefer?</FormLabel>
        <Select
          id="campuses"
          name="campuses"
          onChange={handleCampusChange}
          defaultValue={filtersState.values.campuses[0] || ''}
        >
          <Select.Option value="">Select a campus...</Select.Option>
          {filtersState.options.campuses.map(value => (
            <Select.Option key={value} value={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Box>
      <Box mb="base">
        <FormLabel color="subdued">How do you prefer to meet?</FormLabel>
        <Select
          id="meetingType"
          name="meetingType"
          onChange={handleCampusChange}
          defaultValue={filtersState.values.meetingType[0] || ''}
        >
          <Select.Option value="">
            Select how you'd like to meet...
          </Select.Option>
          {filtersState.options.meetingType.map(value => {
            return (
              <Select.Option
                key={value}
                disabled={
                  value === 'In Person' &&
                  filtersState.values.campuses[0] === 'Online'
                }
                value={value}
              >
                {value}
              </Select.Option>
            );
          })}
        </Select>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button variant="secondary" onClick={handleGoBack}>
          <Icon name="angleLeft" />
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </Box>
    </Box>
  );
}

GroupFilterWhereWhen.propTypes = {};

export default GroupFilterWhereWhen;
