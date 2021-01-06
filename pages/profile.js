import { Layout, UserProfile } from 'components';
import { CurrentPersonProvider } from 'providers';

export default function Profile(props = {}) {
  return (
    <Layout title="Profile">
      <CurrentPersonProvider Component={UserProfile} />
    </Layout>
  );
}
