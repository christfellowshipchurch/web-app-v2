import PropTypes from 'prop-types';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupFilters, resetValues } from 'providers/GroupFiltersProvider';
import { Box, Button } from 'ui-kit';

import Styled from './GroupSearchFilters.styles';

function GroupSearchFilters(props = {}) {
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();
  const { campuses, preferences, subPreferences, days } = filtersState.values;
  console.log('filtersState:', filtersState);

  function handleChangeClick() {
    modalDispatch(showModal('GroupFilter', { step: 2 }));
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
            <Styled.FilterButton
              label="Campus"
              labelDetail={campuses[0]}
              onClick={handleChangeClick}
            />
          )}
          {preferences.length > 0 && (
            <Styled.FilterButton
              label="Group Types"
              labelDetail={preferences.length}
              onClick={handleChangeClick}
            />
          )}
          {subPreferences.length > 0 && (
            <Styled.FilterButton
              label="Lineups"
              labelDetail={subPreferences.length}
              onClick={handleChangeClick}
            />
          )}
          {days.length > 0 && (
            <Styled.FilterButton
              label="Meeting Days"
              labelDetail={days.length}
              onClick={handleChangeClick}
            />
          )}
        </Box>
        <Box as="p" fontWeight="bold">{`${props.resultsCount} groups`}</Box>
      </Box>

      <Styled.Divider />
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
