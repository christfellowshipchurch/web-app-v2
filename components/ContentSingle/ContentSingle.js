import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Box, Avatar } from 'ui-kit';
import { ContentLayout, Share } from 'components';

import ContentVideo from './ContentVideo';
import ContentVideosList from './ContentVideosList';

function ContentSingle(props = {}) {
  const [currentVideo, setCurrentVideo] = useState(props.data?.videos[0]);
  const hasMultipleVideos = props.data?.videos.length >= 2;

  const handleSelectVideo = video => {
    if (video !== currentVideo) {
      setCurrentVideo(video);
    }
  };

  const coverImage = props.data?.coverImage?.sources[0]?.uri;

  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText || props.data.summary}
      coverImage={currentVideo ? null : coverImage}
      renderA={() => <ContentVideo video={currentVideo} poster={coverImage} />}
      renderContentB={() =>
        props.data?.author?.firstName && (
          <Box display="flex" mt="base">
            <Box mr="base">
              <Avatar
                name={props.data?.author?.firstName}
                source={props.data?.author?.photo?.uri}
                height="60px"
                width="60px"
              />
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Box
                as="h4"
                mb="0"
              >{`${props.data?.author?.firstName} ${props.data?.author?.lastName}`}</Box>
              <Box>
                {format(new Date(props.data?.publishDate), 'MMM d, yyyy')}
              </Box>
            </Box>
          </Box>
        )
      }
      renderC={() => (
        <Box justifySelf="flex-end" alignSelf="start">
          <Share title={props.data?.title} />
        </Box>
      )}
      contentTitleD="About"
      contentTitleE={hasMultipleVideos ? 'Videos' : null}
      renderContentE={() => (
        <ContentVideosList
          thumbnail={coverImage}
          videos={props.data?.videos}
          onSelectVideo={handleSelectVideo}
        />
      )}
      htmlContent={props.data.htmlContent}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.object,
};

export default ContentSingle;
