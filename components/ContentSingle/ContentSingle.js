import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Box, Avatar, Loader, Card, Button } from 'ui-kit';
import { ContentLayout, Share } from 'components';
import { useNodeActions } from 'hooks';
import { getUrlFromRelatedNode } from 'utils';

import ContentVideo from './ContentVideo';
import ContentVideosList from './ContentVideosList';
import Styled from './ContentSingle.styles';
function ContentSingle(props = {}) {
  const [currentVideo, setCurrentVideo] = useState(
    Array.isArray(props.data?.videos) ? props.data.videos[0] : null
  );

  const { actions } = useNodeActions({
    variables: {
      nodeId: props?.data?.id,
    },
  });

  useEffect(() => {
    // Do we have videos now, when we didn't before?
    // ( Loading just finished, so we can properly select the first video if present )
    if (props.data?.videos?.length >= 1 && currentVideo === null) {
      setCurrentVideo(props.data.videos[0]);
    }
  }, [props.data?.videos, currentVideo]);

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

  const author = props?.data?.author;
  const coverImage = props?.data?.coverImage;
  const featureFeed = props?.data?.featureFeed;
  const htmlContent = props?.data?.htmlContent;
  const mode = props?.data?.mode;
  const publishDate = props?.data?.publishDate;
  const schedule = props?.data?.schedule;
  const summary = props?.data?.summary;
  const title = props?.data?.title;
  const videos = props?.data?.videos;

  const coverImageUri = coverImage?.sources[0]?.uri;
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : undefined;

  const handleSelectVideo = video => {
    if (video !== currentVideo) {
      setCurrentVideo(video);
    }
  };

  return (
    <ContentLayout
      mode={mode}
      title={title}
      seoMetaTags={{
        description: schedule?.friendlyScheduleText || summary,
        image: coverImageUri,
        author: authorName,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        video: currentVideo?.sources[0]?.uri,
      }}
      summary={schedule?.friendlyScheduleText || summary}
      coverImage={currentVideo ? null : coverImageUri}
      renderA={() => (
        <ContentVideo video={currentVideo} poster={coverImageUri} />
      )}
      renderContentB={() =>
        author && (
          <Box display="flex" mt="base">
            <Box mr="base">
              <Avatar
                name={author.firstName}
                src={author.photo?.uri}
                height="60px"
                width="60px"
              />
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Box as="h4" mb="0">
                {authorName}
              </Box>
              <Box>{format(new Date(publishDate), 'MMMM d, yyyy')}</Box>
            </Box>
          </Box>
        )
      }
      renderC={() => (
        <Box justifySelf="flex-end" alignSelf="start">
          <Share title={title} />
        </Box>
      )}
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
            videos={videos}
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
