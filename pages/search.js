import { Layout } from 'components';
import { Search } from 'components';
import { useState } from 'react';
import { CardGrid, Heading, Text } from 'ui-kit';

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
      <Heading
        color="neutrals.900"
        variant="h2"
        fontWeight="800"
        textAlign="center"
      >
        Need to find something?
      </Heading>
      <Text
        variant="s"
        color="neutrals.900"
        opacity="60%"
        fontWeight="400"
        mb="xl"
        maxWidth="700px"
        textAlign="center"
      >
        Search for sermons and events. Filter by categories such as campus or
        schedule. You can even search for staff!
      </Text>
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
