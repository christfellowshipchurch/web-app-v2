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
      <Box textAlign="center">
        <Avatar
          src={src}
          name={name}
          width="150px"
          height="150px"
          mb="base"
          mx="auto"
        />
        <Box as="h1">{name}</Box>
      </Box>
    </Layout>
  );
}
