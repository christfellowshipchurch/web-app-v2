import React from 'react';

import { useUserProfileState } from 'providers/UserProfileProvider';
import { Avatar, Box } from 'ui-kit';
import UserProfileControls from './UserProfileControls';

function UserProfileHeader(props = {}) {
  const { user: _user } = useUserProfileState();
  const { name, user } = _user;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt="l">
      <Avatar
        src={user?.profile?.photo?.uri}
        name={name}
        width="150px"
        height="150px"
      />
      <Box my="base" as="h1">{name}</Box>
      {/* <UserProfileControls /> */}
    </Box>
  );
}

export default UserProfileHeader;
