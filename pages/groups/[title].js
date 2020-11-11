import { useRouter } from 'next/router';

import { useGroupContentId } from '../../hooks';
import { GroupProvider } from '../../providers';
import { Loader } from '../../ui-kit';
import { GroupSingle, Layout } from '../../components';

export default function Group(props) {
  const router = useRouter();
  const { title, id } = router.query;
  const state = useGroupContentId({ title, id });

  const _id = id || state.contentId;
  const isLoading = state.status === 'LOADING' || state.status === 'RECEIVED';

  return (
    <Layout title={title}>
      {isLoading ? (
        <Loader text="Loading your Group" />
      ) : _id ? (
        <GroupProvider Component={GroupSingle} title={_id} />
      ) : null}
    </Layout>
  );
}
