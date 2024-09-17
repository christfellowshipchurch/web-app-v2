import { Layout } from 'components';
import { Box } from 'ui-kit';

export default function ConferenceReport() {
  return (
    <Layout>
      <Box bg="white">
        <Box
          maxWidth={1000}
          mx="auto"
          height={{ _: 300, sm: 400, md: 600, lg: 700 }}
        >
          <iframe
            title="Looker Studio Embed"
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/9374bb18-85ec-41db-bafe-5895ac7e4259/page/kR8BE"
            style={{ border: 0 }}
            allowFullScreen
          />
        </Box>
      </Box>
    </Layout>
  );
}
