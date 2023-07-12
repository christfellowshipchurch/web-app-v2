import { useRouter } from 'next/router';

import { ContentItemProvider } from 'providers';
import { EventSingle, Layout } from 'components';

export default function Event(props) {
  const router = useRouter();
  const { title } = router.query;

  const options = {
    variables: {
      pathname: `events/${title}`,
    },
  };

  return (
    <Layout title={title}>
      <ContentItemProvider Component={EventSingle} options={options} />
    </Layout>
  );
}
