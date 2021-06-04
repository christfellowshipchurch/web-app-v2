import PropTypes from 'prop-types';

import { useModal, showModal } from 'providers/ModalProvider';
import { useGroupFilters } from 'providers/GroupFiltersProvider';

import { Box, Button, Icon, utils } from 'ui-kit';

import FilterButton from './FilterButton';

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

  function handleChangeClick() {
    // Show all filters modal
    modalDispatch(showModal('GroupFilter', { step: 3 }));
  }

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
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
            display={{ _: 'block', md: 'none' }}
            mr="s"
          >
            Help?
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
                  label="Hubs"
                  labelDetail={preferences.length}
                  onClick={handleChangeClick}
                />
              )}
              {subPreferences.length > 0 && (
                <FilterButton
                  label="Types of Groups"
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
    </Box>
  );
}

GroupSearchFilters.propTypes = {
  loading: PropTypes.bool,
};

GroupSearchFilters.defaultProps = {
  loading: false,
};

export default GroupSearchFilters;
