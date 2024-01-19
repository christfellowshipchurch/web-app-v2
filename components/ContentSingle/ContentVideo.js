import PropTypes from 'prop-types';
import { Video } from 'components';
import Styled from './ContentSingle.styles';
export default function ContentVideo(props = {}) {
  if (!props.video) {
    return null;
  }

  return (
    <Styled.VideoContainer>
      <Video
        segmentData={props?.segmentData}
        wistiaId={props?.wistiaId}
        title={props?.title}
        src={props?.wistiaId ? undefined : props?.video?.sources[0].uri}
        poster={props?.poster}
        autoPlay={true}
        playsInline={true}
      />
    </Styled.VideoContainer>
  );
}

ContentVideo.propTypes = {
  poster: PropTypes.string,
  wistiaId: PropTypes.string,
  video: PropTypes.shape({
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
      })
    ),
  }),
};
