import { useRouter } from 'next/router';
import { useDiscoverFilterCategoriesPreview } from 'hooks';
import { Layout, CustomLink } from 'components';
import { getURLFromType, slugify } from 'utils';
import { DefaultCard, CardGrid } from 'ui-kit';

export default function Content(props) {
  const { query } = useRouter();
  const type = 'UniversalContentItem';
  const contentId = type.concat(':', query?.id);

  const { loading, error, categories } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId },
    fetchPolicy: 'cache-and-network',
  });
  const content = categories?.map(edge => edge.node);

  return (
    <Layout title={query?.title}>
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
