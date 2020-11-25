import React from 'react';
import PropTypes from 'prop-types';

import { UserProfileProvider } from '../../providers';
import { Box, Cell, Loader } from '../../ui-kit';
import UserProfileContent from './UserProfileContent';
import UserProfileHeader from './UserProfileHeader';

function UserProfile(props = {}) {
  if (props.loading) return <Loader text="Loading your profile" />;
  return (
    <UserProfileProvider currentUser={props.currentPerson}>
      <Box mb="l" textAlign="center">
        <UserProfileHeader />
      </Box>
      <Cell maxWidth="800px">
        <UserProfileContent />
      </Cell>
    </UserProfileProvider>
  );
}

UserProfile.propTypes = {
  currentPerson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default UserProfile;
