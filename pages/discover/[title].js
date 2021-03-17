import { useRouter } from 'next/router';
import capitalize from 'lodash/capitalize';
import { useDiscoverFilterCategoriesPreview } from 'hooks';
import { Layout, CustomLink } from 'components';
import { getURLFromType } from 'utils';
import { Box, DefaultCard, CardGrid } from 'ui-kit';

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
            as="a"
            key={n?.id}
            href={getURLFromType(n, n?.title)}
            mx="s"
            boxShadow="none"
            scaleCard={false}
            scaleCoverImage={true}
            Component={DefaultCard}
            coverImage={n?.coverImage?.sources[0]?.uri}
            title={n?.title}
            description={n?.summary}
          />
        ))}
      </CardGrid>
    </Layout>
  );
}
