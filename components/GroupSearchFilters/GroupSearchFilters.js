import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useGroupFilters, resetValues } from 'providers/GroupFiltersProvider';
import { Box, Button } from 'ui-kit';

function CurrentFiltersList(props = {}) {
  return (
    <Box fontSize="s">
      {Object.entries(props.filters).map(([key, values]) => {
        if (isEmpty(values)) {
          return null;
        }

        let label;
        switch (key) {
          case 'campusNames':
            label = 'Campuses';
            break;
          case 'preferences':
            label = 'Group Type';
            break;
          case 'subPreferences':
            label = 'Lineups';
            break;
          default:
            return null;
        }

        return (
          <Box key={key} mb="base">
            <Box as="span" fontWeight="bold">
              {`${label}: `}
            </Box>
            {values.map(value => (
              <Box
                as="span"
                bg="neutrals.200"
                borderColor="neutrals.300"
                borderStyle="solid"
                borderWidth={1}
                borderRadius="s"
                display="inline-block"
                ml="xs"
                px="base"
              >
                {value}
              </Box>
            ))}
          </Box>
        );
      })}
    </Box>
  );
}

function GroupSearchFilters(props = {}) {
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  function handleChangeClick() {
    modalDispatch(showModal('GroupFilter'));
  }

  function handleClearClick() {
    filtersDispatch(resetValues());
  }

  console.log(
    'Object.entries(filtersState.queryParams):',
    Object.entries(filtersState.queryParams)
  );

  return (
    <Box mb="l">
      <Box as="p" mb="l">
        {props.loading && 'Finding groups…'}
        {!props.loading &&
          (props.resultsCount >= 1
            ? `Found ${props.resultsCount} groups that meet your search criteria.`
            : 'Could not find any groups that meet your search criteria.')}
      </Box>
      <Box mb="base">
        <Button onClick={handleChangeClick}>Change Filters</Button>
        <Button variant="secondary" ml="s" onClick={handleClearClick}>
          Reset
        </Button>
      </Box>
      <CurrentFiltersList filters={filtersState.queryParams} />
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
