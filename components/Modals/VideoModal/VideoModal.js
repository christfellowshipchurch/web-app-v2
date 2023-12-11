import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { Box, Modal } from 'ui-kit';
import { Video } from 'components';
import { useCurrentBreakpoint } from 'hooks';
function VideoModal(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();

  const uri = props?.uri;
  const poster = props?.poster;
  const wistiaId = props?.wistiaId;
  var width = '90%';
  if (!currentBreakpoint.isSmall) {
    width = '50vw';
  }
  return (
    <Modal {...props} width={width}>
      <Box borderRadius={8} overflow={'hidden'}>
        {(!isEmpty(uri) || !isEmpty(wistiaId)) && (
          <Video
            title={props?.title}
            src={uri}
            poster={poster}
            autoPlay={true}
            playsInline={true}
            wistiaId={wistiaId}
          />
        )}
      </Box>
    </Modal>
  );
}

VideoModal.propTypes = {
  // ...Modal.propTypes,
};

VideoModal.defaultProps = {
  uri: null,
  poster: null,
};

export default VideoModal;
