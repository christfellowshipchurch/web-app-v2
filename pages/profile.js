import { Layout, UserProfile } from 'components';
import { CurrentPersonProvider } from 'providers';

export default function Profile({ dropdownData }) {
  return (
    <Layout title="Profile" dropdownData={dropdownData}>
      <CurrentPersonProvider Component={UserProfile} />
    </Layout>
  );
}
