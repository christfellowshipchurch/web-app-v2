import { Box } from 'ui-kit';
import { Layout } from 'components';

export default function PrivacyPolicy({ dropdownData }) {
  return (
    <Layout title="Privacy Policy" dropdownData={dropdownData}>
      <Box as="h1">Privacy Policy</Box>
      <Box as="p" fontSize="l">
        This is where the page content will go&hellip;
      </Box>
    </Layout>
  );
}
