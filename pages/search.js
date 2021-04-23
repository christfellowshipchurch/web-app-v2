import { Layout } from 'components';
import { Search } from 'components';
import { useState } from 'react';
import { CardGrid } from 'ui-kit';

export function SearchPageContent({ filtering, setFiltering }) {
  return (
    <CardGrid
      px={{ _: 'l', md: 'xxl' }}
      py={{ _: 'l', md: 'xxl' }}
      gridColumnGap="xl"
      columns="1"
      width="100%"
      bg="bg"
    >
      <Search filtering={filtering} setFiltering={setFiltering} />
    </CardGrid>
  );
}

export default function SearchPage() {
  const [filtering, setFiltering] = useState(false);
  return (
    <Layout
      title="Search"
      overflowY={filtering ? { _: 'hidden', lg: 'auto' } : 'auto'}
      height={filtering ? { _: '100vh', lg: '100%' } : '100%'}
    >
      <SearchPageContent filtering={filtering} setFiltering={setFiltering} />
    </Layout>
  );
}
