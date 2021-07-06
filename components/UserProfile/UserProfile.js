import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { UserProfileProvider } from 'providers';
import { Box, Button, Card, Cell, Loader } from 'ui-kit';
import Dropdown from '../Dropdowns/Dropdowns.styles';
import UserProfileContent from './UserProfileContent';
import UserProfileHeader from './UserProfileHeader';
import { useRouter } from 'next/router';
import { logout, useAuthDispatch } from 'providers/AuthProvider';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { useCurrentPerson } from 'hooks';
import UserProfileAttribute from './UserProfileAttribute';

function Links() {
  const router = useRouter();
  const { currentPerson, authenticated } = useCurrentPerson();
  const loggedInQuery = authenticated
    ? `?rckipid=${currentPerson?.rock?.authToken}`
    : '';

  return (
    <UserProfileAttribute
      title="Links"
      data={
        <Box
          display="grid"
          gridTemplateColumns={{
            _: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gridColumnGap="s"
        >
          <Dropdown.Button
            onClick={() => {
              router.push(
                `https://my.longhollow.com/MyAccount${loggedInQuery}`
              );
            }}
          >
            Update My Info
          </Dropdown.Button>
          <Dropdown.Button
            onClick={() => {
              router.push(
                `https://my.longhollow.com/GivingHistory${loggedInQuery}`
              );
            }}
          >
            Giving History
          </Dropdown.Button>
          <Dropdown.Button
            onClick={() => {
              router.push(
                `https://my.longhollow.com/ManageGiving${loggedInQuery}`
              );
            }}
          >
            Giving Schedules
          </Dropdown.Button>
          <Dropdown.Button
            onClick={() => {
              router.push(
                `https://my.longhollow.com/page/1091${loggedInQuery}`
              );
            }}
          >
            Communication Preferences
          </Dropdown.Button>
        </Box>
      }
    />
  );
}

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
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        my="xxl"
      >
        <Button mb="l" onClick={handleSignInClick}>
          Sign in
        </Button>
        <Cell maxWidth="800px" mb="l">
          <Links />
        </Cell>
      </Box>
    );
  }

  return (
    <UserProfileProvider currentUser={props.currentPerson}>
      <UserProfileHeader />
      <Box display="flex" justifyContent="center" mb="l">
        <Button onClick={handleLogoutClick}>Log out</Button>
      </Box>
      <Cell maxWidth="800px" mb="l">
        <UserProfileContent />
        <Links />
      </Cell>
    </UserProfileProvider>
  );
}

UserProfile.propTypes = {
  currentPerson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default UserProfile;
