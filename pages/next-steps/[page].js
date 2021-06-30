import { useRouter } from 'next/router';

import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import {
  ArticleLink,
  ArticleLinks,
  CampusFilter,
  EventCallout,
  EventsCallout,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
} from 'components';
import IDS from 'config/ids';
import { CardGrid, Longform, Section } from 'ui-kit';
import { getIdSuffix, getMetaData, getSlugFromURL } from 'utils';
import { initializeApollo } from 'lib/apolloClient';
import { GET_CAMPUSES } from 'hooks/useCampuses';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';
import { useTheme } from 'styled-components';
import { Info } from 'phosphor-react';
import { GET_MINISTRY_CONTENT } from 'hooks/useMinistryContent';

export default function Page({
  data = {},
  campuses,
  dropdownData,
  relatedContent,
}) {
  const theme = useTheme();
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
        mb={{ _: 'xl', lg: 'xxl' }}
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        showTitleOverImage={node.showTitleOverImage}
        summary={node.summary}
      />
      {links?.length ? (
        <Section contentProps={{ p: '0 !important' }}>
          <EventsCallout
            mx={{ _: 0, lg: 'xl' }}
            mb={{ _: 'l', md: 'xxl' }}
            my={{ lg: `-${theme.space.xxl}` }}
            title="News & Events"
            icon={
              <Info
                size={24}
                style={{
                  color: theme.colors.neutrals[900],
                  opacity: '60%',
                  marginRight: theme.space.xxs,
                }}
              />
            }
          >
            {links.map(link => (
              <EventCallout
                key={link.id}
                title={link.title}
                description={link.subtitle}
                imageSrc={link.coverImage?.sources?.[0]?.uri}
                onClick={() =>
                  router.push(`/${getSlugFromURL(link?.sharing?.url)}`)
                }
              />
            ))}
          </EventsCallout>
        </Section>
      ) : null}
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
    query: GET_CONTENT_BY_SLUG,
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
