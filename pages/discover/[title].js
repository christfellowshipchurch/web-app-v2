import { useRouter } from 'next/router';
import capitalize from 'lodash/capitalize';

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
    <Layout title={query?.title}>
      <Box as="h1" mb="l">
        {capitalize(query?.title)}
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
            mx="s"
            scaleCard={false}
            scaleCoverImage={true}
            title={n?.title}
          />
        ))}
      </CardGrid>
    </Layout>
  );
}
