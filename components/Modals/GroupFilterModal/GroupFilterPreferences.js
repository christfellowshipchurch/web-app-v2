import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks';
import { Box, Button, Radio, Select } from 'ui-kit';

function GroupFilterPreferences(props = {}) {
  const { handleSubmit } = useForm(() => {
    console.log('Show me Results');
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
        <Radio
          label="Mon"
          id="mon"
          name="days"
          value="mon"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'mon'}
        />
        <Radio
          label="Tue"
          id="tue"
          name="days"
          value="tue"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'tue'}
        />
        <Radio
          label="Wed"
          id="wed"
          name="days"
          value="wed"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'wed'}
        />
        <Radio
          label="Thu"
          id="thu"
          name="days"
          value="thu"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'thu'}
        />
        <Radio
          label="Fri"
          id="fri"
          name="days"
          value="fri"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'fri'}
        />
        <Radio
          label="Sat"
          id="sat"
          name="days"
          value="sat"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'sat'}
        />
        <Radio
          label="Sun"
          id="sun"
          name="days"
          value="sun"
          onChange={props.onChange}
          checked={props.initialValues?.day === 'sun'}
        />
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
