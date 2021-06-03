import { useRouter } from 'next/router';

import { useGroupContentId } from 'hooks';
import { GroupProvider } from 'providers';
import { Cell, Loader, utils } from 'ui-kit';
import { GroupSingle, Layout } from 'components';

export default function Group(props) {
  const router = useRouter();
  const { title, id } = router.query;
  const state = useGroupContentId({ title, id });

  const _id = id || state.contentId;
  const isLoading = state.status === 'LOADING' || state.status === 'RECEIVED';

  return (
    <Layout title={title}>
      {isLoading ? (
        <Cell
          as="main"
          maxWidth={utils.rem('1100px')}
          px="base"
          py={{ _: 'l', lg: 'xl' }}
          display="flex"
          justifyContent="center"
        >
          <Loader text="Loading your Group" />
        </Cell>
      ) : _id ? (
        <GroupProvider
          Component={GroupSingle}
          options={{ variables: { itemId: _id } }}
        />
      ) : null}
    </Layout>
  );
}
