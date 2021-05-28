import { Button } from './Dropdowns.styles';
import { useCurrentPerson } from 'hooks';
import { logout, useAuthDispatch } from 'providers/AuthProvider';
import { Box, Heading } from 'ui-kit';
import { useRouter } from 'next/router';
import { showModal, useModalDispatch } from 'providers/ModalProvider';


export default function DropdownUser() {
  const router = useRouter();
  const { currentPerson, authenticated } = useCurrentPerson();
  const modalDispatch = useModalDispatch();
  const dispatch = useAuthDispatch();
  const loggedInQuery = authenticated ? `?rckipid=${currentPerson?.rock?.authToken}` : ''
  return (
    <Box
      bg="bg"
      p="s"
      alignItems="flex-start"
      boxShadow="base"
      display="flex"
      flexDirection="column"
    >
      { authenticated && <Heading width="100%" p="0.875rem">
        {[
          currentPerson.profile?.firstName,
          currentPerson.profile?.lastName,
        ].join(' ')}
      </Heading>}
      { authenticated && <Button
        borderRadius="base"
        width="100%"
        onClick={() => {
          router.push('/profile');
        }}
      >
        Profile
      </Button>}
      <Button
        borderRadius="base"
        width="100%"
        onClick={() => {
          router.push(`https://my.longhollow.com/MyAccount${loggedInQuery}`);
        }}
      >
        Update My Info
      </Button>
      <Button
        borderRadius="base"
        width="100%"
        onClick={() => {
          router.push(`https://my.longhollow.com/GivingHistory${loggedInQuery}`);
        }}
      >
        Giving History
      </Button>
      <Button
        borderRadius="base"
        width="100%"
        onClick={() => {
          router.push(`https://my.longhollow.com/ManageGiving${loggedInQuery}`);
        }}
      >
        Giving Schedules
      </Button>
      <Button
        borderRadius="base"
        width="100%"
        onClick={() => {
          router.push(`https://my.longhollow.com/page/1091${loggedInQuery}`);
        }}
      >
        Communication Preferences
      </Button>
      {authenticated ?       <Button
        borderRadius="base"
        width="100%"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </Button> :       <Button
        borderRadius="base"
        width="100%"
        onClick={() => modalDispatch(showModal('Auth'))}
      >
        Sign In
      </Button>}
    </Box>
  );
}
