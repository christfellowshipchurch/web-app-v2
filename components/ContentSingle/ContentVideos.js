import PropTypes from 'prop-types';

import { CardGrid, HorizontalHighlightCard } from 'ui-kit';

export default function ContentVideos(props = {}) {
  if (!props.videos?.length) {
    return null;
  }

  return (
    <CardGrid columns="1" gridRowGap={{ _: 's', md: 'base' }}>
      {props.videos.map(video => (
        <HorizontalHighlightCard
          key={video.key}
          type="HIGHLIGHT_X_SMALL"
          coverImage={props.thumbnail}
          coverImageTitle={video.name}
          coverImageOverlay={true}
          onClick={() => {
            props.onSelectVideo(video);
          }}
          cursor="pointer"
        />
      ))}
    </CardGrid>
  );
}

ContentVideos.propTypes = {
  // Individual videos don't have thumbnails, so one is defined
  // globally to be used for all of them...
  thumbnail: PropTypes.string,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
        })
      ),
    })
  ),
  onSelectVideo: PropTypes.func.isRequired,
};

ContentVideos.defaultProps = {
  videos: [],
};
