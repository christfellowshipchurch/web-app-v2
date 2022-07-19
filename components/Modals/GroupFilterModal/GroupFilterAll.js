import React from 'react';
import { useRouter } from 'next/router';

import {
  useGroupFilters,
  toggleValue,
  update,
  resetValues,
} from 'providers/GroupFiltersProvider';
import { useModalDispatch, hideModal } from 'providers/ModalProvider';
import { useGroupPreferences } from 'hooks';
import { FilterField } from 'components';
import { Box, Button } from 'ui-kit';

function GroupFilterAll(props = {}) {
  const router = useRouter();
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const { preferences, subPreferences } = useGroupPreferences();

  const handleMultiSelectChange = ({ name, value }) => {
    filtersDispatch(toggleValue({ name, value }));
  };
  const handleSelectChange = ({ name, value }) => {
    //initial array with selected campus
    let newValues = [value];
    //add CFE RP to array if CF Gardens is the selected campus
    if (name === 'campuses' && value === 'en Español Palm Beach Gardens') {
      newValues.push('en Español Royal Palm Beach');
    }
    //add CFE Gardens to array if CFE RP is the selected campus
    if (name === 'campuses' && value === 'en Español Royal Palm Beach') {
      newValues.push('en Español Palm Beach Gardens');
    }
    //add Online to array if any campus other than Online is selected
    if (name === 'campuses' && value !== 'Online') {
      newValues.push('Online');
    }
    //return final array with all updated values
    return filtersDispatch(update({ [name]: newValues }));
  };

  const handleClear = event => {
    event.preventDefault();

    const { name } = event.target;
    filtersDispatch(update({ [name]: [] }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Update search page URL
    router.push({
      pathname: `/groups/search`,
      query: filtersState.valuesSerialized,
    });
    modalDispatch(hideModal());
  };

  function handleClearAllClick(event) {
    event.preventDefault();
    filtersDispatch(resetValues());
  }

  const disableInPerson =
    filtersState.values.campuses[0] === 'Online' ? ['In Person'] : null;

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Box as="h2" mb="l">
        Find your Community
      </Box>
      <Box overflow="scroll" maxHeight="50vh" mb="base">
        <FilterField
          filterType="select"
          label="Campus"
          name="campuses"
          options={filtersState.options.campuses}
          values={filtersState.values.campuses}
          defaultValue={filtersState.values.campuses[0] || ''}
          placeholder="Select a campus..."
          onChange={handleSelectChange}
          onClear={handleClear}
        />
        <FilterField
          filterType="select"
          label="How do you prefer to meet?"
          name="meetingType"
          options={filtersState.options.meetingType}
          values={filtersState.values.meetingType}
          disabledValues={disableInPerson}
          placeholder="Select In Person or Virtual"
          onChange={handleMultiSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Category"
          name="preferences"
          options={preferences?.map(({ title }) => title)}
          values={filtersState.values.preferences}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Type of Group"
          name="subPreferences"
          options={subPreferences?.map(({ title }) => title)}
          values={filtersState.values.subPreferences}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Meeting Days"
          name="days"
          options={filtersState.options.days}
          values={filtersState.values.days}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
          mb="base"
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="secondary" onClick={handleClearAllClick}>
          Clear All
        </Button>
        <Button type="submit">Done</Button>
      </Box>
    </Box>
  );
}

GroupFilterAll.propTypes = {};

export default GroupFilterAll;
