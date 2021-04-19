import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
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
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share title={props.data.title} />
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
