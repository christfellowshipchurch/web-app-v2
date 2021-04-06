import React, { useState } from 'react';
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
  VideoPlayer,
} from 'components';
import {
  Box,
  CardGrid,
  Heading,
  Icon,
  Loader,
  Section,
  Text,
  theme,
} from 'ui-kit';
import { useRouter } from 'next/router';
import { useCurrentUser } from 'hooks';
import IDS from 'config/ids';
import { getIdSuffix } from 'utils';

const HomeQuote = () => {
  const { data } = useQuery(gql`
    {
      node(id: "ContentChannel:${IDS.STORIES}") {
        id
        ... on ContentChannel {
          childContentItemsConnection {
            edges {
              node {
                id
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

  const quote = data?.node?.childContentItemsConnection?.edges[0]?.node;

  return quote ? (
    <Quote
      color="quaternary"
      alignment="left"
      title={quote.title}
      attribution={quote.attribution}
      actionLabel="Full story"
      actionLink={`/page/${getIdSuffix(quote.id)}`}
      text={quote.summary}
      avatar={quote.coverImage?.sources[0]?.uri}
    />
  ) : null;
};

function FullLengthSermon(props = {}) {
  const [selectedSermon, setSelectedSermon] = useState(0);

  const sermon = props.sermons[selectedSermon];

  return (
    <MainPhotoHeader
      src="/about/schedule.jpeg"
      overlay="linear-gradient(89.49deg, #1c1617 -16.61%, rgba(28, 22, 23, 0) 99.62%)"
      content={
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
            <Carousel
              neighbors="3d"
              contentWidth="681px"
              pl="xxl"
              onClick={i => setSelectedSermon(i)}
              childProps={i => ({
                style: {
                  pointerEvents: i !== selectedSermon ? 'none' : 'initial',
                  width: '100%',
                },
              })}
            >
              {props.sermons.map(sermon =>
                sermon?.node?.videos?.[0]?.sources?.[0]?.uri ? (
                  <VideoPlayer
                    key={sermon.node?.id}
                    src={sermon.node?.videos?.[0]?.sources?.[0]?.uri}
                    title={sermon.node?.title}
                    poster={sermon.node?.coverImage?.sources?.[0]?.uri}
                    style={{ width: '100%' }}
                  />
                ) : null
              )}
            </Carousel>
          </Box>
        </>
      }
      title={sermon.node?.title}
      summary={sermon.node?.summary}
    />
  );
}

function HomeFeedContent(props = {}) {
  const router = useRouter();
  const { authenticated: loggedIn, loading } = useCurrentUser();

  if (loading) {
    return <Loader />;
  }

  const largeArticle = props.articles?.[0]?.node;
  const miniArticles = props.articles?.slice(1, 4);
  console.log(largeArticle, miniArticles);

  return (
    <>
      <Section>
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
            supertitle="Know someone in need?"
            description="Long Hollow is one church that meets in two locations just north of Nashville. We’re a community of believers with something for everyone. Whether you’re checking out Christ for the first time or are looking for a place to call home, you’re invited to discover your purpose and live it out at Long Hollow."
            actions={[
              {
                color: 'primary',
                label: 'Primary Call',
              },
              {
                color: 'quaternary',
                variant: 'outlined',
                label: 'Secondary Call',
              },
            ]}
          />
          <HomeQuote />
        </CardGrid>
      </Section>
      <Section>
        <CardGrid
          gridColumnGap="l"
          columns="2"
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          px="xxl"
          my="xxl"
        >
          <LargeImage
            text={largeArticle?.title}
            color="white"
            src={largeArticle?.coverImage?.sources?.[0]?.uri}
            action={() =>
              router.push(
                largeArticle?.linkURL ||
                  `/page/${getIdSuffix(largeArticle?.id)}`
              )
            }
          />
          <Box>
            {miniArticles.map(({ node: article }, i) => (
              <ArticleLink
                key={i}
                color="quaternary"
                description={article?.summary}
                url={article?.linkURL || `/page/${getIdSuffix(article?.id)}`}
                urlText={article?.linkText || 'Learn More'}
                imageSrc={article?.coverImage?.sources?.[0]?.uri}
                mb="s"
              />
            ))}
          </Box>
        </CardGrid>
      </Section>
      <FullWidthCTA height="434px" pt="171px" justifyContent="flex-start">
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
  return (
    <>
      <FullLengthSermon {...props} />
      <HomeFeedContent {...props} />
    </>
  );
}

export default HomeFeed;
