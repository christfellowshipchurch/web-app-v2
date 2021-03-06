import { Box, Button, Icon } from 'ui-kit';
import { useRouter } from 'next/router';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

export default function CommunityLeaderActions(props) {
  const router = useRouter();
  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();

  function ensureAuthentication(onSuccess) {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(updateAuth({ onSuccess }));
    } else {
      onSuccess();
    }
  }

  function handleMyGroups() {
    const navigateToConnect = () => {
      router.push('/connect');
    };

    ensureAuthentication(navigateToConnect);
  }

  return (
    <Box backgroundColor="white">
      <Box
        display="grid"
        px={{ _: 'base', md: 'xxl' }}
        py={{ _: 'l', md: 'xxl' }}
        gridTemplateColumns={{ _: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gridColumnGap="l"
        textAlign="center"
      >
        <Box mb={{ _: 'xl', md: 0 }}>
          <Icon name="user" size="40" mb="s" color="subdued" />
          <Box>
            <Box as="h2" mb="s">
              My Groups
            </Box>
            <Box as="p" mb="base">
              Already in a group? Log in to view your groups.
            </Box>
            <Button
              size="s"
              variant="secondary"
              rounded={true}
              onClick={handleMyGroups}
            >
              View My Groups
            </Button>
          </Box>
        </Box>

        <Box mb={{ _: 'xl', md: 0 }}>
          <Icon name="users" size="40" mb="s" color="subdued" />
          <Box>
            <Box as="h2" mb="s">
              Become a Leader
            </Box>
            <Box as="p" mb="base">
              Interested in starting and leading a group?
            </Box>
            <Button
              as="a"
              size="s"
              variant="secondary"
              href="https://rock.christfellowship.church/groups/starting-a-group"
              rounded={true}
            >
              Learn More
            </Button>
          </Box>
        </Box>

        <Box mb={{ _: 'xl', md: 0 }}>
          <Icon name="book" size="40" mb="s" color="subdued" />
          <Box>
            <Box as="h2" mb="s">
              Toolbox Resources
            </Box>
            <Box as="p" mb="base">
              Access all your leader and member resources.
            </Box>
            <Button
              as="a"
              size="s"
              variant="secondary"
              href="https://rock.christfellowship.church/myaccount"
              rounded={true}
            >
              Access Toolbox
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
