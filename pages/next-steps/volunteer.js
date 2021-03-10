import {
  ArticleLink,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
} from 'components';
import IDS from 'config/ids';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { initializeApollo } from 'lib/apolloClient';
import { Box, CardGrid, Heading } from 'ui-kit';
import { getChildrenByType, noop } from 'utils';

export default function Baptism(props) {
  const pageChildren = props.page?.childContentItemsConnection?.edges;
  const articles = getChildrenByType(pageChildren, IDS.ARTICLES);

  const explorations = articles.map(({ node: article }) => ({
      title: article.title,
      description: article.summary,
      url: '/',
      urlText: 'Learn More',
      imageSrc: article.images?.[0]?.sources?.[0]?.uri,
  }));

  const exploreColumns = [[], []];

  for (let i = 0; i < explorations.length; ++i) {
    if (i < explorations.length / 2) {
      exploreColumns[0].push(explorations[i]);
    } else {
      exploreColumns[1].push(explorations[i]);
    }
  }

  const exploreRowCount = exploreColumns[0].length;

  return (
    <Layout title="Next Steps - Volunteer" bg="bg_alt">
      <MainPhotoHeader
        src={props.page?.coverImage?.sources?.[0]?.uri}
        content={
          <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
            <Heading
              color="neutrals.100"
              variant="h2"
              opacity="50%"
              fontWeight="800"
            >
              {`LH ${props.page?.title}`}
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h1"
              fontWeight="800"
              textTransform="uppercase"
            >Lorem ipsum doler sit itmut del fal some big bold header.
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h3"
              fontWeight="700"
              maxWidth="360px"
            >Lorem ipsum doler sit itmut del fal some big bold header.
            </Heading>
          </Box>
        }
      />
      <CardGrid px="xxl" my="xxl" columns="1" gridRowGap="xxl">
        <MarketingHeadline
          image={{
            src:
              '/next-steps/volunteer-01.png',
          }}
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Volunteer at&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                Long Hollow
              </Heading>
            </>
          }
          description="There are plenty of opportunities where you can plug in and begin volunteering at Long Hollow. Our hope is that you will build community among other volunteers, make a difference at Long Hollow and in our city, and ultimately, help us change the world with the hope of the Gospel. If you have questions about volunteering at Long Hollow, contact Vivian Penuel at vivian.penuel@longhollow.com or (615) 824-4006 x 115"
          actions={[
            {
              label: 'Sign Up',
              onClick: noop,
            },
          ]}
        />
        <Box>
          <Heading
            variant="h3"
            color="fg"
            fontWeight="700"
            textAlign="center"
            mb="m"
          >
            Explore more!
          </Heading>
          <CardGrid
            columns="2"
            gridColumnGap="l"
            gridRowGap="xs"
            breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          >
            {exploreColumns.map((exploreColumn, i) => (
              <CardGrid
                key={i}
                gridRowGap="xs"
                columns="1"
                gridTemplateRows={`repeat(${exploreRowCount}, 1fr)`}
              >
                {exploreColumn.map((explore, j) => (
                  <ArticleLink key={i + j} {...explore} />
                ))}
              </CardGrid>
            ))}
          </CardGrid>
        </Box>
      </CardGrid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({ query: GET_CONTENT_ITEM, variables: {
    itemId: "UniversalContentItem:199e8bd051b4840eed4f31e3e58502dd"
  } });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      page: pageResponse?.data?.node,
    },
  };
}
