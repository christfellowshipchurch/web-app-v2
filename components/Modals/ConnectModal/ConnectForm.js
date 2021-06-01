import React from 'react';
import PropTypes from 'prop-types';

import { showStep, useModalDispatch } from 'providers/ModalProvider';

import { useContactGroupLeader } from 'hooks';

import { Avatar, Box, Button } from 'ui-kit';

function ConnectForm(props = {}) {
  const modalDispatch = useModalDispatch();
  const [contactGroupLeader] = useContactGroupLeader();

  const handleOnClick = async () => {
    const { data } = await contactGroupLeader({
      variables: {
        groupId: props.groupId,
      },
    });
    const status = data.contactGroupLeader;
    if (status !== 'Failed') {
      modalDispatch(showStep(1));
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" flexDirection="column" mb="base">
        <Avatar
          src={props.leaderAvatar}
          name={props.leaderName}
          height="100px"
          width="100px"
        />
      </Box>

      <Box textAlign="center" as="h2">
        {`Connect with ${props.leaderName}`}
      </Box>
      <Box textAlign="center" as="p" mb="l" px="l">
        Contact the leader to let them know you’re interested.
      </Box>

      <Button onClick={handleOnClick} mb="base">
        Send
      </Button>
    </Box>
  );
}

ConnectForm.propTypes = {
  initialValue: PropTypes.string,
  leaderName: PropTypes.string,
};

export default ConnectForm;
