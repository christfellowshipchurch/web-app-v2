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
        We’ll help you get connected.
      </Box>
      <Box as="p" mb="l" color="subdued">
        There are hundreds of communities at CF. We’ll help find yours.
      </Box>
      <Button onClick={props.handleOnClick} rounded={true} mb="base">
        Find your Groups and Classes
      </Button>

      <CustomLink target="_blank" href="https://rock.gocf.org/page/2113">Need help?</CustomLink>

    </Box>
  );
}
