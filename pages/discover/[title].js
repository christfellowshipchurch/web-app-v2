import { useRouter } from 'next/router';

import { Layout } from 'components';
export default function Content(props) {
  const router = useRouter();

  return <Layout title={router.query.title}>{router.query.title}</Layout>;
}
