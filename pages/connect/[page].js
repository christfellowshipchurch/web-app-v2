import {
  ArticleLink,
  ArticleLinks,
  CampusFilter,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  PageSplit,
  Quote,
} from 'components';
import IDS from 'config/ids';
import { GET_CAMPUSES } from 'hooks/useCampuses';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
// import { GET_STAFF } from 'hooks/useStaff';
import { GET_MINISTRY_CONTENT } from 'hooks/useMinistryContent';
import { GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG } from 'hooks/useUniversalContentItemBySlug';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import { Button, CardGrid, Longform, Section } from 'ui-kit';
import {
  getChildrenByType,
  getIdSuffix,
  getMetaData,
  getSlugFromURL,
} from 'utils';

export default function Page({
  data = {},
  staff = [],
  relatedContent = {},
  campuses,
  dropdownData,
}) {
  const router = useRouter();

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
  const ctaLinks = node.ctaLinks.filter(cta => cta.image?.sources?.[0]?.uri);
  const extraCTA = node.ctaLinks.filter(cta => !cta.image?.sources?.[0]?.uri);

  let links = relatedContent?.getMinistryContent?.length
    ? relatedContent.getMinistryContent
    : [];

  links = links
    .filter(
      link =>
        getSlugFromURL(link?.sharing?.url) !== router.query.page &&
        (getIdSuffix(link.parentChannel?.id) === IDS.CHANNELS.EVENTS ||
          getIdSuffix(link.parentChannel?.id) === IDS.CHANNELS.ARTICLES)
    )
    .slice(0, 4);

  return (
    <Layout meta={getMetaData(node)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
        showTitleOverImage={node.showTitleOverImage}
        mb={{
          _:
            ((node.title || node.subtitle || node.summary) &&
              node.showTitleOverImage) ||
            !links?.length
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
                {filteredData.map(({ node }) => (
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
      {ctaLinks?.length || story ? (
        <Section>
          <CardGrid
            mb={{ _: 'l', md: 'xxl' }}
            gridTemplateColumns={
              story
                ? { _: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }
                : 'repeat(1, 1fr)'
            }
          >
            {ctaLinks?.length ? (
              <Section mb={{ _: 0 }}>
                <CardGrid mb={{ _: 'l', md: 'xxl' }} columns="1">
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
      {/*staff?.length ? (
        <>
          <PageSplit title="Meet the Staff" />
          <Section
            mb={{ _: 'l', md: 'xxl' }}
            mt="l"
            contentProps={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            {staff.map(person => (
              <MeetTheStaff
                key={person.id}
                id={person.id}
                src={person.photo?.uri}
                name={`${person.firstName} ${person.lastName}`}
                description={person.position}
              />
            ))}
          </Section>
        </>
      ) : null*/}
      {extraCTA?.length ? (
        <>
          <PageSplit title="Connect" />
          <Section
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

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG,
    variables: {
      slug: params.page,
    },
    skip: !params.page,
  });

  const pageData = pageResponse?.data?.getContentBySlug;

  let staffResponse;
  // if (pageData?.ministry) {
  //   staffResponse = await apolloClient.query({
  //     query: GET_STAFF,
  //     variables: {
  //       ministry: pageData?.ministry,
  //     },
  //   });
  // }

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
      staff: staffResponse ? staffResponse.data.getStaff : [],
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
