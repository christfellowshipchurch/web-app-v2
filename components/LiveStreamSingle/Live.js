import React from 'react';
import PropTypes from 'prop-types';

import { Video } from 'components';
import { Box, LiveIndicator } from 'ui-kit';

import Styled from './Live.styles';

function Live(props = {}) {
  return (
    <Styled.Container>
      <Styled.Video>
        <Video
          src={props.data?.media?.sources[0].uri}
          poster={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
          autoPlay={true}
          playsInline={true}
        />
      </Styled.Video>
      <Styled.MastHead>
        <Styled.LiveIndicatorContainer>
          <LiveIndicator />
        </Styled.LiveIndicatorContainer>
        <Box>
          <Styled.Title>{props.data.relatedNode?.title}</Styled.Title>
        </Box>
      </Styled.MastHead>
      <Styled.Details>
        {props.data.relatedNode?.summary && (
          <Box as="h3">{props.data.relatedNode?.summary}</Box>
        )}
      </Styled.Details>
      <Styled.Chat>
        <h1>Chat</h1>
      </Styled.Chat>
    </Styled.Container>
  );
}

Live.propTypes = {
  data: PropTypes.object,
  // @see `useLiveStream` hook
  metaData: PropTypes.shape({
    isLive: PropTypes.bool,
    isBefore: PropTypes.bool,
    isAfter: PropTypes.bool,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
};

export default Live;
