import { Box } from 'ui-kit';
import { Layout } from 'components';

export default function Terms({ dropdownData }) {
  return (
    <Layout title="Terms of Use" dropdownData={dropdownData}>
      <Box as="h1">Terms of Use</Box>
      <Box as="p" fontSize="l">
        This is where the page content will go&hellip;
      </Box>
    </Layout>
  );
}
