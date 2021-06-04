import React from 'react';
import { useRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';
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

function Sidebar(props = {}) {
  const router = useRouter();
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const { preferences, subPreferences } = useGroupPreferences();

  const handleMultiSelectChange = ({ name, value }) => {
    filtersDispatch(toggleValue({ name, value }));
  };
  const handleSelectChange = ({ name, value }) => {
    filtersDispatch(update({ [name]: [value] }));
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

  // Disables the 'In Person' meeting type if you have 'Online' selected as your campus
  const disableInPerson =
    filtersState.values.campuses[0] === 'Online' ? ['In Person'] : null;

  const noFiltersSelected = Object.values(filtersState.values).every(item =>
    isEmpty(item)
  );

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Box>
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
          label="Meeting Type"
          name="meetingType"
          options={filtersState.options.meetingType}
          values={filtersState.values.meetingType}
          disabledValues={disableInPerson}
          placeholder="Select a meeting type..."
          onChange={handleSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Hubs"
          name="preferences"
          options={preferences?.map(({ title }) => title)}
          values={filtersState.values.preferences}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
          optionsProps={{ display: 'flex', flexDirection: 'column' }}
        />
        <FilterField
          label="Type of Group"
          name="subPreferences"
          options={subPreferences?.map(({ title }) => title)}
          values={filtersState.values.subPreferences}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
          optionsProps={{ display: 'flex', flexDirection: 'column' }}
        />
        <FilterField
          label="Meeting Days"
          name="days"
          options={filtersState.options.days}
          values={filtersState.values.days}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
          mb="base"
          optionsProps={{ display: 'flex', flexDirection: 'column' }}
        />
      </Box>
      {!noFiltersSelected && (
        <Button variant="secondary" onClick={handleClearAllClick}>
          Clear All
        </Button>
      )}
    </Box>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
