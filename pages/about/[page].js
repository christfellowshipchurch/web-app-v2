import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { Layout, MainPhotoHeader, MarketingHeadline } from 'components';
import { getChannelId, getChildrenByType, getItemId } from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';

export default function Page({ data }) {
  const router = useRouter();

  const { loading, error, node } = data;

  if (loading) {
    return null;
  } else if (error) {
    router.push('/about');
  }

  const generalChildren = getChildrenByType(
    node.childContentItemsConnection?.edges,
    IDS.GENERAL
  );

  return (
    <Layout title={`About - ${node.title}`} bg="bg_alt">
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
      />
      {node.htmlContent && (
        <Box
          px="xxl"
          py="xl"
          dangerouslySetInnerHTML={{ __html: node.htmlContent }}
        />
      )}
      {generalChildren.length ? (
        <CardGrid px="xxl" py="xl" columns="1">
          {generalChildren.map(({ node }, i) => (
            <MarketingHeadline
              image={{
                src: node.coverImage?.sources?.[0]?.uri,
              }}
              justify={i % 2 === 0 ? 'left' : 'right'}
              title={node.title}
              description={node.summary}
              actions={[
                {
                  label: node.featureFeed?.features[0].action.title,
                  onClick: () => {
                    router.push(
                      node.featureFeed?.features[0].action.relatedNode.url
                    );
                  },
                },
              ]}
            />
          ))}
        </CardGrid>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  try {
    const pageResponse = await apolloClient.query({
      query: GET_CONTENT_ITEM,
      variables: {
        itemId: getItemId(context.params.page),
      },
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        data: pageResponse?.data,
      },
    };
  } catch (e) {
    return {
      redirect: { destination: '/about', permanent: false },
    };
  }
}
