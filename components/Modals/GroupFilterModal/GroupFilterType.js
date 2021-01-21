import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { Box, Button, Checkbox } from 'ui-kit';

function GroupFilterType(props = {}) {
  const modalDispatch = useModalDispatch();
  const [filtersState, filtersDispatch] = useGroupFilters();

  console.log('🔹 <GroupFilterType> filtersState:', filtersState);

  const { handleSubmit } = useForm(() => {
    modalDispatch(showStep(1));
  });

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    filtersDispatch(toggleValue({ name, value }));
  };

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
        <Checkbox
          label="Bible Studies"
          id="bibleStudies"
          name="groupTypes"
          value="bibleStudies"
          onChange={handleChange}
          checked={filtersState.groupTypes.includes('bibleStudies')}
        />
        <Checkbox
          label="Prayer Groups"
          id="prayerGroups"
          name="groupTypes"
          value="prayerGroups"
          onChange={handleChange}
          checked={filtersState.groupTypes.includes('prayerGroups')}
        />
        <Checkbox
          label="Activity Studies"
          id="activityStudies"
          name="groupTypes"
          value="activityStudies"
          onChange={handleChange}
          checked={filtersState.groupTypes.includes('activityStudies')}
        />
        <Checkbox
          label="Classes"
          id="classes"
          name="groupTypes"
          value="classes"
          onChange={handleChange}
          checked={filtersState.groupTypes.includes('classes')}
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
