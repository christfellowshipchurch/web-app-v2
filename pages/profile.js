import { Box } from '../ui-kit';
import { Layout } from '../components';

export default function Profile() {
  return (
    <Layout title="Profile">
      <Box as="h1">Profile</Box>
      <Box as="p" fontSize="l">
        This is where the page content will go&hellip;
      </Box>
    </Layout>
  );
}
