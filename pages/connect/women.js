
import {
  ArticleLinks,
  ArticleLink,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  MeetTheStaff,
  PageSplit,
  Quote,
} from 'components';
import { Box, CardGrid, Heading, Text } from 'ui-kit';
import { noop } from 'utils';
import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';

export default function Women(props) {
  const article = props.articles?.[0];
  return (
    <Layout title="Connect - Women">
      <MainPhotoHeader
        src={props.page?.coverImage?.sources?.[0]?.uri}
        content={
          <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
            <Heading
              color="neutrals.100"
              variant="h2"
              opacity="50%"
              fontWeight="800"
              textTransform="uppercase"
            >
              LH Women
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
      <CardGrid
        px="xxl"
        py="xl"
        gridColumnGap="xl"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
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
              <Heading color="neutrals.900" variant="h2" fontWeight="800">Women Resources.</Heading>
            }
            supertitle="LH WOMEN"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, arcu consequat vestibulum amet. Velit nunc augue a blandit diam. Malesuada eget faucibus amet hac aliquam aliquet neque in. Nam felis viverra ornare non tortor odio rhoncus."
            actions={[
              {
                color: 'primary',
                label: 'Media',
              },
            ]}
          />
          <Quote
            alignment="left"
            color="quaternary"
            title={
              <Box display="flex">
                <Heading
                  color="quaternary"
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="700"
                >
                  LH&nbsp;
                </Heading>
                <Heading
                  textTransform="uppercase"
                  color="quaternary"
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="400"
                >
                  Woman Story
                </Heading>
              </Box>
            }
            attribution={props.quote?.attribution}
            actionLabel="Full story"
            actionLink="/"
            text={
              <Text
                lineHeight="h3"
                fontSize="18px"
                color="neutrals.900"
                opacity="60%"
                textAlign="left"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                arcu consequat vestibulum amet. Velit nunc augue a blandit diam.
                Malesuada eget faucibus amet hac.
              </Text>
            }
            avatar={props.quote?.coverImage?.sources?.[0]?.uri}
          />
        </CardGrid>
      </CardGrid>
      <PageSplit title="Meet the Staff" variant="h3" mt="m" mb="xl" />
      <CardGrid
        px="xl"
        gridColumnGap="l"
        columns="4"
        breakpoints={[
          { breakpoint: 'xl', columns: 2 },
          { breakpoint: 'lg', columns: 1 },
        ]}
        justifyItems="center"
      >
        <MeetTheStaff
          src="/staff/009.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="/staff/010.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="/staff/011.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="/staff/012.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </CardGrid>
      <MarketingHeadline
        px="184px"
        my="xl"
        image={{ src: '/general/contact.jpeg' }}
        title={
          <>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              Contact&nbsp;
            </Heading>
            <Heading color="primary" variant="h2" fontWeight="800">
              us
            </Heading>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              .
            </Heading>
          </>
        }
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        actions={[
          {
            label: 'Connect',
            onClick: noop,
          },
        ]}
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({ query: GET_CONTENT_ITEM, variables: {
    itemId: "UniversalContentItem:d77977392013b39f84d88dbb5a988484"
  } });

  const articleQueries = ['e07dbf80297d466a1a44ac37c6c8f261'].map(async (id) => {
    const article = await apolloClient.query({ query: GET_CONTENT_ITEM, variables: {
      itemId: `UniversalContentItem:${id}`
    }});

    return article?.data?.node;
  });

  const articles = await Promise.all(articleQueries);

  const quoteResponse = await apolloClient.query({ query: GET_CONTENT_ITEM, variables: {
    itemId: "UniversalContentItem:2ad5fbc93b17ac149e740a7ee11a5329"
  } });


  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      page: pageResponse?.data?.node,
      articles,
      quote: quoteResponse?.data?.node,
    },
  };
}
