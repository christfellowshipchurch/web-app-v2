import React from 'react';

import { useUserProfileState } from 'providers/UserProfileProvider';
import { Avatar, Box } from 'ui-kit';
import UserProfileControls from './UserProfileControls';

function UserProfileHeader(props = {}) {
  const { user } = useUserProfileState();
  const { name, src } = user;

  return (
    <>
      <Avatar
        src={src}
        name={name}
        width="150px"
        height="150px"
        mb="base"
        mx="auto"
      />
      <Box as="h1">{name}</Box>
      <UserProfileControls />
    </>
  );
}

export default UserProfileHeader;
