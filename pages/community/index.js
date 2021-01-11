import { Box } from '../../ui-kit';
import { CardList, Layout } from '../../components';
import { CommunityProvider } from '../../providers';

export default function Community() {
  return (
    <Layout title="Community">
      <Box as="h1" mb="l">
        Live. Laugh. Together.
      </Box>
      <Box as="p" mb="l">
        Build the kind of friendships we all need to live aout our faith.
        There's community for everyone.
      </Box>
      <Box as="button" mb="l">
        Watch
      </Box>
      <Box as="button" mb="l">
        Find your community
      </Box>
      <CommunityProvider Component={CardList} />
    </Layout>
  );
}
