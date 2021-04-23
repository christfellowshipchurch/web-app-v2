import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'components';

export default function Messages(props = {}) {
  const router = useRouter();

  console.log('HELLO');

  /**
   * There is no current need to have a unique landing page for /messages, so instead we'll just redirect back to the Discover page
   */
  useEffect(() => {
    router.push('/discover');
  }, []);

  return <Layout title="Messages"></Layout>;
}
