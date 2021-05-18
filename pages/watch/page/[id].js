import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { Layout, MainPhotoHeader } from 'components';
import { Longform, Section } from 'ui-kit';
import { getItemId, getMetaData } from 'utils';
import { initializeApollo } from 'lib/apolloClient';

export default function Page({ data, dropdownData }) {
  const router = useRouter();

  const { loading, error, node } = data;

  if (loading) {
    return null;
  } else if (error) {
    router.push('/watch');
  }

  return (
    <Layout meta={getMetaData(node)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
      />
      {node.htmlContent && (
        <Section>
          <Longform
            py="xl"
            px={{ _: 'l', md: 'xxl' }}
            dangerouslySetInnerHTML={{ __html: node.htmlContent }}
          />
        </Section>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.id),
    },
    skip: !context.params.id,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: pageResponse?.data,
    },
  };
}
