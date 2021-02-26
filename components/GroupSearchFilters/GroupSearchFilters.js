import PropTypes from 'prop-types';

import { useModal, showModal } from 'providers/ModalProvider';
import { useGroupFilters } from 'providers/GroupFiltersProvider';

import { Box, Button, Icon, utils } from 'ui-kit';

import FilterButton from './FilterButton';
import Styled from './GroupSearchFilters.styles';

function GroupSearchFilters(props = {}) {
  const [filtersState] = useGroupFilters();
  const [modalState, modalDispatch] = useModal();

  const {
    campuses,
    preferences,
    subPreferences,
    days,
    meetingType,
  } = filtersState.values;
  const showResultsCount =
    props.visibleResults > 0 && props.totalResults > props.pageSize;

  function handleChangeClick() {
    // Show all filters modal
    modalDispatch(showModal('GroupFilter', { step: 3 }));
  }

  return (
    <Box mb="l">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mb="base"
      >
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent={{ _: 'space-between', md: 'flex-start' }}
        >
          <Box>
            <Button
              onClick={handleChangeClick}
              display="flex"
              rounded={true}
              mr="s"
            >
              <Icon name="filter" size="14" mr={utils.rem('8px')} />
              <Box as="span">Filter</Box>
            </Button>
          </Box>
          <Button
            as="a"
            rounded={true}
            variant="secondary"
            href="https://rock.gocf.org/page/2113"
            display={{ _: 'inline', md: 'none' }}
          >
            Need help?
          </Button>
          {!modalState.activeModal.component && (
            <Box display={{ _: 'none', md: 'block' }}>
              {campuses.length > 0 && (
                <FilterButton
                  label="Campus"
                  labelDetail={campuses[0]}
                  onClick={handleChangeClick}
                />
              )}
              {meetingType.length > 0 && (
                <FilterButton
                  label="Meeting Type"
                  labelDetail={meetingType.length}
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
                  label="Days"
                  labelDetail={days.length}
                  onClick={handleChangeClick}
                />
              )}
            </Box>
          )}
        </Box>
      </Box>

      <Styled.ResultsCount visible={showResultsCount}>
        Showing {props.visibleResults} of {props.totalResults} results
      </Styled.ResultsCount>
    </Box>
  );
}

GroupSearchFilters.propTypes = {
  loading: PropTypes.bool,
  // How many results are currently visible/fetched
  visibleResults: PropTypes.number,
  // How many results there are in total (number of search hits)
  totalResults: PropTypes.number,
  // How many results are displayed per "page"
  pageSize: PropTypes.number,
};

GroupSearchFilters.defaultProps = {
  loading: false,
  visibleResults: 0,
  totalResults: 0,
  pageSize: 0,
};

export default GroupSearchFilters;
