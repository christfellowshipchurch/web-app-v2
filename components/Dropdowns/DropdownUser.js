import { Button } from './Dropdowns.styles';
import { useCurrentPerson } from 'hooks';
import { logout, useAuthDispatch } from 'providers/AuthProvider';
import { Avatar, Box, Heading } from 'ui-kit';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { UserCircle } from 'phosphor-react';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

function Profile() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useAuthDispatch();
  const { currentPerson } = useCurrentPerson();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {currentPerson.profile?.photo?.uri ? (
        <Box my="m">
          <Avatar
            src={currentPerson.profile?.photo?.uri}
            height="150px"
            width="150px"
          />
        </Box>
      ) : (
        <UserCircle
          color={theme.colors.fg}
          size="200"
          style={{ marginTop: theme.space.m }}
        />
      )}
      <Heading mb="m">
        {[
          currentPerson.profile?.firstName,
          currentPerson.profile?.lastName,
        ].join(' ')}
      </Heading>
      <Button
        onClick={() => {
          router.push('/profile');
        }}
      >
        Profile
      </Button>
      <Button mb="xl" onClick={() => dispatch(logout())}>
        Log Out
      </Button>
    </Box>
  );
}

function Login() {
  const modalDispatch = useModalDispatch();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button mb="xl" onClick={() => modalDispatch(showModal('Auth'))}>
        Sign In
      </Button>
    </Box>
  );
}

export default function DropdownUser() {
  const router = useRouter();
  const { authenticated } = useCurrentPerson();
  return (
    <Box
      bg="bg"
      p="l"
      position="absolute"
      width="400px"
      right="0"
      boxShadow="0px 0px 2px 2px rgb(0 0 0 / 20%)"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      {authenticated ? <Profile /> : <Login />}
      <Button
        width="300px"
        borderRadius="base"
        onClick={() => router.push('/give')}
      >
        Give
      </Button>
      <Button
        width="300px"
        borderRadius="base"
        onClick={() => router.push('/groups')}
      >
        Groups
      </Button>
      <Button
        width="300px"
        borderRadius="base"
        onClick={() => router.push('/events')}
      >
        Events
      </Button>
      <Button
        width="300px"
        borderRadius="base"
        onClick={() => router.push('/serve')}
      >
        Serve
      </Button>
    </Box>
  );
}
