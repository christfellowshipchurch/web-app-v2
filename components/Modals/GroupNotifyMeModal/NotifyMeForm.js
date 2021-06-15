import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useModalDispatch, showStep } from 'providers/ModalProvider';
import { useCampuses, useCurrentUser, useGroupPreferenceUpdates } from 'hooks';

import { Box, Button, FormLabel, Select } from 'ui-kit';

function CampusSelect(props = {}) {
  const { loading, campuses } = useCampuses();

  return (
    <>
      <FormLabel>Select a Campus</FormLabel>
      <Select
        id="campus"
        name="campus"
        defaultValue={props.selectedCampusId}
        onChange={props.onChange}
        disabled={loading}
      >
        <Select.Option value="">Select...</Select.Option>
        {campuses?.map(item => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}

function NotifyMeForm(props = {}) {
  const { currentUser } = useCurrentUser();
  const [campusId, setCampusId] = useState(props.initialCampusId || '');
  const [subscribeToGroupPreferenceUpdates] = useGroupPreferenceUpdates({
    onCompleted: () => {
      // Show success state
      modalDispatch(showStep(1));
    },
    onError: e => {
      console.log({ e });
      modalDispatch(showStep(2));
    },
  });
  const modalDispatch = useModalDispatch();

  const handleCampusSelect = event => {
    setCampusId(event.target.value);
  };

  const handleSubmit = () => {
    const variables = {
      campusId,
      groupPreferenceId: props.groupPreference.id,
    };

    subscribeToGroupPreferenceUpdates({
      variables,
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box textAlign="center" as="h2">
        {props.title}
      </Box>
      <Box textAlign="center" as="p" mb="l" px="l">
        <Box as="p">
          We'll let you know when {props.groupPreference?.title} groups open up
          for enrollment at your preferred campus.
        </Box>
      </Box>
      <Box>
        <CampusSelect
          selectedCampusId={campusId}
          onChange={handleCampusSelect}
        />
      </Box>
      <Button onClick={handleSubmit} mt="l" size="l" width="100%">
        Confirm
      </Button>
    </Box>
  );
}

NotifyMeForm.propTypes = {
  title: PropTypes.string,
};

NotifyMeForm.defaultProps = {
  title: 'Notify Me',
};

export default NotifyMeForm;
