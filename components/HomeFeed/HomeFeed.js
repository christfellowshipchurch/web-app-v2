import React, { useState } from 'react';
import { ArrowRight } from 'phosphor-react';
import { useTheme } from 'styled-components';

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
import { Box, CardGrid, Heading, Section, Text } from 'ui-kit';
import { useRouter } from 'next/router';
import { getMediaSource, getSlugFromURL } from 'utils';
import { useCurrentUser } from 'hooks';
import usePersonaFeed from 'hooks/usePersonaFeed';

function FullLengthSermon(props = {}) {
  const [selectedClip, setSelectedClip] = useState(0);

  const clips = [
    props.sermon,
    ...(props.sermon?.childContentItemsConnection?.edges?.map(
      ({ node }) => node
    ) || []),
  ];

  return (
    <Box display="flex" flexDirection="column">
      <MainPhotoHeader
        src={props.sermon?.seriesImage?.sources?.[0].uri || '/schedule.jpeg'}
        justifyText="center"
        backdrop={false}
        content={
          !!(
            clips?.length &&
            clips.some(clip => clip?.videos?.length || clip?.audios?.length)
          ) && (
            <Box
              position="absolute"
              top="0"
              alignItems="center"
              justifyContent="center"
              background={{
                _: 'none',
                lg:
                  'linear-gradient(89.49deg, #1C1617 -16.61%, rgba(28, 22, 23, 0) 99.62%);',
              }}
              height={{ lg: '100%' }}
              width="100%"
              display={'flex'}
              pl={{ _: '0', lg: '300px' }}
            >
              <Carousel
                width="100%"
                neighbors="3d"
                contentWidth={{ _: '100vw', lg: '681px' }}
                pl={{ _: '0', lg: '300px' }}
                onClick={i => setSelectedClip(i)}
                childProps={i => ({
                  style: {
                    pointerEvents: i !== selectedClip ? 'none' : 'initial',
                    width: '100%',
                  },
                })}
              >
                {clips.map(clip => {
                  let clipSrc = getMediaSource(clip);
                  if (!clipSrc) {
                    clipSrc = getMediaSource(clip, 'audios');
                  }
                  return clipSrc ? (
                    <VideoPlayer
                      key={clip?.id}
                      src={clipSrc}
                      poster={clip?.coverImage?.sources?.[0]?.uri}
                      style={{ width: '681px' }}
                    />
                  ) : null;
                })}
              </Carousel>
            </Box>
          )
        }
        title={props.sermon?.title}
        summary={props.sermon?.summary}
        subtitle={clips?.length ? 'HIGHLIGHTS FROM' : ''}
        mb={{ _: 'l', md: 'xxl' }}
      />
    </Box>
  );
}

function HomeFeedLargeArticle({ article }) {
  const router = useRouter();
  return (
    <Box position="relative" height="100%" width="100%">
      <LargeImage
        height="100%"
        dropShadow
        text={article?.title}
        color="white"
        src={article?.coverImage?.sources?.[0]?.uri}
        width="100%"
        action={() =>
          router.push(
            article?.linkURL || `/${getSlugFromURL(article?.sharing?.url)}`
          )
        }
      />
    </Box>
  );
}

function HomeFeedArticles({ articles }) {
  return (
    <ArticleLinks fullWidth>
      {articles.map((article, i) => (
        <ArticleLink
          key={i}
          color="quaternary"
          description={article?.title}
          url={article?.linkURL || `/${getSlugFromURL(article?.sharing?.url)}`}
          urlText={article?.linkText || 'Learn More'}
          imageSrc={article?.coverImage?.sources?.[0]?.uri}
        />
      ))}
    </ArticleLinks>
  );
}

function HomeFeedCTA({ authenticated }) {
  const router = useRouter();
  return authenticated && false ? (
    <MarketingHeadline
      image={{
        src: '/watch.jpeg',
        height: '100%',
        imageProps: {
          height: '100%',
        },
      }}
      title={
        <>
          <Heading color="neutrals.900" variant="h2" fontWeight="800">
            There's Something for Everyone
          </Heading>
        </>
      }
      textProps={{
        mb: 'xxl',
        mt: 'l',
      }}
      supertitle="Don't miss what God's doing this week!"
      description="From Sunday services to Wednesday night activities, there’s always a way to be a part of what God is doing every week at Long Hollow. Check out our weekly schedule for every member of your family, and mark your calendar for several upcoming events."
      actions={[
        {
          color: 'primary',
          label: 'Times and Locations',
          onClick: () => router.push('/about/schedule'),
        },
        {
          color: 'secondary',
          label: 'Upcoming Events',
          onClick: () => router.push('/search?category=Events&p=1'),
        },
      ]}
    />
  ) : (
    <MarketingHeadline
      image={{
        src: '/watch.jpeg',
        height: '100%',
        imageProps: {
          height: '100%',
        },
      }}
      title={
        <>
          <Heading color="neutrals.900" variant="h2" fontWeight="800">
            Join Us This Weekend
          </Heading>
        </>
      }
      textProps={{
        mb: 'xxl',
        mt: 'l',
      }}
      supertitle="God wants to work in your life"
      description="Long Hollow is one church that meets in two locations just north of Nashville, and online all across the globe. Whether you’re exploring faith for the first time, or are looking for a place to call home, we want you to be a part of our community. Join us on Sunday either in person or online!"
      actions={[
        {
          color: 'primary',
          label: 'Times and Locations',
          onClick: () => router.push('/about/schedule'),
        },
        {
          color: 'quaternary',
          variant: 'outlined',
          label: 'Join Us Online',
          onClick: () => router.push('/next-steps/join-us-online'),
        },
      ]}
    />
  );
}

function HomeFeedContent(props = {}) {
  const router = useRouter();
  const theme = useTheme();

  const articles = props.articles || [];

  const largeArticle = articles.find(article => article?.featureOnHomePage);
  const miniArticles = articles
    .filter(article => !article?.featureOnHomePage && article?.showOnHomePage)
    .slice(1, 3);

  // Fixes a very strange static generation error I was running into.
  // In effect - when this page was rendered for an authed user
  // the authed html/content was mixed in with the unauthed content.
  // Next.js needs a litle bit of nudging to properly hydrate the page, in this case.
  const [serverSide, setServerSide] = React.useState();

  React.useEffect(() => {
    setServerSide(typeof window === 'undefined');
  }, []);

  return (
    <React.Fragment key={[props.authenticated, serverSide].join('-')}>
      {largeArticle || miniArticles?.length ? (
        <Section>
          <CardGrid
            gridColumnGap="l"
            columns={largeArticle && miniArticles?.length ? 2 : 1}
            breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
            mb={{ _: 'l', md: 'xxl' }}
          >
            {largeArticle && <HomeFeedLargeArticle article={largeArticle} />}
            {miniArticles?.length && (
              <HomeFeedArticles articles={miniArticles} />
            )}
          </CardGrid>
        </Section>
      ) : null}
      <Section>
        <CardGrid
          gridColumnGap="l"
          columns={1}
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          mb={{ _: 'l', md: 'xxl' }}
        >
          <HomeFeedCTA authenticated={props.authenticated} />
        </CardGrid>
      </Section>
      <FullWidthCTA mt="-150px" py="xxl" justifyContent="flex-start">
        <Heading
          fontSize="66px"
          textAlign="center"
          lineHeight={theme.lineHeights.heading}
          px="m"
          color="bg"
          fontWeight="900"
        >
          TAKE YOUR NEXT STEP
        </Heading>
        <Text
          color="white"
          lineHeight={theme.lineHeights.base}
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
            opacity="60%"
            display="inline"
            fontWeight="600"
            onClick={() =>
              router.push('/next-steps/start-a-discipleship-group')
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
          onClick={() => router.push('/about/starting-point')}
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
    </React.Fragment>
  );
}

function HomeFeed(props = {}) {
  const { authenticated } = useCurrentUser();
  const { articles: personaArticles } = usePersonaFeed({
    skip: !authenticated,
  });

  let articles = [];

  if (authenticated) {
    articles = personaArticles || [];
  } else {
    articles = [...(props.articles || []), ...(props.events || [])];
  }

  articles = articles.map(({ node }) => node);

  return (
    <>
      <FullLengthSermon {...props} />
      <HomeFeedContent
        {...props}
        articles={articles}
        authenticated={authenticated}
      />
    </>
  );
}

export default HomeFeed;
