import { useState } from 'react';
import PropTypes from 'prop-types';

import { useCurrentBreakpoint } from 'hooks';
import { Video } from 'components';
import { DefaultCard, Icon } from 'ui-kit';

import Styled from './ContentSingle.styles';

export default function ContentVideo(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();
  const [playClicked, setPlayClicked] = useState(false);

  if (!props.video) {
    return null;
  }

  const handlePlay = () => {
    setPlayClicked(true);
  };

  return (
    <Styled.VideoContainer>
      <Video
        segmentData={props.segmentData}
        wistiaId={props?.wistiaId}
        title={props.title}
        src={props.video.sources[0].uri}
        poster={props.poster}
        autoPlay={true}
        playsInline={true}
      />
    </Styled.VideoContainer>
  );

  return (
    <DefaultCard
      position="relative"
      height={{ _: '258px', md: '596px' }}
      cursor="pointer"
      contentProps={{
        p: '0 !important',
      }}
      onClick={handlePlay}
      scaleCoverImage={!playClicked && !currentBreakpoint.isSmall}
      coverImage={props.poster}
      coverImageContentPosition="center"
      coverImageContent={() =>
        playClicked || currentBreakpoint.isSmall ? (
          <Styled.VideoContainer>
            <Video
              src={props.video.sources[0].uri}
              poster={props.poster}
              autoPlay={true}
              playsInline={true}
            />
          </Styled.VideoContainer>
        ) : (
          <Icon name="play" color="white" size="40%" opacity="0.95" />
        )
      }
      mb="l"
    />
  );
}

ContentVideo.propTypes = {
  poster: PropTypes.string,
  video: PropTypes.shape({
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
      })
    ),
  }),
};
