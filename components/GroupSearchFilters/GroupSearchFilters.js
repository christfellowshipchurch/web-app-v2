import PropTypes from 'prop-types';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupFilters, resetValues } from 'providers/GroupFiltersProvider';
import { Box, Button, Divider } from 'ui-kit';

import FilterButton from './FilterButton';

function GroupSearchFilters(props = {}) {
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();
  const { campuses, preferences, subPreferences, days } = filtersState.values;

  function handleChangeClick() {
    // Show all filters modal
    modalDispatch(showModal('GroupFilter', { step: 3 }));
  }

  function handleClearClick() {
    filtersDispatch(resetValues());
  }

  return (
    <Box>
      <Box mb="l">
        <Button onClick={handleChangeClick}>Change Filters</Button>
        <Button variant="secondary" ml="s" onClick={handleClearClick}>
          Clear
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mb="base"
      >
        <Box>
          {campuses.length > 0 && (
            <FilterButton
              label="Campus"
              labelDetail={campuses[0]}
              onClick={handleChangeClick}
            />
          )}
          {preferences.length > 0 && (
            <FilterButton
              label="Group Types"
              labelDetail={preferences.length}
              onClick={handleChangeClick}
            />
          )}
          {subPreferences.length > 0 && (
            <FilterButton
              label="Lineups"
              labelDetail={subPreferences.length}
              onClick={handleChangeClick}
            />
          )}
          {days.length > 0 && (
            <FilterButton
              label="Meeting Days"
              labelDetail={days.length}
              onClick={handleChangeClick}
            />
          )}
        </Box>
        <Box as="p" fontWeight="bold">{`${props.resultsCount} ${
          props.resultsCount === 1 ? 'group' : 'groups'
        }`}</Box>
      </Box>

      <Divider mt="s" mb="l" />
    </Box>
  );
}

GroupSearchFilters.propTypes = {
  loading: PropTypes.bool,
  resultsCount: PropTypes.number,
};

GroupSearchFilters.defaultProps = {
  loading: false,
  resultsCount: 0,
};

export default GroupSearchFilters;
