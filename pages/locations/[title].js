import React from 'react';
import { useRouter } from 'next/router';

import { ContentItemProvider } from 'providers';
import { LocationSingle } from 'components';

export default function Location(props = {}) {
  const router = useRouter();
  const { query } = router;
  const { title } = query;

  const options = {
    variables: {
      pathname: `locations/${title}`,
    },
  };

  return <ContentItemProvider Component={LocationSingle} options={options} />;
}
