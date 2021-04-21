import { Search } from 'components';
import { Heading, Text, Box } from 'ui-kit';
import Dropdowns from './Dropdowns.styles';

export default function DropdownSearch() {
  return (
    <Dropdowns.Container py="xxl">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading variant="h2" color="neutrals.900" fontWeight="800" mb="s">
          Need to find something?
        </Heading>
        <Text
          variant="s"
          color="neutrals.900"
          opacity="60%"
          fontWeight="400"
          mb="xl"
          maxWidth="700px"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          lectus elementum montes, ut fringilla dignissim donec massa interdum.
          Mus scelerisque mauris imperdiet scelerisque semper sed dignissim
          suscipit ullamcorper. Integer od
        </Text>
        <Search width="640px" />
      </Box>
    </Dropdowns.Container>
  );
}
