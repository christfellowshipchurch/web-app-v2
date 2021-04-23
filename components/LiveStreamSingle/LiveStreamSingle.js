import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { Box, Cell, Loader } from 'ui-kit';

import PreLive from './PreLive';
import Live from './Live';
import PostLive from './PostLive';

function LiveStreamSingle(props = {}) {
  if (props.loading) {
    return (
      <Cell display="flex" flexDirection="row" justifyContent="center" my="xxl">
        <Loader />
      </Cell>
    );
  }

  if (props.metaData?.isLive) {
    return <Live {...props} />;
  }

  if (props.metaData?.isBefore) {
    return <PreLive {...props} />;
  }

  if (props.metaData?.isAfter) {
    return <PostLive {...props} />;
  }

  if (!props.data) {
    return null;
  }

  // Most likely an error?
  // Redirect to somewhere else ?
  return (
    <Cell px="base" pt={{ _: 'l', lg: 'xl' }}>
      <ContentLayout
        mode={props.data.mode}
        title={props.data?.relatedNode?.title}
        summary={props.data?.relatedNode?.summary}
        coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
        renderD={() => (
          <Box mb="l">Stay tuned for updates to this event's schedule.</Box>
        )}
      />
    </Cell>
  );
}

LiveStreamSingle.propTypes = {
  data: PropTypes.object,
};

export default LiveStreamSingle;
