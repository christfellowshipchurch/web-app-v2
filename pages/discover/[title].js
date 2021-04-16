import { useRouter } from 'next/router';
import startCase from 'lodash/startCase';

import { getURLFromType } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

import { Box, DefaultCard, CardGrid, Icon, Button } from 'ui-kit';
import { Layout, CustomLink } from 'components';

export default function Content(props) {
  const { query, back } = useRouter();
  const type = 'UniversalContentItem';
  const contentId = type.concat(':', query?.id);

  const { categories } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 21 },
    fetchPolicy: 'cache-and-network',
  });

  const content = categories?.map(edge => edge.node);

  return (
    <Layout title={startCase(query?.title)}>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        mb="l"
      >
        <Box as="h1" mb="0">
          {startCase(query?.title)}
        </Box>
        <Button variant="link" onClick={() => back()} pr="0">
          <Icon name="angleLeft" /> Back
        </Button>
      </Box>
      <CardGrid columns="3" mb="xl">
        {content.map((n, i) => (
          <CustomLink
            Component={DefaultCard}
            as="a"
            boxShadow="none"
            coverImage={n?.coverImage?.sources[0]?.uri}
            description={n?.summary}
            href={getURLFromType(n, n?.title)}
            key={n?.id}
            scaleCard={false}
            scaleCoverImage={true}
            title={n?.title}
          />
        ))}
      </CardGrid>
    </Layout>
  );
}
