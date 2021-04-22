import React, { useState } from 'react';
import { ArrowRight, PlayCircle } from 'phosphor-react';

import {
  ArticleLink,
  Carousel,
  FullWidthCTA,
  LargeImage,
  MainPhotoHeader,
  MarketingHeadline,
  ConnectTiles,
  VideoPlayer,
  ArticleLinks,
} from 'components';
import { Box, CardGrid, Heading, Section, Text, theme } from 'ui-kit';
import { useRouter } from 'next/router';
import { getIdSuffix } from 'utils';
import Styled from './HomeFeed.styles';
import { useCurrentUser } from 'hooks';
import usePersonaFeed from 'hooks/usePersonaFeed';

function FullLengthSermon(props = {}) {
  const router = useRouter();
  const [selectedClip, setSelectedClip] = useState(0);

  const clips = props.sermon?.childContentItemsConnection?.edges;

  return (
    <Box display="flex" flexDirection="column">
      <MainPhotoHeader
        src={props.sermon?.coverImage?.sources?.[0].uri || '/schedule.jpeg'}
        justifyText="center"
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
                {clips?.length
                  ? clips.map(clip =>
                      clip?.node?.videos?.[0]?.sources?.[0]?.uri ? (
                        <VideoPlayer
                          key={clip.node?.id}
                          src={clip.node?.videos?.[0]?.sources?.[0]?.uri}
                          title={clip.node?.title}
                          poster={clip.node?.coverImage?.sources?.[0]?.uri}
                          style={{ width: '100%' }}
                        />
                      ) : null
                    )
                  : [
                      <VideoPlayer
                        key={props.sermon?.id}
                        src={props.sermon?.videos?.[0]?.sources?.[0]?.uri}
                        title={props.sermon?.title}
                        poster={props.sermon?.coverImage?.sources?.[0]?.uri}
                        style={{ width: '100%' }}
                      />,
                    ]}
              </Carousel>
            </Box>
          </>
        }
        title={props.sermon?.title}
        summary={props.sermon?.summary}
        subtitle={clips?.length ? 'HIGHLIGHTS FROM' : ''}
      />
      {clips?.length ? (
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
          <Styled.SermonContainer mt="s">
            <Styled.SermonImage
              rounded
              src={props.sermon?.coverImage?.sources?.[0]?.uri}
              onClick={() =>
                router.push(`/sermon/${getIdSuffix(props.sermon?.id)}`)
              }
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
      ) : null}
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
      image={{
        src: '/watch.jpeg',
      }}
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
      image={{
        src: '/watch.jpeg',
      }}
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
  const router = useRouter();

  const largeArticle = props.articles?.[0]?.node;
  const miniArticles = props.articles?.slice(1, 4);

  const content = props.authenticated
    ? [
        [
          <HomeFeedArticles articles={miniArticles} />,
          <HomeFeedLargeArticle article={largeArticle} />,
        ],
        [<HomeFeedCTA authenticated={props.authenticated} />],
      ]
    : [
        [<HomeFeedCTA authenticated={props.authenticated} />],
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
          columns={content[0].length}
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
          columns={content[1].length}
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          px={{ _: 'l', md: 'xxl' }}
          my={{ _: 'l', md: 'xxl' }}
        >
          {content[1][0]}
          {content[1][1]}
        </CardGrid>
      </Section>
      <FullWidthCTA pt="171px" pb="171px" justifyContent="flex-start">
        <Heading fontSize="66px" color="bg" fontWeight="bold">
          Take Your Next Step
        </Heading>
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
          Starting Point is a fun four-part experience that will introduce you
          to our church, help you learn more about yourself, and give you
          practical ways to take the next step on your&nbsp;
          <Text
            color="neutrals.100"
            variant="h4"
            opacity="60%"
            display="inline"
            fontWeight="600"
            onClick={() =>
              router.push('/next-steps/876dd1736a5eb8b7cddd6b743609083d')
            }
          >
            Discipleship Journey
          </Text>
        </Text>
        <Text
          color="neutrals.100"
          opacity="60%"
          display="flex"
          fontWeight="600"
          alignItems="center"
          cursor="pointer"
          onClick={() => router.push('/about/cd0472a4ed38ecb9874c7fc55ee7c173')}
        >
          Get Started&nbsp;
          <ArrowRight
            size="16"
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
