import { Layout } from 'components';
import { AlgoliaSearch } from 'components/Search/Search';
import { CardGrid, Heading, Text } from 'ui-kit';

export default function SearchPage() {
  return (
    <Layout title="Search">
      <CardGrid px="xxl" py="xl" gridColumnGap="xl" columns="1" width="100%">
        <Heading
          color="neutrals.900"
          variant="h2"
          fontWeight="800"
          textAlign="center"
        >
          Need to find something?
        </Heading>
        <Text maxWidth="600px" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          lectus elementum montes, ut fringilla dignissim donec massa interdum.
          Mus scelerisque mauris imperdiet scelerisque semper sed dignissim
          suscipit ullamcorper. Integer od
        </Text>
        <AlgoliaSearch />
      </CardGrid>
    </Layout>
  );
}
