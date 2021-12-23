import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'ui-kit';
import Styled from './Image.styles';

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
      target="_blank"
      href={props?.source}
      download
      onClick={() => {
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
