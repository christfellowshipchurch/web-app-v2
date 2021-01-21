import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Radio } from 'ui-kit';

function GroupFilterType(props = {}) {
  const initialValue = 'bibleStudies';
  const modalDispatch = useModalDispatch();

  const { handleSubmit } = useForm(() => {
    modalDispatch(showStep(1));
  });

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      <Box as="h2">Find your Crew</Box>
      <Box as="p" color="subdued" mb="l">
        Select the types of Crew groups you’re interested in.
      </Box>
      <Box mb="l">
        <Radio
          label="Bible Studies"
          id="bibleStudies"
          name="groupType"
          value="bibleStudies"
          onChange={props.onChange}
          checked={initialValue === 'bibleStudies'}
        />
        <Radio
          label="Prayer Groups"
          id="prayerGroups"
          name="groupType"
          value="prayerGroups"
          onChange={props.onChange}
          checked={initialValue === 'prayerGroups'}
        />
        <Radio
          label="Activity Studies"
          id="activityStudies"
          name="groupType"
          value="activityStudies"
          onChange={props.onChange}
          checked={initialValue === 'activityStudies'}
        />
        <Radio
          label="Classes"
          id="classes"
          name="groupType"
          value="classes"
          onChange={props.onChange}
          checked={initialValue === 'classes'}
        />
      </Box>
      <Button type="submit">Continue</Button>
    </Box>
  );
}

GroupFilterType.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default GroupFilterType;
