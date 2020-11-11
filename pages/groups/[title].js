import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GroupProvider } from '../../providers';
import { useAuthState } from '../../providers/AuthProvider';
import { GroupSingle, Layout } from '../../components';

export default function Group(props) {
  const { authenticated } = useAuthState();
  const router = useRouter();
  const { title, id } = router.query;

  // If we don't have an ID or the user isn't authenticated,
  // then we're just going to redirect the user to the /groups page.
  useEffect(() => {
    if (!id || !authenticated) router.push('/groups');
  }, [id, authenticated, router]);

  return (
    <Layout title={title}>
      <GroupProvider Component={GroupSingle} title={id} />
    </Layout>
  );
}
