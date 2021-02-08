import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
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
      <Box overflow="scroll" maxHeight="40vh" mb="base">
        <FilterField
          filterType="select"
          label="Campus"
          name="campuses"
          options={filtersState.options.campuses}
          values={filtersState.values.campuses}
          onChange={handleMultiSelectChange}
        />
        <FilterField
          label="Group Types (Preferences)"
          name="preferences"
          options={filtersState.options.preferences}
          values={filtersState.values.preferences}
          onChange={handleMultiSelectChange}
        />
        <FilterField
          label="Lineups (Sub-Preferences)"
          name="subPreferences"
          options={filtersState.options.subPreferences}
          values={filtersState.values.subPreferences}
          onChange={handleMultiSelectChange}
        />
        <FilterField
          label="Meeting Days"
          name="days"
          options={filtersState.options.days}
          values={filtersState.values.days}
          onChange={handleMultiSelectChange}
          mb="none"
        />
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterAll.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default GroupFilterAll;
