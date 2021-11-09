import { format, parseISO } from 'date-fns';
import { Carousel, Layout, MainPhotoHeader } from 'components';
import { useRouter } from 'next/router';
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section, Longform, Box } from 'ui-kit';
import { getMediaSource, getMetaData } from 'utils';
import { useState } from 'react';
import Siblings from 'components/Siblings';
import { useTheme } from 'styled-components';

export default function WeekendContentItem({ item, dropdownData } = {}) {
  const theme = useTheme();

  const [selectedVideo, setSelectedVideo] = useState(0);
  const [playerError, setPlayerError] = useState(false);
  const router = useRouter();
  if (router.isFallback) {
    return null;
  }

  let src = getMediaSource(item);

  if (!src || playerError) {
    src = getMediaSource(item, 'audios') || src;
  }

  const clips = item?.childContentItemsConnection?.edges || [];
  const clipItems = clips.map(({ node }) => node);
  const videos = [item, ...clipItems];

  const mainPhoto =
    item.seriesBackgroundImage?.sources?.[0].uri ||
    item.seriesImage?.sources?.[0].uri;

  return (
    <Layout meta={getMetaData(item)} dropdownData={dropdownData}>
      <Box display="flex" flexDirection="column">
        <MainPhotoHeader
          src={mainPhoto}
          showImage={false}
          overlay=""
          bgBlurred={false}
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
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                {videos.length > 1 ? (
                  <Carousel
                    width="100%"
                    neighbors="3d"
                    contentWidth={{ _: '100vw', xl: theme.space.content }}
                    onClick={i => setSelectedVideo(i)}
                    childProps={i => ({
                      style: {
                        overflow: 'hidden',
                        pointerEvents: i !== selectedVideo ? 'none' : 'initial',
                        width: '100%',
                      },
                      borderRadius: { _: 0, xl: 'image' },
                      m: { xl: 'xxl' },
                    })}
                  >
                    {videos.map(video => {
                      const videoSrc = getMediaSource(video);
                      return videoSrc ? (
                        <VideoPlayer
                          key={video.id}
                          src={videoSrc}
                          poster={video.coverImage?.sources?.[0]?.uri}
                        />
                      ) : null;
                    })}
                  </Carousel>
                ) : (
                  <Box
                    width={{ _: '100%', xl: theme.space.content }}
                    mt={{ _: 0, xl: 'l' }}
                  >
                    <VideoPlayer
                      key={item.id}
                      src={src}
                      poster={item.coverImage?.sources?.[0]?.uri}
                      style={{ width: '100%', overflow: 'hidden' }}
                      onError={() => setPlayerError(true)}
                      borderRadius={{ _: 0, xl: 'image' }}
                    />
                  </Box>
                )}
              </Box>
            )
          }
        />
      </Box>
      <Section my="xl">
        <Heading variant="h2" fontWeight="800">
          {item.title}
        </Heading>
        {item.publishDate && (
          <Heading
            fontSize="h3"
            lineHeight="h3"
            color="neutrals.500"
            fontWeight="800"
            textTransform="uppercase"
            mb="m"
          >
            {format(parseISO(item.publishDate), 'MMMM do, yyyy')}
          </Heading>
        )}
        <Longform dangerouslySetInnerHTML={{ __html: item.htmlContent }} />
      </Section>
      <Siblings root={item} />
    </Layout>
  );
}
