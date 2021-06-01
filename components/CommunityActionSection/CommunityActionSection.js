import { Box, Button } from 'ui-kit';
import { CustomLink } from 'components';

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
        You were made for community.
      </Box>
      <Box as="p" mb="l" color="subdued">
        With many choices to pick from, we’ll help you find a group or class
        that’s right for you!
      </Box>
      <Button onClick={props.handleOnClick} rounded={true} mb="base">
        Search ALL Groups &amp; Classes
      </Button>

      <CustomLink target="_blank" href="https://rock.gocf.org/page/2113">
        Need help?
      </CustomLink>
    </Box>
  );
}
