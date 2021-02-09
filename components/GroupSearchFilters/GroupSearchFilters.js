import PropTypes from 'prop-types';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupFilters, resetValues } from 'providers/GroupFiltersProvider';
import { Box, Button, Divider, Icon } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

import FilterButton from './FilterButton';

function GroupSearchFilters(props = {}) {
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();
  const { campuses, preferences, subPreferences, days } = filtersState.values;

  function handleChangeClick() {
    modalDispatch(showModal('GroupFilter', { step: 2 }));
  }

  function handleClearClick() {
    filtersDispatch(resetValues());
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      mb="l"
    >
      <Box display="flex">
        <Button
          onClick={handleChangeClick}
          display="flex"
          rounded={true}
          mr="s"
        >
          <Icon name="filter" size="14" mr={rem('8px')} />
          <Box as="span">Filter</Box>
        </Button>
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
        <Button
          variant="link"
          rounded={true}
          size="s"
          onClick={handleClearClick}
        >
          Clear
        </Button>
      </Box>
      <Box as="p" fontWeight="bold">{`${props.resultsCount} ${
        props.resultsCount === 1 ? 'group' : 'groups'
      }`}</Box>
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
