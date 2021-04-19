import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import {
  ArticleLink,
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
import { getChildrenByType, getIdSuffix, getItemId, getMetaData } from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';
import { Info } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { GET_STAFF } from 'hooks/useStaff';

export default function Page({ data, staff }) {
  const router = useRouter();
  const theme = useTheme();

  const { loading, error, node } = data;

  if (loading) {
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

  const links = node?.relatedContent?.length
    ? node.relatedContent.splice(0, 4)
    : null;

  return (
    <Layout meta={getMetaData(node)} bg="bg_alt">
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
      />
      {links?.length ? (
        <Section>
          <EventsCallout
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
            {links.splice(0, 4).map(({ node: link }) => (
              <EventCallout
                key={link.id}
                title={link.title}
                description={link.subtitle}
                imageSrc={link.coverImage?.sources?.[0]?.uri}
                onClick={() => router.push(`/page/${getIdSuffix(link.id)}`)}
              />
            ))}
          </EventsCallout>
        </Section>
      ) : null}
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
      <Section>
        <CardGrid px="xxl" py="xl" columns={story ? 2 : 1}>
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
      {node.htmlContent && (
        <Section>
          <Longform
            px="xxl"
            py="xl"
            dangerouslySetInnerHTML={{ __html: node.htmlContent }}
          />
        </Section>
      )}
      {staff?.length ? (
        <>
          <PageSplit title="Meet the Staff" />
          <Section
            px="xl"
            py="l"
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
            px="xl"
            py="l"
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

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.page),
    },
    skip: !context.params.page,
  });

  let staffResponse;
  if (pageResponse?.data?.node?.ministry) {
    staffResponse = await apolloClient.query({
      query: GET_STAFF,
      variables: {
        ministry: pageResponse?.data?.node?.ministry,
      },
    });
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: pageResponse?.data,
      staff: staffResponse ? staffResponse.data : [],
    },
  };
}
