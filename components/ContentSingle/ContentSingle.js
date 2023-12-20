import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { get, includes, keyBy } from 'lodash';

import { Box, Avatar, Loader, Button } from 'ui-kit';
import { ContentLayout, Share } from 'components';
import { useCurrentBreakpoint, useNodeActions } from 'hooks';
import { getMediaType, getUrlFromRelatedNode } from 'utils';
import { useAnalytics } from 'providers/AnalyticsProvider';

import ContentVideo from './ContentVideo';
import ContentVideosList from './ContentVideosList';
import Styled from './ContentSingle.styles';
import { useRouter } from 'next/router';
function ContentSingle(props = {}) {
  const [currentVideo, setCurrentVideo] = useState(
    Array.isArray(props.data?.videos) ? props.data.videos[0] : null
  );

  const [showShare, setShowShare] = useState(true);
  const router = useRouter();
  const analytics = useAnalytics();
  const currentBreakpoint = useCurrentBreakpoint();

  const { actions } = useNodeActions({
    variables: {
      nodeId: props?.data?.id,
    },
  });

  const {
    author,
    coverImage,
    featureFeed,
    htmlContent,
    mode,
    publishDate,
    schedule,
    summary,
    title,
    videos,
    segmentData,
    wistiaId,
  } = props?.data;

  useEffect(() => {
    if (currentBreakpoint.isSmall && !author) {
      setShowShare(true);
    } else if (currentBreakpoint.isSmall && author) {
      setShowShare(false);
    } else if (!currentBreakpoint.isSmall) {
      setShowShare(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBreakpoint]);

  useEffect(() => {
    // Do we have videos now, when we didn't before?
    // ( Loading just finished, so we can properly select the first video if present )
    if (props.data?.videos?.length >= 1 && currentVideo === null) {
      setCurrentVideo(props.data.videos[0]);
    } else if (props.data?.wistiaId?.length >= 1 && currentVideo === null) {
      setCurrentVideo(props.data.wistiaId);
    }
  }, [props.data?.videos, props.data?.wistiaId, currentVideo]);

  /**
   * note : Page view tracking for Segment Analytics
   */
  useEffect(() => {
    const { asPath } = router;
    if (props?.data?.segmentData && asPath) {
      analytics.page({
        name: props?.data?.title,
        // Checks to see if content is a sermon, if not category should be 'Resource'
        contentCategory: includes(asPath, 'messages')
          ? 'Messages'
          : 'Resources',
        contentTags: get(props?.data?.segmentData, 'contentTags', null),
        mediaType: getMediaType({ url: asPath, ...props?.data }),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  if (!currentVideo && wistiaId) {
    setCurrentVideo(props.data.wistiaId);
  }

  const coverImageUri = coverImage?.sources[0]?.uri;
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : undefined;

  const handleSelectVideo = video => {
    if (video !== currentVideo) {
      setCurrentVideo(video);
    }
  };

  const metadata = keyBy(props?.data?.metadata, 'name');

  let contentLayoutVideo = null;
  if (currentVideo?.wistiaId) contentLayoutVideo = currentVideo?.wistiaId;

  return (
    <ContentLayout
      mode={mode}
      theme={props?.data?.theme}
      title={title}
      seoMetaTags={{
        description:
          metadata?.description?.content ||
          schedule?.friendlyScheduleText ||
          summary,
        image: coverImageUri,
        author: authorName,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        video: contentLayoutVideo,
        keywords: metadata?.keywords?.content,
        title: metadata?.title?.content || title,
      }}
      summary={schedule?.friendlyScheduleText || summary}
      coverImage={currentVideo ? null : coverImageUri}
      renderA={() => (
        <ContentVideo
          segmentData={segmentData}
          title={title}
          video={currentVideo}
          poster={coverImageUri}
          wistiaId={wistiaId}
        />
      )}
      renderContentB={() =>
        author && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="base"
          >
            <Box display="flex">
              <Box mr="base">
                <Avatar
                  name={author.firstName}
                  src={author.photo?.uri}
                  height="60px"
                  width="60px"
                />
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Box as="h4" mb="0">
                  {authorName}
                </Box>
                <Box>{format(new Date(publishDate), 'MMMM d, yyyy')}</Box>
              </Box>
            </Box>
            {!showShare && <Share side="right" title={title} />}
          </Box>
        )
      }
      renderC={() =>
        showShare && (
          <Box
            display="flex"
            justifySelf="flex-end"
            alignSelf="start"
            mb="base"
          >
            <Share title={title} {...props} />
          </Box>
        )
      }
      contentTitleE={videos?.length >= 2 ? 'Videos' : null}
      renderContentE={() => (
        <>
          {actions?.length > 0 && (
            <Styled.ButtonContainer
              key={`actions-${props?.data?.id}`}
              p={{ _: 's', md: 'base' }}
            >
              {actions?.map((n, i) => (
                <Styled.ButtonLink
                  key={i}
                  href={getUrlFromRelatedNode(n?.relatedNode) || '/'}
                  target={n?.relatedNode?.url?.includes('http') ? '_blank' : ''}
                >
                  <Button width="100%">{n.title}</Button>
                </Styled.ButtonLink>
              ))}
            </Styled.ButtonContainer>
          )}
          <ContentVideosList
            key={`videos-${props?.data?.id}`}
            thumbnail={coverImageUri}
            videos={wistiaId ? wistiaId : videos}
            onSelectVideo={handleSelectVideo}
          />
        </>
      )}
      htmlContent={htmlContent}
      features={featureFeed?.features}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool,
};

export default ContentSingle;
