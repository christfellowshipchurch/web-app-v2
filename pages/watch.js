import {
  ArticleLinks,
  ArticleLink,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  Carousel,
  VideoPlayer,
  Search,
} from 'components';
import { Box, CardGrid, Heading, Text } from 'ui-kit';
import { noop } from 'utils';
import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';

export default function Watch(props) {
  const article = props.articles?.[0];
  return (
    <Layout title="Watch">
      <MainPhotoHeader
        src="/watch.jpeg"
        content={
          <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
            <Heading
              color="neutrals.100"
              variant="h2"
              opacity="50%"
              fontWeight="800"
              textTransform="uppercase"
            >
              LH Watch
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h1"
              fontWeight="800"
              textTransform="uppercase"
            >
              Lorem ipsum doler sit itmut del fal some big bold header.
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h3"
              fontWeight="700"
              maxWidth="360px"
            >
              Lorem ipsum doler sit itmut del fal some big bold header.
            </Heading>
          </Box>
        }
      />
      <CardGrid px="xxl" py="xl" gridColumnGap="xl" columns="1">
        <Heading
          color="neutrals.900"
          variant="h2"
          fontWeight="800"
          textAlign="center"
        >
          The Video Archives
        </Heading>
        <Text maxWidth="600px" textAlign="center">
          Looking for a message or video that impacted you? Browse through our
          archives below. Looking for something specific? Try searching it
          below!
        </Text>
        <Search
          width="640px"
          button={{ color: 'primary', label: 'Search', size: 's' }}
        />
        <Carousel
          labels={[
            'Sunday Messages',
            "Robby's Wed Night Studies",
            'Archives',
            'Baptism Videos',
            'Watch Live',
          ]}
          px="xxl"
        >
          <VideoPlayer
            src="http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin"
            title="What Happens When God Shows Up"
            details="In this message from January 3rd, 2021, Pastor Robby discusses how one moment in the presence of God can alter your life for eternity."
          />
          <Box height="200px" width="600px" backgroundColor="orange" />
          <Box height="600px" width="500px" backgroundColor="yellow" />
          <Box height="400px" width="800px" backgroundColor="green" />
          <Box height="400px" width="500px" backgroundColor="blue" />
        </Carousel>
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <CardGrid
          gridColumnGap="l"
          columns="2"
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        >
          <MarketingHeadline
            title={
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Other Ways to Watch.
              </Heading>
            }
            supertitle="LH WATCH"
            description="Subscribe to our podcasts in iTunes to get automatic downloads of the latest Sunday messages and special events."
            actions={[
              {
                color: 'primary',
                label: 'Video Podcast',
              },
              {
                color: 'quaternary',
                label: 'Audio Podcast',
                variant: 'outlined',
              },
            ]}
          />
          <ArticleLinks>
            {Array.from(Array(2)).map(() => (
              <ArticleLink
                title={article?.title}
                description="At Long Hollow Weekday Preschool, we are committed to creating a nurturing environment for preschoolers to grow."
                url="/"
                urlText="Learn More"
                imageSrc={article?.coverImage?.sources?.[0]?.uri}
                mb="s"
              />
            ))}
          </ArticleLinks>
        </CardGrid>
      </CardGrid>
      <MarketingHeadline
        px="184px"
        my="xl"
        image={{ src: '/general/live.jpeg' }}
        title={
          <>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              Join us&nbsp;
            </Heading>
            <Heading color="primary" variant="h2" fontWeight="800">
              Live
            </Heading>
          </>
        }
        description="Every Sunday at 8:00, 9:30, & 11:15 am!"
        actions={[
          {
            label: 'Watch Live',
            onClick: noop,
          },
        ]}
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const articleQueries = ['e07dbf80297d466a1a44ac37c6c8f261'].map(async id => {
    const article = await apolloClient.query({
      query: GET_CONTENT_ITEM,
      variables: {
        itemId: `UniversalContentItem:${id}`,
      },
    });

    return article?.data?.node;
  });

  const articles = await Promise.all(articleQueries);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      articles,
    },
  };
}
