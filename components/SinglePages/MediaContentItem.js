import { Carousel, Layout, MainPhotoHeader } from 'components';
import { useRouter } from 'next/router';
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section, Longform, Box, Text } from 'ui-kit';
import { getMediaSource, getMetaData, getSlugFromURL } from 'utils';
import { useState } from 'react';
import Styled from 'components/HomeFeed/HomeFeed.styles';
import LargeImage from 'components/LargeImage';
import { useTheme } from 'styled-components';

export default function WeekendContentItem({ item, dropdownData } = {}) {
  const theme = useTheme();
  const clips = item?.childContentItemsConnection?.edges || [];

  const [selectedClip, setSelectedClip] = useState(0);
  const [playerError, setPlayerError] = useState(false);
  const [showing, setShowing] = useState({
    clips: clips?.length > 0,
    full: !(clips?.length > 0),
  });

  const router = useRouter();
  if (router.isFallback) {
    return null;
  }

  let src = getMediaSource(item);

  if (!src || playerError) {
    src = getMediaSource(item, 'audios') || src;
  }

  return (
    <Layout meta={getMetaData(item)} dropdownData={dropdownData}>
      <Box display="flex" flexDirection="column">
        <MainPhotoHeader
          src={item.coverImage?.sources?.[0]?.uri}
          showImage={false}
          overlay=""
          content={
            !!(
              (clips?.length &&
                clips.some(clip => clip?.node?.videos?.length)) ||
              src
            ) && (
              <Box
                position={{ lg: 'absolute' }}
                top="0"
                alignItems="center"
                justifyContent="center"
                background={{
                  _: 'inherit',
                  lg:
                    'linear-gradient(89.49deg, #1C1617 -16.61%, rgba(28, 22, 23, 0) 99.62%);',
                }}
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                {clips?.length ? (
                  <Styled.SermonSelector>
                    <Text
                      mx="xs"
                      variant="h2"
                      fontWeight={showing?.clips ? 'bold' : 'normal'}
                      onClick={() => setShowing({ clips: true, full: false })}
                    >
                      Clips
                    </Text>
                    <Text
                      mx="xs"
                      variant="h2"
                      fontWeight={showing?.full ? 'bold' : 'normal'}
                      onClick={() => setShowing({ clips: false, full: true })}
                    >
                      Full Message
                    </Text>
                  </Styled.SermonSelector>
                ) : null}
                {clips?.length && showing?.clips ? (
                  <Carousel
                    width="100%"
                    neighbors="3d"
                    contentWidth={{ _: '100vw', lg: '681px' }}
                    onClick={i => setSelectedClip(i)}
                    childProps={i => ({
                      style: {
                        pointerEvents: i !== selectedClip ? 'none' : 'initial',
                        width: '100%',
                      },
                    })}
                  >
                    {clips.map(clip => {
                      const clipSrc = getMediaSource(clip.node);
                      return clipSrc ? (
                        <VideoPlayer
                          key={clip.node?.id}
                          src={clipSrc}
                          title={clip.node?.title}
                          poster={clip.node?.coverImage?.sources?.[0]?.uri}
                          style={{ width: '681px' }}
                          rounded={{ lg: 'image' }}
                        />
                      ) : null;
                    })}
                  </Carousel>
                ) : null}
                {showing?.full ? (
                  <Box width={{ _: '100%', lg: '681px' }}>
                    <VideoPlayer
                      key={item.id}
                      src={src}
                      poster={item.coverImage?.sources?.[0]?.uri}
                      style={{ width: '100%' }}
                      rounded={{ lg: 'image' }}
                      onError={() => setPlayerError(true)}
                    />
                  </Box>
                ) : null}
              </Box>
            )
          }
        />
      </Box>
      <Section my="xl">
        <Heading variant="h2" fontWeight="800" mb="m">
          {item.title}
        </Heading>
        <Longform dangerouslySetInnerHTML={{ __html: item.htmlContent }} />
      </Section>
      {item.siblingContentItemsConnection?.edges?.length ? (
        <Box
          display="flex"
          my="m"
          mr={`-${theme.space.m}`}
          px={{ _: 'l', md: 'xxl' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {item.siblingContentItemsConnection.edges.map(({ node }) => (
            <LargeImage
              key={node.id}
              text={node.title}
              color="white"
              src={node.coverImage.sources?.[0].uri}
              height="225px"
              maxWidth="300px"
              mr="m"
              mb="m"
              size="m"
              action={() =>
                router.push(`/${getSlugFromURL(node?.sharing?.url)}`)
              }
            />
          ))}
        </Box>
      ) : null}
    </Layout>
  );
}
