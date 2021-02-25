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
    filtersDispatch(update({ [name]: [value] }));
  };

  const handleClear = event => {
    event.preventDefault();

    const { name } = event.target;
    filtersDispatch(update({ [name]: [] }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Go to Search page
    router.push({
      pathname: `/community/search`,
      query: filtersState.valuesSerialized,
    });
    modalDispatch(hideModal());
  };

  function handleClearClick() {
    filtersDispatch(resetValues());
  }

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
          onChange={handleSelectChange}
          onClear={handleClear}
          defaultValue={filtersState.values.campuses[0] || ''}
        />
        <FilterField
          label="Group Types"
          name="preferences"
          options={preferences?.map(({ title }) => title)}
          values={filtersState.values.preferences}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Lineups"
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
        <Button variant="secondary" onClick={handleClearClick}>
          Clear All
        </Button>
        <Button type="submit">Apply</Button>
      </Box>
    </Box>
  );
}

GroupFilterAll.propTypes = {};

export default GroupFilterAll;
