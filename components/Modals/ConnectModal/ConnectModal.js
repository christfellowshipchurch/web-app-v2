import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Modal, Box, Button, TextInput, Radio } from 'ui-kit';

function ConnectModal(props = {}) {
  return (
    <Modal {...props}>
      {
        <Box display="flex" flexDirection="column" pl="l" pr="l">
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            mb="base"
          >
            <Avatar
              src="https://source.unsplash.com/random/200x200"
              height="100px"
              width="100px"
            />
          </Box>

          <Box textAlign="center" as="h2">
            Connect with Juan
          </Box>
          <Box textAlign="center" as="p" mb="l">
            Send a message to let the leader know you’re interested.
          </Box>
          <TextInput
            id="body"
            multiline
            placeholder={'Hey Juan, I’m interested in joining your Crew group!'}
            autoFocus
            mb="base"
            height="115px"
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
            />
            <Radio id="phone" label="Phone" />
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
