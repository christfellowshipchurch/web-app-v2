import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import {
  ArticleLink,
  CampusFilter,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
} from 'components';
import IDS from 'config/ids';
import { CardGrid, Longform, Section } from 'ui-kit';
import { getIdSuffix, getItemId, getMetaData } from 'utils';
import { initializeApollo } from 'lib/apolloClient';

export default function Page({ data = {} }) {
  const router = useRouter();

  const { loading, error, node = {} } = data;

  if (loading || router.isFallback) {
    return null;
  } else if (error) {
    router.push('/next-steps');
  }

  const childContent = node.childContentItemsConnection?.edges;

  return (
    <Layout meta={getMetaData(node)} bg="bg_alt">
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
      />
      <Section>
        <CardGrid px="xxl" py="xl" columns="1">
          {node.ctaLinks?.map((cta, i) => (
            <MarketingHeadline
              key={i}
              image={{
                src: cta.image?.sources?.[0]?.uri,
              }}
              justify={i % 2 === 0 ? 'left' : 'right'}
              title={cta.title}
              description={cta.body}
              actions={[
                {
                  label: cta.buttonText,
                  onClick: () => router.push(cta.buttonLink),
                },
              ]}
            />
          ))}
        </CardGrid>
      </Section>
      {node.htmlContent && (
        <Section>
          <Longform
            px="xxl"
            py="xl"
            dangerouslySetInnerHTML={{ __html: node.htmlContent }}
          />
        </Section>
      )}
      {childContent?.length ? (
        <Section>
          <CampusFilter
            px="xxl"
            py="xl"
            filterWidth="200px"
            data={childContent}
          >
            {({ filteredData }) => (
              <CardGrid columns="2" gridColumnGap="xl">
                {filteredData.map(({ node }, i) => (
                  <ArticleLink
                    key={node.id}
                    imageSrc={node.coverImage?.sources?.[0]?.uri}
                    justify={i % 2 === 0 ? 'left' : 'right'}
                    title={node.title}
                    description={node.summary}
                    urlText={node.linkText}
                    url={node.linkURL || `/page/${getIdSuffix(node.id)}`}
                  />
                ))}
              </CardGrid>
            )}
          </CampusFilter>
        </Section>
      ) : null}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.page),
    },
    skip: !context.params.page,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: pageResponse?.data || {},
    },
  };
}


export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const pagesResponse = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: `ContentChannel:${IDS.NEXT_STEPS_PAGES}`,
    },
  })

  const nextStepsPages = pagesResponse?.data?.node?.childContentItemsConnection?.edges?.map(({ node }) => node);

  // Get the paths we want to pre-render
  const paths = nextStepsPages.map(({ id }) => ({
    params: { page: getIdSuffix(id) },
  }))

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true }
}