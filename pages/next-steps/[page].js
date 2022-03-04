import {
  ArticleLink,
  ArticleLinks,
  CampusFilter,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
} from 'components';
import IDS from 'config/ids';
import { GET_CAMPUSES } from 'hooks/useCampuses';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { GET_MINISTRY_CONTENT } from 'hooks/useMinistryContent';
import { GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG } from 'hooks/useUniversalContentItemBySlug';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import { CardGrid, Longform, Section } from 'ui-kit';
import { getIdSuffix, getMetaData, getSlugFromURL } from 'utils';

export default function Page({
  data = {},
  campuses,
  dropdownData,
  relatedContent,
}) {
  const router = useRouter();

  const { loading, error, getContentBySlug: node = {} } = data;

  if (loading || router.isFallback) {
    return null;
  } else if (error) {
    router.push('/next-steps');
  }

  const childContent = node.childContentItemsConnection?.edges;

  let links = relatedContent?.getMinistryContent?.length
    ? relatedContent.getMinistryContent.slice(0, 4)
    : [];

  links = links.filter(
    link =>
      getSlugFromURL(link?.sharing?.url) !== router.query.page &&
      (getIdSuffix(link.parentChannel?.id) === IDS.CHANNELS.EVENTS ||
        getIdSuffix(link.parentChannel?.id) === IDS.CHANNELS.ARTICLES)
  );

  return (
    <Layout meta={getMetaData(node)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        showTitleOverImage={node.showTitleOverImage}
        summary={node.summary}
        mb={{
          _: links?.length
            ? 0
            : (node.title || node.subtitle || node.summary) &&
              node.showTitleOverImage
            ? 'xl'
            : 0,
          lg: 'xxl',
        }}
        events={links?.length ? links : null}
      />
      {node.htmlContent && (
        <Section>
          <Longform
            mb={{ _: 'l', md: 'xxl' }}
            dangerouslySetInnerHTML={{ __html: node.htmlContent }}
          />
        </Section>
      )}
      {node.ctaLinks?.length ? (
        <Section mb={{ _: 0 }}>
          <CardGrid mb={{ _: 'l', md: 'xxl' }} columns="1">
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
      ) : null}
      {childContent?.length ? (
        <Section>
          <CampusFilter
            mb={{ _: 'l', md: 'xxl' }}
            filterWidth="200px"
            data={childContent}
            campuses={campuses}
          >
            {({ filteredData }) => (
              <ArticleLinks>
                {filteredData.map(({ node }, i) => (
                  <ArticleLink
                    key={node.id}
                    imageSrc={node.coverImage?.sources?.[0]?.uri}
                    title={node.title}
                    description={node.summary}
                    urlText={node.linkText}
                    url={
                      node.linkURL || `/${getSlugFromURL(node?.sharing?.url)}`
                    }
                  />
                ))}
              </ArticleLinks>
            )}
          </CampusFilter>
        </Section>
      ) : null}
      {node.secondaryHTML && (
        <Section>
          <Longform
            mb={{ _: 'l', md: 'xxl' }}
            dangerouslySetInnerHTML={{ __html: node.secondaryHTML }}
          />
        </Section>
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG,
    variables: {
      slug: context.params.page,
    },
    skip: !context.params.page,
  });

  const pageData = pageResponse?.data?.getContentBySlug;

  const ministryResponse = await apolloClient.query({
    query: GET_MINISTRY_CONTENT,
    variables: {
      ministry: pageData?.ministry,
    },
  });

  const campusesResponse = await apolloClient.query({
    query: GET_CAMPUSES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: pageResponse?.data || {},
      relatedContent: ministryResponse?.data,
      campuses: campusesResponse?.data?.campuses || [],
    },
    revalidate: 60, // In seconds
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const pagesResponse = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: `ContentChannel:${IDS.NEXT_STEPS_PAGES}`,
    },
  });

  const nextStepsPages = pagesResponse?.data?.node?.childContentItemsConnection?.edges?.map(
    ({ node }) => node
  );

  // Get the paths we want to pre-render
  const paths = nextStepsPages.map(({ sharing }) => ({
    params: { page: getSlugFromURL(sharing?.url) },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
