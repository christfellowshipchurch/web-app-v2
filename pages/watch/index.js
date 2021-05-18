import { PlayCircle } from 'phosphor-react';
import {
  LargeImage,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  PageSplit,
} from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { useRouter } from 'next/router';
import IDS from 'config/ids';
import { Box, Image, system, CardGrid, Heading, Section, theme } from 'ui-kit';
import { GET_MESSAGE_SERIES } from 'hooks/useMessageSeries';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { GET_MESSAGE_CHANNEL } from 'hooks/useMessageChannel';
import { getChannelId, getIdSuffix, getItemId } from 'utils';
import useLiveStreams from 'hooks/useLiveStreams';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import getDropdownData from 'utils/getDropdownData';

const Styled = {};

Styled.SermonContainer = styled(Box)`
  cursor: pointer;
  position: relative;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    width: 300px;
  }
`;

Styled.SermonImage = styled(Image)`
  width: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    height: 200px;
  }

  filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));

  ${system}
`;

export default function Watch({
  series,
  watchPages,
  sermons,
  baptisms = [],
  dropdownData,
}) {
  const router = useRouter();

  const sermon = sermons?.[0]?.node;

  const { prettyCountdown, liveStreams } = useLiveStreams();
  const live = liveStreams?.[0]?.isLive;

  return (
    <Layout dropdownData={dropdownData}>
      <MainPhotoHeader
        src={sermon?.coverImage?.sources?.[0]?.uri}
        title="Join us live"
        subtitle={prettyCountdown}
        justifyText="center"
        backdrop={false}
        primaryButton={
          <a
            className="btn"
            style={{
              pointerEvents: 'auto',
              marginRight: '16px',
              zIndex: 100,
              width: 'auto',
              padding: '14px 28px',
            }}
            href={
              live
                ? liveStreams[0].webViewUrl
                : 'about/34fa5fa56a33a230f3889b54e3f6c30e'
            }
          >
            {live ? 'Watch now' : 'Our live schedule'}
          </a>
        }
        secondaryButton={
          <a
            className="btn"
            style={{
              width: 'auto',
              pointerEvents: 'auto',
              padding: '14px 28px',
            }}
            href="/next-steps/3644e32503017b6f2f19edfdff0eb28a"
          >
            {live ? 'Other ways to watch' : 'How to watch'}
          </a>
        }
      />
      <Box
        flexDirection="column"
        mx={{ _: 'l', md: 'xxl' }}
        mt={{ _: 'm', lg: '-130px' }}
        zIndex="2"
      >
        <Heading variant="h5" color={{ _: 'fg', lg: 'white' }} opacity="80%">
          LAST WEEK
        </Heading>
        <Styled.SermonContainer mt="s">
          <Styled.SermonImage
            rounded
            src={sermon?.coverImage?.sources?.[0]?.uri}
            onClick={() => router.push(`/sermon/${getIdSuffix(sermon?.id)}`)}
          />
          <Box position="absolute" right="10px" bottom="10px">
            <PlayCircle
              size="36"
              color={`${theme.colors.neutrals[100]}`}
              opacity="60%"
            />
          </Box>
        </Styled.SermonContainer>
      </Box>
      <Section>
        <CardGrid
          px={{ _: 'l', md: 'xxl' }}
          my={{ _: 'l', md: 'xxl' }}
          gridRowGap="l"
          columns="1"
        >
          {series.map(seriesNode => (
            <Box key={seriesNode.id} display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between" width="100%">
                <Heading
                  fontSize="xl"
                  lineHeight="xl"
                  fontWeight="700"
                  style={{ wordBreak: 'break-word' }}
                >
                  {seriesNode.name}
                </Heading>
                {seriesNode.childContentItemsConnection?.edges.length > 3 ? (
                  <Heading
                    ml="xs"
                    fontSize="xl"
                    lineHeight="xl"
                    fontWeight="700"
                    color="primary"
                    cursor="pointer"
                    onClick={() =>
                      router.push(`/watch/${getIdSuffix(seriesNode.id)}`)
                    }
                  >
                    See More
                  </Heading>
                ) : null}
              </Box>
              <CardGrid
                gridTemplateColumns={{
                  _: 'repeat(1, 1fr)',
                  md: `repeat(2, 1fr)`,
                  lg: `repeat(3, 1fr)`,
                }}
                gridColumnGap="m"
                my="m"
              >
                {seriesNode.childContentItemsConnection?.edges
                  ?.slice(0, 3)
                  .map(({ node }) => (
                    <LargeImage
                      key={node.id}
                      text={node.title}
                      color="white"
                      src={node.coverImage?.sources?.[0].uri}
                      height="350px"
                      maxWidth="400px"
                      action={() =>
                        router.push(
                          `/watch/${getIdSuffix(seriesNode.id)}/${getIdSuffix(
                            node.id
                          )}`
                        )
                      }
                    />
                  ))}
              </CardGrid>
            </Box>
          ))}
          {baptisms.length || (
            <Box key={'baptisms'} display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between" width="100%">
                <Heading
                  fontSize="xl"
                  lineHeight="xl"
                  fontWeight="700"
                  style={{ wordBreak: 'break-word' }}
                >
                  {'Baptisms'}
                </Heading>
                {baptisms.length > 3 ? (
                  <Heading
                    ml="xs"
                    fontSize="xl"
                    lineHeight="xl"
                    fontWeight="700"
                    color="primary"
                    cursor="pointer"
                    onClick={() =>
                      router.push(
                        `/watch/${IDS.SERIES.BAPTISMS}/${IDS.CHANNELS.BAPTISMS}`
                      )
                    }
                  >
                    See More
                  </Heading>
                ) : null}
              </Box>
              <CardGrid
                gridTemplateColumns={{
                  _: 'repeat(1, 1fr)',
                  md: `repeat(2, 1fr)`,
                  lg: `repeat(3, 1fr)`,
                }}
                gridColumnGap="m"
                my="m"
              >
                {baptisms?.slice(0, 3).map(({ node }) => (
                  <LargeImage
                    key={node.id}
                    text={node.title}
                    color="white"
                    src={node.coverImage?.sources?.[0].uri}
                    height="350px"
                    maxWidth="400px"
                    action={() =>
                      router.push(
                        `/watch/${IDS.SERIES.BAPTISMS}/${
                          IDS.CHANNELS.BAPTISMS
                        }/${getIdSuffix(node.id)}`
                      )
                    }
                  />
                ))}
              </CardGrid>
            </Box>
          )}
        </CardGrid>
      </Section>
      {watchPages?.length ? (
        <>
          <PageSplit title="Other ways to watch" />
          <Section
            px={{ _: 'l', md: 'xxl' }}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {watchPages?.map(({ node: page }, i) => (
              <MarketingHeadline
                key={i}
                image={{
                  src: page.coverImage?.sources?.[0]?.uri,
                }}
                py="l"
                justify={i % 2 === 0 ? 'left' : 'right'}
                title={page.title}
                description={page.summary}
                textProps={{ px: 'xl' }}
                actions={[
                  {
                    label: page.buttonText,
                    onClick: () =>
                      router.push(
                        page.buttonLink || `/watch/page/${getIdSuffix(page.id)}`
                      ),
                  },
                ]}
              />
            ))}
          </Section>
        </>
      ) : null}
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const sermons = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.MESSAGES.SUNDAY),
    },
  });

  const watchRequest = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: getChannelId(IDS.WATCH_PAGES),
    },
  });

  const sundaySeries = await apolloClient.query({
    query: GET_MESSAGE_SERIES,
    variables: {
      itemId: getChannelId(IDS.SERIES.SUNDAY),
    },
  });

  const baptismChannel = await apolloClient.query({
    query: GET_MESSAGE_CHANNEL,
    variables: {
      itemId: getItemId(IDS.CHANNELS.BAPTISMS),
      orderBy: {
        field: 'DATE',
        direction: 'DESC',
      },
    },
  });
  const baptisms = (
    baptismChannel?.data?.node?.childContentItemsConnection?.edges || []
  ).map(node => ({
    node: {
      ...node.node,
      coverImage: baptismChannel.data.node.coverImage,
    },
  }));

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      series: [sundaySeries?.data?.node],
      baptisms,
      watchPages:
        watchRequest?.data?.node?.childContentItemsConnection?.edges || [],
      sermons: sermons?.data?.node?.childContentItemsConnection?.edges.filter(
        ({ node }) => node?.videos?.[0]?.sources?.[0]?.uri
      ),
    },
    revalidate: 60, // In seconds
  };
}
