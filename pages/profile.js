import { Layout, UserProfile } from 'components';
import { CurrentPersonProvider } from 'providers';
import { Cell, utils } from 'ui-kit';

export default function Profile(props = {}) {
  return (
    <Layout title="Profile">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <CurrentPersonProvider Component={UserProfile} />
      </Cell>
    </Layout>
  );
}
