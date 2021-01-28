import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks';
import { Box, Button, Radio, Select } from 'ui-kit';
import capitalize from 'lodash/capitalize';
function GroupFilterPreferences(props = {}) {
  const { handleSubmit } = useForm(() => {
    console.log('Show me Results');
  });

  const meetingDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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
        {meetingDays.map((item, i) => (
          <Radio
            label={capitalize(item)}
            id={item}
            name="days"
            value={item}
            onChange={props.onChange}
            checked={props.initialValues?.day === item}
          />
        ))}
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterPreferences.propTypes = {
  initialValues: PropTypes.shape({
    location: PropTypes.string,
    day: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

export default GroupFilterPreferences;
