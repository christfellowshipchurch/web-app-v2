import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { UserProfileProvider } from 'providers';
import { Box, Button, Cell, Loader } from 'ui-kit';
import UserProfileContent from './UserProfileContent';
import UserProfileHeader from './UserProfileHeader';
import { useRouter } from 'next/router';
import { logout, useAuth, useAuthDispatch } from 'providers/AuthProvider';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

function UserProfile(props = {}) {
  const router = useRouter();
  const authDispatch = useAuthDispatch();
  const modalDispatch = useModalDispatch();

  function handleSignInClick() {
    modalDispatch(showModal('Auth'));
  }

  function handleLogoutClick() {
    authDispatch(logout());
    router.reload();
  }

  useEffect(() => {
    if (!props.loading && props.currentPerson?.length === 0) {
      handleSignInClick();
    }
  }, []);

  if (props.loading)
    return (
      <Box my="xxl" display="flex" justifyContent="center">
        <Loader text="Loading your profile" />
      </Box>
    );


  if (props.currentPerson?.length === 0) {
      return (<Box display="flex" justifyContent="center" my="xxl">
        <Button onClick={handleSignInClick}>Sign in</Button>
      </Box>);
  }

  return (
    <UserProfileProvider currentUser={props.currentPerson}>
      <UserProfileHeader />
      <Box display="flex" justifyContent="center" mb="l">
        <Button onClick={handleLogoutClick}>Log out</Button>
      </Box>
      <Cell maxWidth="800px" mb="l">
        <UserProfileContent />
      </Cell>
    </UserProfileProvider>
  );
}

UserProfile.propTypes = {
  currentPerson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default UserProfile;
