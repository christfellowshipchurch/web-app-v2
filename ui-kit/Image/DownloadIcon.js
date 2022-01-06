import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';
import Styled from './Image.styles';

const DownloadIcon = (props = {}) => {
  const [downloadState, setDownloadState] = useState(false);
  const [isShown, setIsShown] = useState(false);

  let iconProps = downloadState
    ? {
        name: 'check',
        size: 14,
        mx: 5,
        my: 3,
        color: 'tertiary',
      }
    : {
        name: 'download',
        size: 14,
        m: 'xs',
        mt: 1,
        mr: 6,
        color: 'secondary',
      };

  return (
    <Styled.DownloadLink
      onClick={() => {
        setDownloadState(true);
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      download
      href={props?.source}
      target="_blank"
    >
      <Icon {...iconProps} />
      {isShown && (
        <Box
          as="p"
          color={downloadState ? 'tertiary' : 'secondary'}
          fontSize="0.8rem"
          fontWeight="bold"
          pb="1px"
          pr="5px"
        >
          {downloadState ? 'Downloaded' : 'Download'}
        </Box>
      )}
    </Styled.DownloadLink>
  );
};

DownloadIcon.propTypes = {
  source: PropTypes.string,
};

DownloadIcon.defaultProps = {
  source: '',
};

export default DownloadIcon;
