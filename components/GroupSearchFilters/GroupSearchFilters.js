import PropTypes from 'prop-types';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupFilters, update } from 'providers/GroupFiltersProvider';
import { useAuth } from 'providers/AuthProvider';

import { useCurrentUser } from 'hooks';

import { Box, Button, Icon, utils } from 'ui-kit';

import FilterButton from './FilterButton';

function GroupSearchFilters(props = {}) {
  const [{ authenticated }] = useAuth();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();
  const { currentUser } = useCurrentUser();
  const { campuses, preferences, subPreferences, days } = filtersState.values;

  function handleChangeClick() {
    // Show all filters modal

    if (authenticated && campuses[0] === undefined) {
      filtersDispatch(
        update({ campuses: [currentUser?.profile?.campus?.name] })
      );
    }
    modalDispatch(showModal('GroupFilter', { step: 3 }));
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      mb="l"
    >
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent={{ _: 'space-between', md: 'flex-start' }}
      >
        <Button
          onClick={handleChangeClick}
          display="flex"
          rounded={true}
          mr="s"
        >
          <Icon name="filter" size="14" mr={utils.rem('8px')} />
          <Box as="span">Filter</Box>
        </Button>
        <Button
          as="a"
          rounded={true}
          variant="secondary"
          href="https://rock.gocf.org/page/2113"
          display={{ _: 'inline', md: 'none' }}
        >
          Need help?
        </Button>
        <Box display={{ _: 'none', md: 'block' }}>
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
      </Box>
      {!props.loading && props.visibleResults > 0 && (
        <Box as="h4">
          Showing {props.visibleResults} of {props.totalResults} results
        </Box>
      )}
    </Box>
  );
}

GroupSearchFilters.propTypes = {
  loading: PropTypes.bool,
  visibleResults: PropTypes.number,
  totalResults: PropTypes.number,
};

GroupSearchFilters.defaultProps = {
  loading: false,
};

export default GroupSearchFilters;
