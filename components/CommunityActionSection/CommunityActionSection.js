import { Box, Button } from 'ui-kit';

export default function CommunityActionSection(props) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      p="l"
      mb="l"
      textAlign="center"
    >
      <Box as="h2" mb="s">
        We’ll help you get connected.
      </Box>
      <Box as="p" mb="l" color="subdued">
        There are hundreds of communities at CF. We’ll help find yours.
      </Box>
      <Button onClick={props.handleOnClick} rounded={true} mb="base">
        Find your community
      </Button>

      <Button
        as="a"
        rounded={true}
        size="s"
        variant="secondary"
        href="https://rock.gocf.org/page/2113"
      >
        Need help?
      </Button>
    </Box>
  );
}
