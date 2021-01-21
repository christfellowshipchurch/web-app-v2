import React from 'react';
import PropTypes from 'prop-types';
import { useSearchGroups } from 'hooks';
import {
  useGroupFilters,
  update,
  toggleValue,
} from 'providers/GroupFiltersProvider';
import { Box, Button, Checkbox, Select } from 'ui-kit';

function GroupFilterPreferences(props = {}) {
  const [filtersState, filtersDispatch] = useGroupFilters();
  const [searchGroups] = useSearchGroups({
    fetchPolicy: 'network-only',
    onCompleted: data => {
      console.log('✅ data:', data);
    },
  });

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    if (name === 'campuses') {
      // Campus selection is stored as a multi-select, but the input
      // is a single-select. Handle it's value specially.
      filtersDispatch(update({ [name]: [value] }));
    } else {
      filtersDispatch(toggleValue({ name, value }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(
      '🔍%c Searching groups...',
      'color: #00aeff; font-weight: bold;'
    );

    searchGroups({
      variables: {
        query: 'test',
      },
    });
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
    >
      <Box textAlign="center">
        <Box as="h2">Find your Crew</Box>
        <Box as="p" color="subdued" mb="l">
          Where and when?
        </Box>
      </Box>
      <Box mb="base">
        <Select
          id="campuses"
          name="campuses"
          onChange={handleChange}
          defaultValue={filtersState.campuses[0] || ''}
        >
          <Select.Option value="">Select...</Select.Option>
          <Select.Option value="WPB">West Palm Beach</Select.Option>
          <Select.Option value="ORL">Orlando</Select.Option>
          <Select.Option value="DAY">Daytona</Select.Option>
        </Select>
      </Box>
      <Box mb="l">
        <Box as="p" color="subdued" mb="s">
          Preferred meeting days
        </Box>
        <Checkbox
          label="Mon"
          id="mon"
          name="days"
          value="mon"
          onChange={handleChange}
          checked={filtersState.days.includes('mon')}
        />
        <Checkbox
          label="Tue"
          id="tue"
          name="days"
          value="tue"
          onChange={handleChange}
          checked={filtersState.days.includes('tue')}
        />
        <Checkbox
          label="Wed"
          id="wed"
          name="days"
          value="wed"
          onChange={handleChange}
          checked={filtersState.days.includes('wed')}
        />
        <Checkbox
          label="Thu"
          id="thu"
          name="days"
          value="thu"
          onChange={handleChange}
          checked={filtersState.days.includes('thu')}
        />
        <Checkbox
          label="Fri"
          id="fri"
          name="days"
          value="fri"
          onChange={handleChange}
          checked={filtersState.days.includes('fri')}
        />
        <Checkbox
          label="Sat"
          id="sat"
          name="days"
          value="sat"
          onChange={handleChange}
          checked={filtersState.days.includes('sat')}
        />
        <Checkbox
          label="Sun"
          id="sun"
          name="days"
          value="sun"
          onChange={handleChange}
          checked={filtersState.days.includes('sun')}
        />
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterPreferences.propTypes = {
  initialValues: PropTypes.shape({
    location: PropTypes.string,
    days: PropTypes.arrayOf(PropTypes.string),
  }),
  onChange: PropTypes.func,
};

export default GroupFilterPreferences;
