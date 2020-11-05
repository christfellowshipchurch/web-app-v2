import { Box } from '../ui-kit';
import { Layout } from '../components';

export default function About() {
  return (
    <Layout title="About">
      <Box as="h1">About</Box>
      <Box as="p" fontSize="l">
        This is where the page content will go&hellip;
      </Box>
    </Layout>
  );
}
