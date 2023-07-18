import { useRouter } from 'next/router';
import { ContentItemProvider } from 'providers';
import { ContentSingle, Layout } from 'components';

export default function Devotionals(props) {
  const router = useRouter();
  const { title } = router.query;

  const options = {
    variables: {
      pathname: `devotionals/${title}`,
    },
  };

  return (
    <Layout title={title}>
      <ContentItemProvider Component={ContentSingle} options={options} />
    </Layout>
  );
}