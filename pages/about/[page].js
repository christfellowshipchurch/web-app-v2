import {
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
import { useEffect } from 'react';
import { CardGrid, Longform, Section } from 'ui-kit';
import { getChannelId, getIdSuffix, getMetaData, getSlugFromURL } from 'utils';

export default function Page({
  data = {},
  campuses,
  dropdownData,
  relatedContent,
}) {
  const router = useRouter();

  // next.config.js isn't working for redirects when clicking on the link to redirect from
  useEffect(() => {
    if (router.query?.page === 'meet-our-staff') {
      router.replace('/search?category=Staff&p=1');
    }
  }, [router]);

  if (data.loading || router.isFallback) {
    return null;
  }

  const childContent = data.childContentItemsConnection?.edges;
  const ctaLinks = data.ctaLinks;

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
    <Layout meta={getMetaData(data)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={data.coverImage?.sources?.[0].uri || ''}
        title={data.title}
        subtitle={data.subtitle}
        summary={data.summary}
        showTitleOverImage={data.showTitleOverImage}
        mb={{ _: 'l', md: 'xxl' }}
        events={links?.length ? links : null}
      />
      {data.htmlContent && (
        <Section>
          <Longform
            mb={{ _: 'l', md: 'xxl' }}
            dangerouslySetInnerHTML={{ __html: data.htmlContent }}
          />
        </Section>
      )}
      {childContent?.length ? (
        <Section>
          <CampusFilter
            mb={{ _: 'l', md: 'xxl' }}
            filterWidth="200px"
            data={childContent}
            campuses={campuses}
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
                    description={node.summaryHTML}
                    actions={
                      node.linkText
                        ? [
                            {
                              label: node.linkText,
                              onClick: () => {
                                router.push(
                                  node.linkURL ||
                                    `/${getSlugFromURL(node?.sharing?.url)}`
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
        </Section>
      ) : null}
      {ctaLinks?.length ? (
        <Section bg="rgba(142, 142, 147, 0.12)">
          <CardGrid my={{ _: 'l', md: 'xxl' }} columns="1">
            {ctaLinks?.map((cta, i) => (
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
      {data.secondaryHTML && (
        <Section>
          <Longform
            mb={{ _: 'l', md: 'xxl' }}
            dangerouslySetInnerHTML={{ __html: data.secondaryHTML }}
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
  });
  const pageData = pageResponse?.data?.getContentBySlug;

  const submenuLinks = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.ABOUT_PAGES),
    },
  });

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
      data: pageData,
      submenuLinks:
        submenuLinks?.data?.node?.childContentItemsConnection?.edges,
      campuses: campusesResponse?.data?.campuses || [],
      relatedContent: ministryResponse?.data,
    },
    revalidate: 60, // In seconds
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const pagesResponse = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: `ContentChannel:${IDS.ABOUT_PAGES}`,
    },
  });

  const aboutPages = pagesResponse?.data?.node?.childContentItemsConnection?.edges?.map(
    ({ node }) => node
  );

  // Get the paths we want to pre-render
  const paths = aboutPages.map(({ sharing }) => ({
    params: { page: getSlugFromURL(sharing?.url) },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
