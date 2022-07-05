import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { UserProfileProvider } from 'providers';
import { Box, Cell, Loader } from 'ui-kit';
import UserProfileContent from './UserProfileContent';
import UserProfileHeader from './UserProfileHeader';
import { useRouter } from 'next/router';
function UserProfile(props = {}) {
  const router = useRouter();

  if (props.loading) return <Loader text="Loading your profile" />;

  useEffect(() => {
    if (!props?.loading && props?.currentPerson?.length < 1) {
      console.error(
        'Unable to load current person, user is most likely not logged in.'
      );
      return router.push('/error');
    }
  }, []);

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
