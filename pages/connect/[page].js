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
  MeetTheStaff,
  PageSplit,
  Quote,
} from 'components';
import { Button, CardGrid, Longform, Section } from 'ui-kit';
import {
  getChildrenByType,
  getMetaData,
  getSlugFromURL,
} from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';
import { Info } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { GET_STAFF } from 'hooks/useStaff';
import { GET_MINISTRY_CONTENT } from 'hooks/useMinistryContent';
import { GET_CAMPUSES } from 'hooks/useCampuses';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';

export default function Page({
  data = {},
  staff = [],
  relatedContent = {},
  campuses,
  dropdownData,
}) {
  const router = useRouter();
  const theme = useTheme();

  const { loading, error, getContentBySlug: node } = data;

  if (loading || router.isFallback) {
    return null;
  } else if (error) {
    router.push('/connect');
  }

  const childContent = node.childContentItemsConnection?.edges;

  const stories = getChildrenByType(
    node.childContentItemsConnection?.edges,
    IDS.STORIES
  );

  const story = stories.length ? stories[0] : null;
  const cta = node.ctaLinks?.length ? node.ctaLinks?.[0] : null;
  const extraCTA = node.ctaLinks?.length ? node.ctaLinks?.slice(1) : null;

  let links = relatedContent?.getMinistryContent?.length
    ? relatedContent.getMinistryContent.slice(0, 4)
    : [];

  links = links.filter(
    link => getSlugFromURL(link?.sharing?.url) !== router.query.page
  );

  return (
    <Layout meta={getMetaData(node)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
        showTitleOverImage={node.showTitleOverImage}
        mb={{ _: 'xl', lg: 'xxl' }}
      />
      {links?.length ? (
        <Section>
          <EventsCallout
            mx={{ _: 0, lg: 'xl' }}
            mb={{ _: 'l', md: 'xxl' }}
            my={{ lg: '-6.25rem' }}
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
      {childContent?.length ? (
        <Section>
          <CampusFilter
            px={{ _: 'l', md: 'xxl' }}
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
                    justify={i % 2 === 0 ? 'left' : 'right'}
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
      {cta || story ? (
        <Section>
          <CardGrid
            px={{ _: 'l', md: 'xxl' }}
            mb={{ _: 'l', md: 'xxl' }}
            gridTemplateColumns={
              story
                ? { _: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }
                : 'repeat(1, 1fr)'
            }
          >
            {cta ? (
              <MarketingHeadline
                image={
                  story
                    ? null
                    : {
                        src: cta.image?.sources?.[0]?.uri,
                      }
                }
                title={cta.title}
                description={cta.body}
                actions={[
                  {
                    label: cta.buttonText,
                    onClick: () => router.push(cta.buttonLink),
                  },
                ]}
              />
            ) : null}
            {story ? (
              <Quote
                color="quaternary"
                title={story.node.title}
                attribution={story.node.attribution}
                actionLabel="Full story"
                actionLink="/lh-story-quote"
                text={story.node.summary}
                avatar={story.node.coverImage?.sources[0]?.uri}
                alignment="left"
              />
            ) : null}
          </CardGrid>
        </Section>
      ) : null}
      {node.htmlContent && (
        <Section>
          <Longform
            px={{ _: 'l', md: 'xxl' }}
            mb={{ _: 'l', md: 'xxl' }}
            dangerouslySetInnerHTML={{ __html: node.htmlContent }}
          />
        </Section>
      )}
      {staff?.length ? (
        <>
          <PageSplit title="Meet the Staff" />
          <Section
            px={{ _: 'l', md: 'xxl' }}
            mb={{ _: 'l', md: 'xxl' }}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {staff.map(person => (
              <MeetTheStaff
                key={person.id}
                src={person.photo?.uri}
                name={`${person.firstName} ${person.lastName}`}
                description={person.campus?.name}
              />
            ))}
          </Section>
        </>
      ) : null}
      {extraCTA?.length ? (
        <>
          <PageSplit title="Connect" />
          <Section
            px={{ _: 'l', md: 'xxl' }}
            mb={{ _: 'l', md: 'xxl' }}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {extraCTA.map(cta => (
              <Button onClick={() => router.push(cta.buttonLink)}>
                {cta.buttonText}
              </Button>
            ))}
          </Section>
        </>
      ) : null}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_BY_SLUG,
    variables: {
      slug: params.page,
    },
    skip: !params.page,
  });

  const pageData = pageResponse?.data?.getContentBySlug;

  let staffResponse;
  if (pageData?.getContentBySlug?.ministry) {
    staffResponse = await apolloClient.query({
      query: GET_STAFF,
      variables: {
        ministry: pageData?.ministry,
      },
    });
  }

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
      data: pageResponse?.data,
      staff: staffResponse ? staffResponse.data : [],
      relatedContent: ministryResponse?.data,
      campuses: campusesResponse?.data?.campuses || [],
    },
    revalidate: 60, // In seconds
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const pagesResponse = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: `ContentChannel:${IDS.CONNECT_PAGES}`,
    },
  });

  const connectPages = pagesResponse?.data?.node?.childContentItemsConnection?.edges?.map(
    ({ node }) => node
  );

  // Get the paths we want to pre-render
  const paths = connectPages.map(({ sharing }) => ({
    params: { page: getSlugFromURL(sharing?.url) },
  }));

  // Fallback true - if a page doesn't exist we will render it on the fly.
  return { paths, fallback: true };
}
