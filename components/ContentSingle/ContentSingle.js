import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, DefaultCard, Icon } from 'ui-kit';
import { ContentLayout, Share, Video } from 'components';

import ContentVideos from './ContentVideos';
import Styled from './ContentSingle.styles';

function ContentSingle(props = {}) {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleSelectVideo = video => {
    if (video !== currentVideo) {
      setCurrentVideo(video);
    }
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  const coverImage = props.data?.coverImage?.sources[0]?.uri;

  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText || props.data.summary}
      coverImage={currentVideo ? null : coverImage}
      renderA={
        currentVideo
          ? () => (
              <DefaultCard
                position="relative"
                height={{ _: '298px', md: '596px' }}
                contentProps={{
                  height: '100%',
                  p: '0 !important',
                }}
                mb="l"
              >
                <Styled.VideoContainer>
                  <Video
                    src={currentVideo.sources[0].uri}
                    poster={coverImage}
                    autoPlay={true}
                    playsInline={true}
                  />
                </Styled.VideoContainer>
                <Button
                  position="absolute"
                  top="base"
                  right="base"
                  p="s"
                  variant="link"
                  color="white"
                  zIndex="1"
                  onClick={handleCloseVideo}
                >
                  <Icon name="x" size="30" />
                </Button>
              </DefaultCard>
            )
          : null
      }
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share title={props.data.title} />
        </Box>
      )}
      contentTitleD="About"
      contentTitleE={props.data?.videos?.length ? 'Videos' : null}
      renderContentE={() => (
        <ContentVideos
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
