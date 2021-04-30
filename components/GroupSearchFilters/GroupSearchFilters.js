import PropTypes from 'prop-types';
import has from 'lodash/has';

import { useModal, showModal } from 'providers/ModalProvider';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';

import { Box, Button, Checkbox, Divider, Icon, utils } from 'ui-kit';

import FilterButton from './FilterButton';
import Styled from './GroupSearchFilters.styles';

const CheckboxGroup = ({ title, options, selected, handleOnChange }) => {
  return (
    <Box my="s">
      <Box as="h5">{title}</Box>
      {options.map(o => (
        <Box display="flex">
          <Checkbox
            id={o}
            onChange={() => handleOnChange(o)}
            mr="s"
            checked={selected.includes(o)}
          />
          <Box as="p" fontSize="s">
            {o}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

function GroupSearchFilters(props = {}) {
  const [filtersState, filtersDispatch] = useGroupFilters();
  // const { preferences, subPreferences } = useGroupPreferences();
  const [modalState, modalDispatch] = useModal();

  const {
    campuses,
    preferences,
    subPreferences,
    days,
    meetingType,
  } = filtersState.values;
  const {
    campuses: campusOptions,
    preferences: preferenceOptions,
    subPreferences: subPreferenceOptions,
    days: dayOptions,
    meetingType: meetingTypeOptions,
  } = filtersState.options;

  const showResultsCount =
    props.visibleResults > 0 && props.totalResults > props.pageSize;

  const handleChange = (name, value) => {
    filtersDispatch(toggleValue({ name, value }));
  };

  return (
    <Box mb="l" height="100%" overflowY="scroll">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        mb="base"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          justifyContent="flex-start"
        >
          <Box>
            <Box as="h4">Filters</Box>
            <Divider mb="s" />
          </Box>

          {campusOptions.length > 0 && (
            <CheckboxGroup
              title="Campuses"
              options={campusOptions}
              selected={campuses}
              handleOnChange={s => handleChange('campuses', s)}
            />
          )}

          {dayOptions.length > 0 && (
            <CheckboxGroup
              title="Days"
              options={dayOptions}
              selected={days}
              handleOnChange={s => handleChange('days', s)}
            />
          )}

          {meetingTypeOptions.length > 0 && (
            <CheckboxGroup
              title="Meeting Type"
              options={meetingTypeOptions}
              selected={meetingType}
              handleOnChange={s => handleChange('meetingType', s)}
            />
          )}

          {preferenceOptions.length > 0 && (
            <CheckboxGroup
              title="Preferences"
              options={preferenceOptions}
              selected={preferences}
              handleOnChange={s => handleChange('preferences', s)}
            />
          )}

          {subPreferenceOptions.length > 0 && (
            <CheckboxGroup
              title="Sub Preferences"
              options={subPreferenceOptions}
              selected={subPreferences}
              handleOnChange={s => handleChange('subPreferences', s)}
            />
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
