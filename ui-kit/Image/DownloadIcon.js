import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'ui-kit';
import Styled from './Image.styles';

function downloadImage(src) {
  const img = new Image();
  img.crossOrigin = ''; // This tells the browser to request cross-origin access when trying to download the image data.
  // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
  img.src = src;
  img.onload = () => {
    // create Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    // create a tag
    const a = document.createElement('a');
    a.download = 'download.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
}

const DownloadIcon = (props = {}) => {
  const [downloadState, setDownloadState] = useState(false);

  let iconProps = downloadState
    ? {
        name: 'check',
        size: 14,
        mx: 5,
        my: 3,
      }
    : {
        name: 'download',
        size: 14,
        m: 'xs',
        mt: 1,
      };

  return (
    <Styled.IconLink
      onClick={() => {
        downloadImage(props?.source);
        setDownloadState(true);
      }}
    >
      <Icon {...iconProps} color="primary" />
    </Styled.IconLink>
  );
};

DownloadIcon.propTypes = {
  source: PropTypes.string,
};

DownloadIcon.defaultProps = {
  source: '',
};

export default DownloadIcon;
