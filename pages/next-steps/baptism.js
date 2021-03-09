import {
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  ValuesRow,
} from 'components';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { initializeApollo } from 'lib/apolloClient';
import { Box, CardGrid, Heading, Icon } from 'ui-kit';
import { noop } from 'utils';

export default function Baptism(props) {
  return (
    <Layout title="Next Steps - Baptism" bg="bg_alt">
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
              '/next-steps/baptize-01.png',
          }}
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Should I Be&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                Baptized?
              </Heading>
            </>
          }
          description="Baptism isn’t required for salvation, but is the first step of faith for believers. The baptismal waters don’t save anyone. It’s Jesus that does that. Baptism is a picture of the work that Jesus has done in a person’s heart.\n\nBaptism illustrates Christ’s death, burial, and resurrection. (1 Corinthians 15:3-4) It shows our new life as a follower of Christ. (2 Corinthians 5:17) Baptism doesn’t make you a believer… it shows that you already believe. Baptism doesn’t save you; Jesus does! Baptism is like a wedding ring, signifying a relationship rather than forming that relationship."
        />
        <MarketingHeadline
          image={{
            src:
              '/next-steps/baptize-02.jpeg',
          }}
          justify="right"
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Ready to Be&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                Baptized?
              </Heading>
            </>
          }
          description="If you’re a believer, you should be baptized! It doesn’t matter if you were saved 20 years ago or just last week… it’s time to take the next step in your faith journey.\n\nWe can normally baptize you during any worship service at any of our campuses. Just fill out this form and let us know when you would like to be baptized. Someone will get in touch with you shortly with instructions."
          actions={[
            {
              label: 'Sign Up',
              onClick: noop,
            },
          ]}
        />
        <ValuesRow
          title={
            <Box display="flex" justifyContent="center">
              <Heading variant="h3" color="black" fontWeight="700">
                Getting Baptized At Home
              </Heading>
            </Box>
          }
          items={[
            {
              title: 'What you need:',
              text:
                '\n1. A tub/container full of water.\nAnother believer to baptize you.\n\n2. A phone/camera to record or live stream your step of faith!\n\n3. There’s no specific script you have to follow, but here’s a simple guide to how we normally do it at Long Hollow',
            },
            {
              title: "What you'll say",
              text:
                '\n“Have you given your life to Jesus?” (Response)\n\n“Because of that, I now baptize you my [brother/sister] in the name of the Father, Son, and Holy Spirit.”\n\nWhile submerging: “Buried with Christ in baptism…”\nWhile raising: “Raised to walk in the newness of life!”',
            },
          ]}
        />
        <Box>
          <MarketingHeadline
            title={
              <Heading variant="h2" fontWeight="800" mb="xs">
                Be Sure to Share It With Us!
              </Heading>
            }
            description="If you get baptized from home, please let us know! Fill out the quick contact form at longhollow.com/next, or simply message us your video on Facebook, Instagram, or Twitter. If you took a video of your baptism, please share it with us here. We’d love to celebrate with you, and share the big news with the rest of the Long Hollow family."
            justify="left"
            mb="m"
          />
          <Box display="flex">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              backgroundColor="#C13584"
              borderRadius="20px"
              mr="m"
            >
              <Icon name="instagram" fill="bg" size="32px" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              backgroundColor="#3B5998"
              borderRadius="20px"
              mr="m"
            >
              <Icon name="facebook" fill="bg" size="26px" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              backgroundColor="#1DA1F2"
              borderRadius="20px"
              mr="m"
            >
              <Icon name="twitter" fill="bg" size="26px" />
            </Box>
          </Box>
        </Box>
      </CardGrid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({ query: GET_CONTENT_ITEM, variables: {
    itemId: "UniversalContentItem:e4a37c6d9d38958d23d986340fb1c129"
  } });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      page: pageResponse?.data?.node,
    },
  };
}
