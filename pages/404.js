import { Box } from '../ui-kit';
import { Layout } from '../components';

export default function NotFound() {
  return (
    <Layout title="404 Not Found">
      <Box mt="xl" textAlign="center">
        <Box as="h1">Not Found</Box>
        <Box as="p" fontSize="l">
          Uh oh! We could not find the page you're looking for.
        </Box>
      </Box>
    </Layout>
  );
}
