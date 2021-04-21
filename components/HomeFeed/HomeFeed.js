import React, { useState } from 'react';
import { ArrowRight } from 'phosphor-react';
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
  ArticleLinks,
} from 'components';
import { Box, CardGrid, Heading, Section, Text, theme } from 'ui-kit';
import { useRouter } from 'next/router';
import IDS from 'config/ids';
import { getIdSuffix } from 'utils';
import Styled from './HomeFeed.styles';
import { useCurrentUser } from 'hooks';
import usePersonaFeed from 'hooks/usePersonaFeed';

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
  const router = useRouter();
  const [selectedClip, setSelectedClip] = useState(0);

  const clips = props.sermon?.childContentItemsConnection?.edges;

  return (
    <Box display="flex" flexDirection="column">
      <MainPhotoHeader
        src={props.sermon?.coverImage?.sources?.[0].uri || "/about/schedule.jpeg"}
        overlay={{
          _: 'rgba(0, 0, 0, 0.7)',
          lg:
            'linear-gradient(89.49deg, #1c1617 -16.61%, rgba(28, 22, 23, 0) 99.62%)',
        }}
        content={
          <>
            <Box
              position="absolute"
              top="0"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
              display={{ _: 'none', xl: 'flex' }}
            >
              <Carousel
                width="100%"
                neighbors="3d"
                contentWidth="681px"
                pl={{ _: '0', lg: 'xxl' }}
                onClick={i => setSelectedClip(i)}
                childProps={i => ({
                  style: {
                    pointerEvents: i !== selectedClip ? 'none' : 'initial',
                    width: '100%',
                  },
                })}
              >
                {clips.map(clip =>
                  clip?.node?.videos?.[0]?.sources?.[0]?.uri ? (
                    <VideoPlayer
                      key={clip.node?.id}
                      src={clip.node?.videos?.[0]?.sources?.[0]?.uri}
                      title={clip.node?.title}
                      poster={clip.node?.coverImage?.sources?.[0]?.uri}
                      style={{ width: '100%' }}
                    />
                  ) : null
                )}
              </Carousel>
            </Box>
          </>
        }
        title={props.sermon?.title}
        summary={props.sermon?.summary}
        subtitle="HIGHLIGHTS FROM"
      />
      <Box
        display="flex"
        flexDirection="column"
        ml={{ _: 'l', md: 'xxl' }}
        mt={{ _: 'm', lg: '-130px' }}
        zIndex="2"
      >
        <Heading variant="h5" color="neutrals.500">
          FULL MESSAGE
        </Heading>
        <Styled.SermonImage
          rounded
          mt="s"
          src={props.sermon?.coverImage?.sources?.[0]?.uri}
          onClick={() =>
            router.push(`/sermon/${getIdSuffix(props.sermon?.id)}`)
          }
        />
      </Box>
    </Box>
  );
}

function HomeFeedLargeArticle({ article }) {
  const router = useRouter();
  return (
    <LargeImage
      minHeight="200px"
      text={article?.title}
      color="white"
      src={article?.coverImage?.sources?.[0]?.uri}
      width="100%"
      action={() =>
        router.push(article?.linkURL || `/page/${getIdSuffix(article?.id)}`)
      }
    />
  );
}

function HomeFeedArticles({ articles }) {
  return (
    <ArticleLinks fullWidth={false}>
      {articles.map(({ node: article }, i) => (
        <ArticleLink
          key={i}
          color="quaternary"
          description={article?.summary}
          url={article?.linkURL || `/page/${getIdSuffix(article?.id)}`}
          urlText={article?.linkText || 'Learn More'}
          imageSrc={article?.coverImage?.sources?.[0]?.uri}
          mb={{ _: 'm', md: 's' }}
        />
      ))}
    </ArticleLinks>
  );
}

function HomeFeedCTA({ authenticated }) {
  return authenticated && false ? (
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
  ) : (
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
          variant: 'outlined',
          label: 'Secondary Call',
        },
      ]}
    />
  );
}

function HomeFeedContent(props = {}) {
  const largeArticle = props.articles?.[0]?.node;
  const miniArticles = props.articles?.slice(1, 4);

  const content = props.authenticated
    ? [
        [
          <HomeFeedArticles articles={miniArticles} />,
          <HomeFeedLargeArticle article={largeArticle} />,
        ],
        [<HomeFeedCTA authenticated={props.authenticated} />, <HomeQuote />],
      ]
    : [
        [<HomeFeedCTA authenticated={props.authenticated} />, <HomeQuote />],
        [
          <HomeFeedLargeArticle article={largeArticle} />,
          <HomeFeedArticles articles={miniArticles} />,
        ],
      ];

  return (
    <>
      <Section>
        <CardGrid
          gridColumnGap="l"
          columns="2"
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          px={{ _: 'l', md: 'xxl' }}
          my={{ _: 'l', md: 'xxl' }}
        >
          {content[0][0]}
          {content[0][1]}
        </CardGrid>
      </Section>
      <Section>
        <CardGrid
          gridColumnGap="l"
          columns="2"
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          px={{ _: 'l', md: 'xxl' }}
          my={{ _: 'l', md: 'xxl' }}
        >
          {content[1][0]}
          {content[1][1]}
        </CardGrid>
      </Section>
      <FullWidthCTA pt="171px" pb="77px" justifyContent="flex-start">
        <Styled.GodLovesYou>
          <Styled.GodLoves
            name="godLoves"
            viewBox="0 0 532 66"
            stroke="white"
            fill="white"
            mr={{ _: 'xs', md: 'm' }}
          />
          <Styled.You name="you" viewBox="0 0 200 66" stroke="white" />
          <Styled.Circle color="white" weight="fill" />
        </Styled.GodLovesYou>
        <Text
          color="white"
          variant="h4"
          maxWidth="530px"
          textAlign="center"
          display="inline"
          fontWeight="600"
          mb="s"
          px="m"
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
  const { authenticated } = useCurrentUser();
  const { articles } = usePersonaFeed({ skip: !authenticated });

  return (
    <>
      <FullLengthSermon {...props} />
      <HomeFeedContent
        {...props}
        articles={articles || props.articles}
        authenticated={authenticated}
      />
    </>
  );
}

export default HomeFeed;
