import { Button, Input } from './Dropdowns.styles';
import { useAuthenticateCredentials, useCurrentPerson } from 'hooks';
import { logout, update, useAuthDispatch } from 'providers/AuthProvider';
import { useState } from 'react';
import { Avatar, Box, Heading } from 'ui-kit';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { UserCircle } from 'phosphor-react';

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
          marginTop={theme.space.m}
        />
      )}
      <Heading mb="m">
        {[
          currentPerson.profile?.firstName,
          currentPerson.profile?.lastName,
        ].join(' ')}
      </Heading>
      <Button onClick={() => {}}>Edit Profile</Button>
      <Button mb="xl" onClick={() => dispatch(logout())}>
        Log Out
      </Button>
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
      <Button width="300px" borderRadius="base">
        Link 3
      </Button>
      <Button width="300px" borderRadius="base">
        Link 4
      </Button>
    </Box>
  );
}

function Login() {
  const [values, setValues] = useState({});
  const dispatch = useAuthDispatch();
  const [authenticate, { loading, error }] = useAuthenticateCredentials({
    onCompleted: data => {
      dispatch(update({ token: data.authenticate.token }));
    },
    onError: error => {
      console.log('error', error);
    },
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading textAlign="center" fontSize="h3">
        Sign In
      </Heading>
      <Heading width="100%">Email</Heading>
      <Input
        onChange={event => setValues({ ...values, email: event.target.value })}
        disabled={loading}
        mb="base"
      ></Input>
      <Heading width="100%">Password</Heading>
      <Input
        type="password"
        disabled={loading}
        onChange={event =>
          setValues({ ...values, password: event.target.value })
        }
        mb="base"
      ></Input>
      <Button
        onClick={async () => await authenticate({ variables: values })}
        disabled={loading}
      >
        Submit
      </Button>
    </Box>
  );
}

export default function DropdownUser() {
  const { authenticated } = useCurrentPerson();
  return (
    <Box
      bg="bg"
      p="l"
      position="fixed"
      width="400px"
      right="0"
      top="0"
      height="100vh"
    >
      {authenticated ? <Profile /> : <Login />}
    </Box>
  );
}
