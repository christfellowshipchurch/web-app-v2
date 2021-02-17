import { Box, Button, Icon } from 'ui-kit';

export default function CommunityLeaderActions(props) {
  return (
    <Box backgroundColor="white">
      <Box
        display="grid"
        px={{ _: 'base', md: 'xxl' }}
        py={{ _: 'l', md: 'xxl' }}
        gridTemplateColumns={{ _: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gridColumnGap="l"
        textAlign={{ _: 'center', md: 'left' }}
      >
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
