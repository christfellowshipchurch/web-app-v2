import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Box, Avatar } from 'ui-kit';
import { ContentLayout, Share } from 'components';

import ContentVideo from './ContentVideo';
import ContentVideosList from './ContentVideosList';

function ContentSingle(props = {}) {
  const {
    __typename,
    author,
    coverImage,
    htmlContent,
    mode,
    publishDate,
    schedule,
    summary,
    title,
    videos = [],
  } = props.data;

  const coverImageUri = coverImage?.sources[0]?.uri;
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : undefined;

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const hasMultipleVideos = videos?.length >= 2;

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
        video: videos[0].sources[0].uri,
      }}
      summary={schedule?.friendlyScheduleText || summary}
      coverImage={currentVideo ? null : coverImageUri}
      renderA={() => (
        <ContentVideo video={currentVideo} poster={coverImageUri} />
      )}
      renderC={() => (
        <Box justifySelf="flex-end" alignSelf="start">
          <Share title={title} />
        </Box>
      )}
      contentTitleD={__typename === 'EventContentItem' ? 'About' : null}
      contentTitleE={hasMultipleVideos ? 'Videos' : null}
      renderContentE={() => (
        <ContentVideosList
          thumbnail={coverImageUri}
          videos={videos}
          onSelectVideo={handleSelectVideo}
        />
      )}
      renderContentB={() =>
        author && (
          <Box display="flex" mt="base">
            <Box mr="base">
              <Avatar
                name={author.firstName}
                source={author.photo?.uri}
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
      htmlContent={htmlContent}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.object,
};

export default ContentSingle;
