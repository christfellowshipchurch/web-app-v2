import {
  ArticleLink,
  ArticleLinks,
  Carousel,
  ConnectTiles,
  FullWidthCTA,
  LargeImage,
  MainPhotoHeader,
  MarketingHeadline,
  VideoPlayer,
} from 'components';
import IDS from 'config/ids';
import { useCurrentUser } from 'hooks';
import usePersonaFeed from 'hooks/usePersonaFeed';
import { uniq } from 'lodash';
import { useRouter } from 'next/router';
import { ArrowRight, PlayCircle } from 'phosphor-react';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Box, CardGrid, Heading, Section, Text } from 'ui-kit';
import { getMediaSource, getSlugFromURL } from 'utils';
import Styled from './HomeFeed.styles';
import useLiveStreams from 'hooks/useLiveStreams';

function FullLengthSermon(props = {}) {
  const router = useRouter();
  const theme = useTheme();
  const [selectedClip, setSelectedClip] = useState(0);

  const { liveStreams } = useLiveStreams();
  const liveContent = liveStreams?.[0]?.contentItem;
  const livestreamUrl = liveStreams?.[0]?.webViewUrl;
  const LIVE = !!liveStreams?.[0]?.isLive;

  const clips =
    props.sermon?.childContentItemsConnection?.edges
      ?.map(({ node }) => node)
      .map(clip => ({
        ...clip,
        mediaSource: getMediaSource(clip) || getMediaSource(clip, 'audios'),
      }))
      .filter(({ mediaSource }) => mediaSource) || [];
  const CLIPS = !!clips?.length;

  let sermonSource = getMediaSource(props.sermon);
  if (!sermonSource) {
    sermonSource = getMediaSource(props.sermon, 'audios');
  }

  const liveContentImages = liveContent?.images || [];
  const liveBackgroundImage = liveContentImages?.find(
    image =>
      image?.sources?.[0]?.uri !== liveContent?.coverImage?.sources?.[0]?.uri
  );
  const mainPhoto =
    (LIVE && liveBackgroundImage?.sources?.[0]?.uri) ||
    props.sermon?.seriesBackgroundImage?.sources?.[0].uri ||
    props.sermon?.seriesImage?.sources?.[0].uri ||
    'schedule.jpeg';

  const hasContent = Boolean(clips.length || sermonSource || liveContent);

  const heroTitle = LIVE ? liveContent?.title : props.sermon?.title;
  const heroSummary = LIVE ? liveContent?.summary : props.sermon?.summary;
  const heroSubtitle = LIVE ? '' : CLIPS ? 'HIGHLIGHTS FROM' : 'LATEST MESSAGE';

  const calloutHeader = CLIPS && !LIVE ? 'FULL MESSAGE' : '';
  const calloutImgSrc =
    CLIPS && !LIVE
      ? props.sermon?.coverImage?.sources?.[0]?.uri
      : '/more-messages.jpeg';
  const calloutLink =
    CLIPS && !LIVE
      ? `/${getSlugFromURL(props.sermon?.sharing?.url)}`
      : `/watch/${IDS.SERIES.SUNDAY}`;

  return (
    <Box display="flex" flexDirection="column">
      <MainPhotoHeader
        src={mainPhoto}
        imageProps={{
          maxHeight: '98vh',
        }}
        justifyText="center"
        backdrop={false}
        content={
          hasContent && (
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
              pl={{
                _: '0',
                lg: CLIPS && !LIVE ? '100px' : '400px',
                xl: CLIPS && !LIVE ? '300px' : '400px',
              }}
            >
              {CLIPS && !LIVE ? (
                <Carousel
                  width="100%"
                  neighbors="3d"
                  contentWidth={{ _: '100vw', lg: '600px', xl: '681px' }}
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
                    return (
                      <VideoPlayer
                        key={clip.id}
                        src={clip.mediaSource}
                        poster={clip?.coverImage?.sources?.[0]?.uri}
                        style={{ width: '681px' }}
                      />
                    );
                  })}
                </Carousel>
              ) : (
                <Box width={{ _: '100%', lg: '681px' }}>
                  {LIVE ? (
                    <Box>
                      <LargeImage
                        width="100%"
                        height={{ _: 'calc(100vw * 0.5625)', lg: '100%' }}
                        constantHeight
                        src={liveContent?.coverImage?.sources?.[0]?.uri}
                        color="white"
                        text={'Join us live!'}
                        action={() => router.push(livestreamUrl)}
                        rounded={false}
                      />
                    </Box>
                  ) : (
                    <VideoPlayer
                      key={props.sermon?.id}
                      src={!LIVE ? sermonSource : ''}
                      poster={
                        !LIVE
                          ? props.sermon?.coverImage?.sources?.[0]?.uri
                          : liveContent?.coverImage?.sources?.[0]?.uri
                      }
                      style={{ width: '100%' }}
                    />
                  )}
                </Box>
              )}
            </Box>
          )
        }
        title={heroTitle}
        summary={heroSummary}
        subtitle={heroSubtitle}
        mb={{ _: 'l', md: 'xxl' }}
      />
      <Box
        flexDirection="column"
        mx={{ _: 'l', md: 'xxl' }}
        mt={{ lg: '-200px', xl: '-240px' }}
        mb="xl"
        zIndex="2"
        display={{ _: 'none', lg: 'block', xl: 'block' }}
      >
        <Heading variant="h5" color="neutrals.500">
          {calloutHeader}
        </Heading>
        <Styled.SermonContainer mt="s">
          <Styled.SermonImage
            rounded
            src={calloutImgSrc}
            onClick={() => router.push(calloutLink)}
          />
          {CLIPS && !LIVE && (
            <Box position="absolute" right="10px" bottom="10px">
              <PlayCircle
                size="36"
                color={`${theme.colors.neutrals[100]}`}
                opacity="60%"
              />
            </Box>
          )}
        </Styled.SermonContainer>
      </Box>
    </Box>
  );
}

function HomeFeedLargeArticle({ article }) {
  const router = useRouter();
  return (
    <Box position="relative" height="100%" width="100%">
      <LargeImage
        height="100%"
        size={{ _: 'm', md: 'l' }}
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

function HomeFeedCTA({ authenticated, personaFeed }) {
  const router = useRouter();
  let personaContent;

  if (personaFeed?.length === 2) {
    personaContent = (
      <>
        {personaFeed.map(({ relatedNode }, i) => (
          <ArticleLink
            flex="row-reverse"
            alignItems={{ lg: 'center' }}
            flexDirection={{ lg: 'row' }}
            key={i}
            color="quaternary"
            description={relatedNode?.title}
            url={
              relatedNode?.linkURL ||
              `/${getSlugFromURL(relatedNode?.sharing?.url)}`
            }
            urlText={relatedNode?.linkText || 'Learn More'}
            imageSrc={relatedNode?.coverImage?.sources?.[0]?.uri}
            imageProps={{ flex: '1 0 100px', mr: 'l' }}
            mt={i === 0 ? '' : 'l'}
          />
        ))}
      </>
    );
  } else if (personaFeed?.length) {
    personaContent = (
      <CardGrid columns="1">
        {personaFeed.map(({ relatedNode }, i) => (
          <MarketingHeadline
            key={relatedNode.id}
            image={{
              src: relatedNode.coverImage?.sources?.[0]?.uri,
              onClick: relatedNode.linkText
                ? null
                : () => {
                    router.push(
                      relatedNode.linkURL ||
                        `/${getSlugFromURL(relatedNode?.sharing?.url)}`
                    );
                  },
            }}
            justify={i % 2 === 1 ? 'left' : 'right'}
            title={relatedNode.title}
            description={relatedNode.summaryHTML}
            actions={
              relatedNode.linkText
                ? [
                    {
                      label: relatedNode.linkText,
                      onClick: () => {
                        router.push(
                          relatedNode.linkURL ||
                            `/${getSlugFromURL(relatedNode?.sharing?.url)}`
                        );
                      },
                    },
                  ]
                : []
            }
          />
        ))}
      </CardGrid>
    );
  }

  return (
    personaContent ||
    (authenticated ? (
      <MarketingHeadline
        image={{
          src: '/watch.jpeg',
          height: '100%',
          imageProps: {
            height: '100%',
          },
        }}
        justify={'right'}
        title={
          <>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              There's Something for Everyone
            </Heading>
          </>
        }
        textProps={{
          mb: { xl: 'xxl' },
          mt: { _: 'm', lg: 0, xl: 'l' },
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
        justify={'right'}
        title={
          <>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              Join Us This Weekend
            </Heading>
          </>
        }
        textProps={{
          mb: { xl: 'xxl' },
          mt: { _: 'm', lg: 0, xl: 'l' },
        }}
        supertitle="God wants to work in your life"
        description="Long Hollow is one church that meets just north of Nashville, and online all across the globe. Whether you’re exploring faith for the first time, or are looking for a place to call home, we want you to be a part of our community. Join us on Sunday either in person or online!"
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
    ))
  );
}

function HomeFeedContent(props = {}) {
  const router = useRouter();
  const theme = useTheme();

  const articles = props.articles || [];
  const personaFeed = props.personaFeed || [];

  const largeArticle = articles.find(article => article?.featureOnHomePage);
  const miniArticles = articles
    .filter(article => !article?.featureOnHomePage && article?.showOnHomePage)
    .slice(-2);

  // Fixes a very strange static generation error I was running into. Test again
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
            {!!largeArticle && <HomeFeedLargeArticle article={largeArticle} />}
            {!!miniArticles?.length && (
              <HomeFeedArticles articles={miniArticles} />
            )}
          </CardGrid>
        </Section>
      ) : null}
      <Section>
        <Box mb={{ _: 'l', md: 'xxl' }}>
          <HomeFeedCTA
            personaFeed={personaFeed}
            authenticated={props.authenticated}
          />
        </Box>
      </Section>
      <FullWidthCTA mt={{ xl: '-150px' }} py="xxl" justifyContent="flex-start">
        <Heading
          fontSize={{ xs: '40px', lg: '66px' }}
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
          Starting Point is a fun two-part experience that will introduce you to
          our church, help you learn more about yourself, and give you practical
          ways to take the next step in your&nbsp;
          <Text
            color="neutrals.100"
            opacity="60%"
            display="inline"
            fontWeight="600"
            onClick={() => router.push('/about/our-mission-and-strategy')}
          >
            journey as a disciple
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
  const { personaFeed } = usePersonaFeed({
    skip: !authenticated,
  });

  let articles = [...(props.articles || []), ...(props.events || [])];

  articles = articles.map(({ node }) => node);
  articles = uniq(articles, ({ id } = {}) => id);

  return (
    <>
      <FullLengthSermon {...props} />
      <HomeFeedContent
        {...props}
        articles={articles}
        authenticated={authenticated}
        personaFeed={personaFeed}
      />
    </>
  );
}

export default HomeFeed;
