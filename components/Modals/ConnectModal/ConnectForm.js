import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { showStep, useModalDispatch } from 'providers/ModalProvider';

import { useForm, useContactGroupLeader } from 'hooks';

import { Avatar, Box, Button, TextInput } from 'ui-kit';

function ConnectForm(props = {}) {
  const modalDispatch = useModalDispatch();
  const [contactGroupLeader] = useContactGroupLeader();
  const { values, handleChange, handleSubmit, setValues } = useForm(
    async () => {
      const { data } = await contactGroupLeader({
        variables: {
          groupId: 'Group:3deb8bbfda5d713df49929ce78c61bb7', // TODO: use this in production `props.groupId`. We are hard-coding a test group id to avoid blasting group leaders.
          message: values.message,
        },
      });
      const status = data.contactGroupLeader;
      if (status === 'Active') {
        modalDispatch(showStep(1));
      }
    }
  );

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
