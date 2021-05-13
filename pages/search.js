import { Layout } from 'components';
import { Search } from 'components';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { CardGrid } from 'ui-kit';

export function SearchPageContent({ filtering, setFiltering }) {
  const theme = useTheme();
  return (
    <CardGrid
      px={{ _: 'l', md: 'xl', lg: 'xxl' }}
      py={{ _: 'l', md: 'xl', lg: 'xxl' }}
      gridColumnGap="xl"
      columns="1"
      width="100%"
      backgroundColor={`${theme.colors.gray}50`}
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
      overflowY={filtering ? { _: 'hidden', md: 'auto' } : 'auto'}
      height={filtering ? { _: '100vh', md: '100%' } : '100%'}
    >
      <SearchPageContent filtering={filtering} setFiltering={setFiltering} />
    </Layout>
  );
}
