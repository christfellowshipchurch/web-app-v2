import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { showStep, useModalDispatch } from 'providers/ModalProvider';

import { useForm, useContactGroupLeader } from 'hooks';

import { Avatar, Box, Button, TextInput } from 'ui-kit';

function ConnectForm(props = {}) {
  const modalDispatch = useModalDispatch();
  const [contactGroupLeader] = useContactGroupLeader();
  const { values, handleChange, handleSubmit, setValues } = useForm(() => {
    contactGroupLeader({
      variables: {
        groupId: 'Group:asdfasdf', // props.groupId,
        message: values.message,
      },
    });
    modalDispatch(showStep(1));
  });

  const defaultMessage = `Hey ${props.leaderName}, I’m interested in joining your Crew group!`;

  useEffect(() => {
    const initialValue = {
      message: defaultMessage,
    };
    setValues(initialValue);
  }, [setValues, defaultMessage]);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      pl="l"
      pr="l"
    >
      <Box display="flex" alignItems="center" flexDirection="column" mb="base">
        <Avatar src={props.leaderAvatar} height="100px" width="100px" />
      </Box>

      <Box textAlign="center" as="h2">
        {`Connect with ${props.leaderName}`}
      </Box>
      <Box textAlign="center" as="p" mb="l">
        Send a message to let the leader know you’re interested.
      </Box>

      <TextInput
        as="textarea"
        id="message"
        label="Message"
        placeholder={defaultMessage}
        autoFocus
        mb="base"
        height="115px"
        onChange={handleChange}
      />
      <Button type="submit" mb="base">
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
