import React from 'react';

import { useUserProfileState } from '../../providers/UserProfileProvider';
import { Box } from '../../ui-kit';
import EditUserProfile from './EditUserProfile';
import UserProfileAttribute from './UserProfileAttribute';

function UserProfileContent(props = {}) {
  const { status, user } = useUserProfileState();
  const { campus, email, phone, address, birthdate, gender } = user;

  if (status === 'EDITING') {
    return <EditUserProfile currentPerson={props.currentPerson} />;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 33%)"
      gridColumnGap="s"
      gridRowGap="s"
      textAlign="center"
    >
      <UserProfileAttribute title="My Campus" data={campus} label="campus" />
      <UserProfileAttribute title="Email" data={email} label="email" />
      <UserProfileAttribute title="Phone" data={phone} label="phone" />
      <UserProfileAttribute
        title="Home Address"
        data={address}
        label="address"
      />
      <UserProfileAttribute
        title="Date of Birth"
        data={birthdate}
        label="date of birth"
      />
      <UserProfileAttribute title="Gender" data={gender} label="gender" />
    </Box>
  );
}

export default UserProfileContent;
