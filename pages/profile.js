import { normalizeUserData } from '../utils';
import { useCurrentUser } from '../hooks';
import { Avatar, Box, Loader } from '../ui-kit';
import { Layout } from '../components';

export default function Profile(props = {}) {
  const { loading, currentUser } = useCurrentUser();
  const { name, src } = normalizeUserData(currentUser);

  if (loading) {
    return (
      <Layout title="Profile">
        <Loader text="Loading your profile" />
      </Layout>
    );
  }

  return (
    <Layout title="Profile">
      <Box alignItems="center" display="flex">
        <Box mr="base">
          <Avatar src={src} name={name} width="100px" height="100px" />
        </Box>
        <Box flex="1">
          <Box as="h1" mb="0">
            {name}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
