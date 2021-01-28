import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks';

import { Avatar, Modal, Box, Button, TextInput, Radio } from 'ui-kit';

function ConnectModal(props = {}) {
  const { values, handleChange, handleSubmit, setValues } = useForm(() => {
    console.log('Show me Results', values);
  });

  const defaultMessage = `Hey ${props.leaderName}, I’m interested in joining your Crew group!`;

  useEffect(() => {
    const initialValue = {
      message: defaultMessage,
      preference: 'email',
    };
    setValues(initialValue);
  }, [setValues, defaultMessage]);

  return (
    <Modal {...props}>
      {
        <Box
          as="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          pl="l"
          pr="l"
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            mb="base"
          >
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
          <Box as="p" mb="base">
            The leader will respond with the next steps. How would you like to
            be reached?
          </Box>
          <Box display="flex" mb="l">
            <Radio
              id="email"
              label="Email"
              containerProps={{ marginRight: 'base' }}
              name="preference"
              value="email"
              defaultChecked={true}
              onChange={handleChange}
            />
            <Radio
              id="phone"
              name="preference"
              label="Phone"
              value="phone"
              onChange={handleChange}
            />
          </Box>
          <Button type="submit" mb="base">
            Send
          </Button>
        </Box>
      }
    </Modal>
  );
}

ConnectModal.propTypes = {
  ...Modal.propTypes,
  leaderName: PropTypes.string,
};

export default ConnectModal;
