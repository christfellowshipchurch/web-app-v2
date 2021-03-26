import { useRouter } from 'next/router';
import startCase from 'lodash/startCase';

import { getURLFromType } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

import { Box, DefaultCard, CardGrid } from 'ui-kit';
import { Layout, CustomLink } from 'components';

export default function Content(props) {
  const { query } = useRouter();
  const type = 'UniversalContentItem';
  const contentId = type.concat(':', query?.id);

  const { categories } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId },
    fetchPolicy: 'cache-and-network',
  });

  const content = categories?.map(edge => edge.node);

  return (
    <Layout title={startCase(query?.title)}>
      <Box as="h1" mb="l">
        {startCase(query?.title)}
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
