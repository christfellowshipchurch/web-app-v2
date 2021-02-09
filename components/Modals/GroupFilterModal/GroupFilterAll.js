import React from 'react';
import { useRouter } from 'next/router';

import {
  useGroupFilters,
  toggleValue,
  update,
} from 'providers/GroupFiltersProvider';
import { useModalDispatch, hideModal } from 'providers/ModalProvider';
import { Box, Button } from 'ui-kit';

import { FilterField } from 'components';

function GroupFilterAll(props = {}) {
  const router = useRouter();
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();

  const handleMultiSelectChange = ({ name, value }) => {
    filtersDispatch(toggleValue({ name, value }));
  };

  const handleClear = event => {
    event.preventDefault();

    const { name } = event.target;
    console.log('🚦 name:', name);
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
          onChange={handleMultiSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Group Types"
          name="preferences"
          options={filtersState.options.preferences}
          values={filtersState.values.preferences}
          onChange={handleMultiSelectChange}
          onClear={handleClear}
        />
        <FilterField
          label="Lineups"
          name="subPreferences"
          options={filtersState.options.subPreferences}
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
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterAll.propTypes = {};

export default GroupFilterAll;
