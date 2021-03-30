import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { CampusFilter, Layout, MarketingHeadline } from 'components';
import { getChildrenByType, getItemId } from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';
import { CardGrid, Longform } from 'ui-kit';

export default function Page({ data }) {
  const router = useRouter();

  const generalChildren = getChildrenByType(
    data.childContentItemsConnection?.edges,
    IDS.GENERAL
  );

  return (
    <Layout
      title={`About - ${data.title}`}
      bg="bg_alt"
      headerPhoto={{
        src: data.coverImage?.sources?.[0].uri || '',
        title: data.title,
        subtitle: data.subtitle,
        summary: data.summary,
      }}
    >
      {data.htmlContent && (
        <Longform
          px="xxl"
          py="xl"
          dangerouslySetInnerHTML={{ __html: data.htmlContent }}
        />
      )}
      {generalChildren.length ? (
        <CampusFilter
          px="xxl"
          py="xl"
          filterWidth="200px"
          data={generalChildren}
        >
          {({ filteredData }) => (
            <CardGrid columns="1">
              {filteredData.map(({ node }, i) => (
                <MarketingHeadline
                  key={node.id}
                  image={{
                    src: node.coverImage?.sources?.[0]?.uri,
                  }}
                  justify={i % 2 === 0 ? 'left' : 'right'}
                  title={node.title}
                  description={node.summary}
                  actions={
                    node.featureFeed?.features?.length
                      ? [
                          {
                            label: node.featureFeed?.features[0].action.title,
                            onClick: () => {
                              router.push(
                                node.featureFeed?.features[0].action.relatedNode
                                  .url
                              );
                            },
                          },
                        ]
                      : []
                  }
                />
              ))}
            </CardGrid>
          )}
        </CampusFilter>
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
        data: pageResponse?.data?.node,
      },
    };
  } catch (e) {
    return {
      redirect: { destination: '/about', permanent: false },
    };
  }
}
