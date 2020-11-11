import { GroupsProvider } from '../../providers';
import { Box } from '../../ui-kit';
import { GroupsList, Layout } from '../../components';

export default function Groups() {
  return (
    <Layout title="Groups">
      <Box as="h1" mb="l">
        Groups
      </Box>
      <GroupsProvider Component={GroupsList} />
    </Layout>
  );
}
