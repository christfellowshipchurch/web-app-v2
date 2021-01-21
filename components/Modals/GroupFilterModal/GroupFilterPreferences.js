import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useSearchGroups } from 'hooks';
import { Box, Button, Checkbox, Select } from 'ui-kit';

function GroupFilterPreferences(props = {}) {
  const [searchGroups] = useSearchGroups({
    fetchPolicy: 'network-only',
    onCompleted: data => {
      console.log('✅ data:', data);
    },
  });

  const { handleSubmit } = useForm(async () => {
    console.log(
      '🔍%c Searching groups...',
      'color: #00aeff; font-weight: bold;'
    );

    searchGroups({
      variables: {
        query: 'test',
      },
    });
  });

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
          id="campus"
          name="campus"
          onChange={props.onChange}
          defaultValue={props.initialValues?.campus}
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
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('mon')}
        />
        <Checkbox
          label="Tue"
          id="tue"
          name="days"
          value="tue"
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('tue')}
        />
        <Checkbox
          label="Wed"
          id="wed"
          name="days"
          value="wed"
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('wed')}
        />
        <Checkbox
          label="Thu"
          id="thu"
          name="days"
          value="thu"
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('thu')}
        />
        <Checkbox
          label="Fri"
          id="fri"
          name="days"
          value="fri"
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('fri')}
        />
        <Checkbox
          label="Sat"
          id="sat"
          name="days"
          value="sat"
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('sat')}
        />
        <Checkbox
          label="Sun"
          id="sun"
          name="days"
          value="sun"
          onChange={props.onChange}
          checked={props.initialValues?.days.includes('sun')}
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
