import React from 'react';

import { useUserProfile, update } from '../../providers/UserProfileProvider';
import { Box, Button } from '../../ui-kit';

function UserProfileControls(props = {}) {
  const [{ status }, dispatch] = useUserProfile();

  function handleCancelClick(event) {
    event.preventDefault();
    dispatch(update({ status: 'IDLE' }));
  }

  function handleEditClick(event) {
    event.preventDefault();
    dispatch(update({ status: 'EDITING' }));
  }

  if (status === 'EDITING') {
    return (
      <Box alignItems="center" display="flex" justifyContent="center">
        <Button
          type="submit"
          form="editProfile"
          disabled={status === 'LOADING'}
          size="s"
          mr="base"
        >
          Save changes
        </Button>
        <Box as="a" href="#0" onClick={handleCancelClick} fontSize="s">
          Cancel
        </Box>
      </Box>
    );
  }

  return (
    <Box as="a" href="#0" onClick={handleEditClick}>
      Edit Profile
    </Box>
  );
}

export default UserProfileControls;
