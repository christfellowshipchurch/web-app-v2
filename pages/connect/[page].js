import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import {
  ArticleLink,
  CampusFilter,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  MeetTheStaff,
  PageSplit,
  Quote,
} from 'components';
import { Box, Button, CardGrid } from 'ui-kit';
import { getChildrenByType, getIdSuffix, getItemId } from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';

export default function Page({ data }) {
  const router = useRouter();

  const { loading, error, node } = data;

  if (loading) {
    return null;
  } else if (error) {
    router.push('/connect');
  }

  const generalChildren = getChildrenByType(
    node.childContentItemsConnection?.edges,
    IDS.GENERAL
  );

  const stories = getChildrenByType(
    node.childContentItemsConnection?.edges,
    IDS.STORIES
  );

  const story = stories.length ? stories[0] : null;
  const cta = node.ctaLinks?.length ? node.ctaLinks?.[0] : null;
  const extraCTA = node.ctaLinks?.length ? node.ctaLinks?.slice(1) : null;
  const staff = node.staff?.members || [];

  return (
    <Layout title={`Connect - ${node.title}`} bg="bg_alt">
      <MainPhotoHeader
        src={node.coverImage?.sources?.[0].uri || ''}
        title={node.title}
        subtitle={node.subtitle}
        summary={node.summary}
      />
      {generalChildren.length ? (
        <CampusFilter
          px="xxl"
          py="xl"
          filterWidth="200px"
          data={generalChildren}
        >
          {({ filteredData }) => (
            <CardGrid columns="2" gridColumnGap="xl">
              {generalChildren.map(({ node }, i) => (
                <ArticleLink
                  key={node.id}
                  imageSrc={node.coverImage?.sources?.[0]?.uri}
                  justify={i % 2 === 0 ? 'left' : 'right'}
                  title={node.title}
                  description={node.summary}
                  urlText={node.featureFeed?.features[0]?.action.title}
                  url={`/page/${getIdSuffix(node.id)}`}
                />
              ))}
            </CardGrid>
          )}
        </CampusFilter>
      ) : null}
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
      {node.htmlContent && (
        <Box
          px="xxl"
          py="xl"
          dangerouslySetInnerHTML={{ __html: node.htmlContent }}
        />
      )}
      {staff?.length ? (
        <>
          <PageSplit title="Meet the Staff" />
          <Box
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
          </Box>
        </>
      ) : null}
      {extraCTA?.length ? (
        <>
          <PageSplit title="Connect" />
          <Box
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
          </Box>
        </>
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
      skip: !context.params.page,
      fetchPolicy: 'no-cache',
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        data: pageResponse?.data,
      },
    };
  } catch (e) {
    return {
      redirect: { destination: '/connect', permanent: false },
    };
  }
}
