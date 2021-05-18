import React from 'react';

import { useUserProfileState } from 'providers/UserProfileProvider';
import { CardGrid } from 'ui-kit';
import EditUserProfile from './EditUserProfile';
import UserProfileAttribute from './UserProfileAttribute';
import Styled from './UserProfile.styles';

function UserProfileContent(props = {}) {
  const { status, user } = useUserProfileState();
  const { campus, email, phone, address, birthdate, gender } = user;

  if (status === 'EDITING') {
    return <EditUserProfile currentPerson={props.currentPerson} />;
  }

  return (
    <CardGrid columns="12" gridColumnGap="s" gridRowGap="s" textAlign="center">
      <Styled.ContentGridSpacing>
        <UserProfileAttribute title="My Campus" data={campus} label="campus" />
      </Styled.ContentGridSpacing>

      <Styled.ContentGridSpacing>
        <UserProfileAttribute title="Email" data={email} label="email" />
      </Styled.ContentGridSpacing>

      <Styled.ContentGridSpacing>
        <UserProfileAttribute title="Phone" data={phone} label="phone" />
      </Styled.ContentGridSpacing>

      <Styled.ContentGridSpacing>
        <UserProfileAttribute
          title="Home Address"
          data={address}
          label="address"
        />
      </Styled.ContentGridSpacing>

      <Styled.ContentGridSpacing>
        <UserProfileAttribute
          title="Date of Birth"
          data={birthdate}
          label="date of birth"
        />
      </Styled.ContentGridSpacing>

      <Styled.ContentGridSpacing>
        <UserProfileAttribute title="Gender" data={gender} label="gender" />
      </Styled.ContentGridSpacing>
    </CardGrid>
  );
}

export default UserProfileContent;
