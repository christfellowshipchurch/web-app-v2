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
        poster={props.poster}
        autoPlay={true}
        playsInline={true}
      />
    </Styled.VideoContainer>
  );
}

ContentVideo.propTypes = {
  poster: PropTypes.string,
  wistiaID: PropTypes.string,
  video: PropTypes.shape({
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
      })
    ),
  }),
};
