import { useRouter } from 'next/router';

import { useGroupContentId } from 'hooks';
import { GroupProvider } from 'providers';
import { Cell, Loader } from 'ui-kit';
import { GroupManage, Layout } from 'components';

export default function Edit(props) {
  const router = useRouter();
  const { title, id } = router.query;
  const state = useGroupContentId({ title, id });

  const _id = id || state.contentId;
  const isLoading = state.status === 'LOADING' || state.status === 'RECEIVED';

  return (
    // TODO: It should say the group's name here.
    // Use `title` and then deal with the hyphened title.
    <Layout title="Edit Group">
      <Cell px="base" py={{ _: 'l', lg: 'xl' }} maxWidth={1300}>
        {isLoading ? (
          <Loader text="Loading your Group" />
        ) : _id ? (
          <GroupProvider
            Component={GroupManage}
            options={{ variables: { itemId: _id } }}
          />
        ) : null}
      </Cell>
    </Layout>
  );
}
