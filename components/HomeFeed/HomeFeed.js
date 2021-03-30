import React from 'react';
import { ArrowRight, Circle } from 'phosphor-react';
import { gql, useQuery } from '@apollo/client';

import {
  ArticleLink,
  Carousel,
  FullWidthCTA,
  LargeImage,
  MainPhotoHeader,
  MarketingHeadline,
  Quote,
  ConnectTiles,
  Countdown,
  ArticleLinks,
  Layout,
} from 'components';
import { Box, CardGrid, Heading, Icon, Text, theme } from 'ui-kit';
import VideoPlayer from 'components/VideoPlayer';
import { useRouter } from 'next/router';
import { addHours, addMinutes } from 'date-fns';
import { useCurrentUser } from 'hooks';

function DefaultMainPhotoHeader(props = {}) {
  const videoPlayers = [
    {
      src:
        'http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin',
      title: 'INTRO',
    },
    {
      src:
        'http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin',
      title: 'GOOD NEWS',
    },
    {
      src:
        'http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin',
      title: 'EVERYONE',
    },
    {
      src:
        'http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin',
      title: 'GOD',
    },
  ];

  return (
    <Layout
      headerPhoto={{
        src: '/about/schedule.jpeg',
        overlay:
          'linear-gradient(89.49deg, #1c1617 -16.61%, rgba(28, 22, 23, 0) 99.62%)',
        content: (
          <>
            <Box
              position="absolute"
              top="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <Carousel neighbors="3d" contentWidth="681px" pl="xxl">
                {videoPlayers.map((vp, i) => (
                  <VideoPlayer key={i} {...vp} />
                ))}
              </Carousel>
            </Box>
            <Box
              position="absolute"
              ml="xl"
              top="0"
              maxWidth="576px"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              style={{ pointerEvents: 'none' }}
            >
              <Heading
                color="neutrals.100"
                opacity="33%"
                fontWeight="400"
                fontSize="18px"
                lineHeight="16.2px"
                textTransform="uppercase"
                mb="16px"
              >
                Highlights From
              </Heading>
              <Heading
                color="white"
                fontSize="86px"
                lineHeight="77.4px"
                fontWeight="800"
                textTransform="uppercase"
                mb="16px"
              >
                Waiting to enjoy God.
              </Heading>
              <Text
                color="neutrals.100"
                opacity="60%"
                maxWidth="297px"
                fontSize="18px"
                lineHeight="22.5px"
                mb="4px"
              >
                God is never in a rush to do anything, so we need to wait to
                enjoy Him.
              </Text>
              <Text
                color="neutrals.100"
                opacity="33%"
                maxWidth="297px"
                fontSize="14px"
                lineHeight="17.5px"
              >
                Last Sunday | November 19, 2020
              </Text>
            </Box>
          </>
        ),
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        ml="xl"
        mt="-110px"
      >
        <Heading
          fontSize="18px"
          lineHeight="16.2px"
          textTransform="uppercase"
          color="neutrals.100"
          opacity="33%"
        >
          Full Message
        </Heading>
        <VideoPlayer
          src="https://player.vimeo.com/video/457496548"
          title="GOD"
          height="185px"
        />
      </Box>
    </Layout>
  );
}

const SarahQuote = () => {
  const { data } = useQuery(gql`
    {
      node(id: "ContentChannel:173eb3b93fa2684ae69a30f42fdcea3c") {
        id
        ... on ContentChannel {
          childContentItemsConnection {
            edges {
              node {
                title
                summary
                coverImage {
                  sources {
                    uri
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Quote
      color="primary"
      title={
        <Box display="flex">
          <Heading
            color="primary"
            fontSize="18px"
            lineHeight="27px"
            fontWeight="700"
          >
            LH&nbsp;
          </Heading>
          <Heading
            textTransform="uppercase"
            color="primary"
            fontSize="18px"
            lineHeight="27px"
            fontWeight="400"
          >
            Story
          </Heading>
        </Box>
      }
      attribution={
        data?.node?.childContentItemsConnection?.edges[0]?.node?.title
      }
      actionLabel="Full story"
      actionLink="/lh-story-quote"
      text={data?.node?.childContentItemsConnection?.edges[0]?.node?.summary}
      avatar={
        data?.node?.childContentItemsConnection?.edges[0]?.node?.coverImage
          ?.sources[0]?.uri
      }
    />
  );
};

function FullLengthSermon(props = {}) {
  return (
    <Layout
      headerPhoto={{
        src: '/home/good-news.jpeg',
        overlay:
          'linear-gradient(89.49deg, #1c1617 -16.61%, rgba(28, 22, 23, 0) 99.62%)',
        content: (
          <>
            <Box
              position="absolute"
              top="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <Carousel neighbors="3d" contentWidth="681px" pl="xxl">
                <VideoPlayer
                  src="http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin"
                  title="INTRO"
                  width="681px"
                />
              </Carousel>
            </Box>
            <Box
              position="absolute"
              ml="xl"
              top="0"
              maxWidth="576px"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              style={{ pointerEvents: 'none' }}
            >
              <Heading
                color="neutrals.100"
                opacity="33%"
                fontWeight="400"
                fontSize="18px"
                lineHeight="16.2px"
                textTransform="uppercase"
                mb="16px"
              >
                Watch Now
              </Heading>
              <Heading
                color="white"
                fontSize="86px"
                lineHeight="77.4px"
                fontWeight="800"
                textTransform="uppercase"
                mb="16px"
              >
                Good News
              </Heading>
              <Text
                color="neutrals.100"
                opacity="60%"
                maxWidth="297px"
                fontSize="18px"
                lineHeight="22.5px"
                mb="4px"
              >
                Paul shows us that God has given us a new perspective on life.
              </Text>
              <Text
                color="neutrals.100"
                opacity="33%"
                maxWidth="297px"
                fontSize="14px"
                lineHeight="17.5px"
              >
                Last Sunday | November 19, 2020
              </Text>
            </Box>
          </>
        ),
      }}
    ></Layout>
  );
}

function LoggedInHomeFeed(props = {}) {
  const router = useRouter();
  const article = props.articles?.[0];
  return (
    <>
      <CardGrid
        gridColumnGap="l"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        px="xxl"
        my="xxl"
      >
        <Box>
          {Array.from(Array(3)).map((_, i) => (
            <ArticleLink
              key={i}
              description="Lorem ipsum doler sit itmut this is a title of this story article or news something or thing."
              url="/"
              urlText="Learn More"
              imageSrc={article?.coverImage?.sources?.[0]?.uri}
              mb="s"
            />
          ))}
        </Box>
        <LargeImage
          text="Celebrate the Hope of Christ with us."
          color="white"
          src="/home/christmas-together.png"
          action={() => router.push('/christmas')}
        />
      </CardGrid>
      <CardGrid
        gridColumnGap="l"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        px="xxl"
        mt="xxl"
      >
        <MarketingHeadline
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                They're welcome here.
              </Heading>
            </>
          }
          supertitle="Know someone in need?"
          description="Long Hollow is one church that meets in two locations just north of Nashville. We’re a community of believers with something for everyone. Whether you’re checking out Christ for the first time or are looking for a place to call home, you’re invited to discover your purpose and live it out at Long Hollow."
          actions={[
            {
              color: 'primary',
              label: 'Primary Call',
            },
            {
              color: 'secondary',
              label: 'Secondary Call',
            },
          ]}
        />
        <SarahQuote />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="l"
        columns="2"
        gridRowGap="xxl"
        gridColumnGap="xl"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <Countdown
          src="https://www.figma.com/file/zlluMsbAFPmWX6Z50iG86s/image/2c35a9fea98b9a3404dfaca24537e5a91c123c48"
          width="595px"
          height="451px"
          borderRadius="image"
          alignItems="flex-end"
          date={addHours(addMinutes(new Date(), 2), 15)}
        />
        <MarketingHeadline
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus massa aliquam volutpat in integer aliquam. Convallis tempor quis sed et vestibulum sed. Hendrerit consequat praesent sit neque. Felis in donec sit nisl feugiat cursus dictum velit"
          details="ipsum dolor sit amet, consectetur adipiscing elit. Tellus massa aliquam volutpat in integer aliquam. Convallis tempor quis sed et vestibulum sed. Hendrerit consequat praesent sit neque. Felis in donec sit nisl feugiat cursus dictum velit."
        />
      </CardGrid>
      <Box
        background={`linear-gradient(to bottom right, ${theme.colors.gradient.join(
          ', '
        )})`}
        height="434px"
        minWidth={`${theme.breakpoints.lg}`}
        width="100%"
        mt="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box display="flex" alignItems="flex-end" mb="s" mt="l">
          <Icon
            name="godLoves"
            width="532px"
            height="67px"
            viewBox="0 0 532 67"
            stroke="white"
            fill="white"
            mr="m"
          />
          <Icon
            name="you"
            width="200px"
            height="67px"
            viewBox="0 0 200 67"
            stroke="white"
          />
          <Circle color="white" size={20} weight="fill" />
        </Box>
        <Text
          color="white"
          variant="h4"
          width="530px"
          textAlign="center"
          display="inline"
          fontWeight="600"
          mb="s"
        >
          For God so loved the world, that he gave his only Son, that whoever
          believes in him should not perish but have eternal life.&nbsp;
          <Text
            color="neutrals.100"
            variant="h4"
            opacity="60%"
            display="inline"
            fontWeight="600"
          >
            John 3.16
          </Text>
        </Text>
        <Text
          color="neutrals.100"
          opacity="60%"
          display="flex"
          fontWeight="600"
          alignItems="center"
        >
          The good news&nbsp;
          <ArrowRight
            size="18"
            color={`${theme.colors.neutrals[100]}`}
            opacity="60%"
            weight="bold"
          />
        </Text>
      </Box>
      <ConnectTiles />
    </>
  );
}

function LoggedOutHomeFeed(props = {}) {
  const router = useRouter();
  const article = props.articles?.[0];

  return (
    <>
      <CardGrid
        gridColumnGap="l"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        px="xxl"
        my="xxl"
      >
        <MarketingHeadline
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                You're welcome here.
              </Heading>
            </>
          }
          supertitle="We'd like to know you"
          description="Long Hollow is one church that meets in two locations just north of Nashville. We’re a community of believers with something for everyone. Whether you’re checking out Christ for the first time or are looking for a place to call home, you’re invited to discover your purpose and live it out at Long Hollow."
          actions={[
            {
              color: 'primary',
              label: 'Primary Call',
            },
            {
              color: 'quaternary',
              label: 'Secondary Call',
              variant: 'outlined',
            },
          ]}
        />
        <SarahQuote />
      </CardGrid>
      <CardGrid
        gridColumnGap="l"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        px="xxl"
        mt="xxl"
      >
        <LargeImage
          text="Celebrate the Hope of Christ with us."
          color="white"
          src="/home/christmas-together.png"
          action={() => router.push('/christmas')}
        />
        <ArticleLinks>
          {Array.from(Array(3)).map((_, i) => (
            <ArticleLink
              key={i}
              description="Lorem ipsum doler sit itmut this is a title of this story article or news something or thing."
              url="/"
              urlText="Learn More"
              imageSrc={article?.coverImage?.sources?.[0]?.uri}
              mb="s"
            />
          ))}
        </ArticleLinks>
      </CardGrid>
      <FullWidthCTA height="434px" pt="171px">
        <Box display="flex" alignItems="flex-end" mb="s">
          <Icon
            name="godLoves"
            width="532px"
            height="67px"
            viewBox="0 0 532 67"
            stroke="white"
            fill="white"
            mr="m"
          />
          <Icon
            name="you"
            width="200px"
            height="67px"
            viewBox="0 0 200 67"
            stroke="white"
          />
          <Circle color="white" size={20} weight="fill" />
        </Box>
        <Text
          color="white"
          variant="h4"
          width="530px"
          textAlign="center"
          display="inline"
          fontWeight="600"
          mb="s"
        >
          For God so loved the world, that he gave his only Son, that whoever
          believes in him should not perish but have eternal life.&nbsp;
          <Text
            color="neutrals.100"
            variant="h4"
            opacity="60%"
            display="inline"
            fontWeight="600"
          >
            John 3.16
          </Text>
        </Text>
        <Text
          color="neutrals.100"
          opacity="60%"
          display="flex"
          fontWeight="600"
          alignItems="center"
        >
          The good news&nbsp;
          <ArrowRight
            size="18"
            color={`${theme.colors.neutrals[100]}`}
            opacity="60%"
            weight="bold"
          />
        </Text>
      </FullWidthCTA>
      <ConnectTiles />
    </>
  );
}

function HomeFeed(props = {}) {
  const { authenticated: loggedIn, loading } = useCurrentUser();
  const fullSermon = loggedIn && true;

  if (loading) {
    return null;
  }
  return (
    <>
      {fullSermon ? <FullLengthSermon /> : <DefaultMainPhotoHeader />}
      {loggedIn ? (
        <LoggedInHomeFeed {...props} />
      ) : (
        <LoggedOutHomeFeed {...props} />
      )}
    </>
  );
}

export default HomeFeed;
