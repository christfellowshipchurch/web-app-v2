import { useLiveStreamsQuery } from 'hooks';

import { Box } from 'ui-kit';
import { Layout } from 'components';

export default function Live() {
  const { liveStreams } = useLiveStreamsQuery();

  return (
    <Layout title="Live">
      <Box as="h1" mb="l">
        Live
      </Box>
      <pre>{JSON.stringify(liveStreams, null, 2)}</pre>
    </Layout>
  );
}
