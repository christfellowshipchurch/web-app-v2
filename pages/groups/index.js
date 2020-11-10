import { GroupsProvider } from '../../providers';
import { Box } from '../../ui-kit';
import { GroupsGrid, Layout } from '../../components';

export default function Groups() {
  return (
    <Layout title="Groups">
      <Box as="h1" mb="l">
        Groups
      </Box>
      <GroupsProvider Component={GroupsGrid} />
    </Layout>
  );
}
