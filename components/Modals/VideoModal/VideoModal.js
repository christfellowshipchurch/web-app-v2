import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { Box, Modal } from 'ui-kit';
import { Video } from 'components';

function VideoModal(props = {}) {
  const uri = props?.uri;
  const poster = props?.poster;
  const wistiaId = props?.wistiaId;

  return (
    <Modal {...props} width="50vw">
      <Box borderRadius={8} overflow={'hidden'}>
        {!isEmpty(uri) ||
          (!isEmpty(wistiaId) && (
            <Video
              title={props?.title}
              src={uri}
              poster={poster}
              autoPlay={true}
              playsInline={true}
              wistiaId={wistiaId}
            />
          ))}
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
