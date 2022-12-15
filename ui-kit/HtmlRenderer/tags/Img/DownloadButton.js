import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';
import Styled from './Img.styles';

/**
 * const handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: #enter-url
        })
    } else {
      // return default button
    }
  };
 */

const DownloadButton = (props = {}) => {
  const [status, setStatus] = useState('IDLE'); // IDLE | ACTIVE | DONE

  useEffect(() => {
    if (status === 'DONE') {
      setTimeout(() => {
        setStatus('IDLE');
      }, 3500);
    }
  }, [status]);

  return (
    <Styled.DownloadButton
      status={status}
      onClick={() => {
        setStatus('DONE');
      }}
      onMouseEnter={() => setStatus('ACTIVE')}
      onMouseLeave={() => {
        if (status === 'DONE') return;
        setStatus('IDLE');
      }}
      href={`/api/image?src=${props?.source}`}
      download="ChristFellowshipChurch"
    >
      <Icon
        name={status === 'DONE' ? 'check' : 'download'}
        size={14}
        color={status === 'DONE' ? 'success' : 'black'}
      />

      <Box
        as="span"
        color={status === 'DONE' ? 'success' : 'black'}
        fontSize="0.8rem"
        fontWeight="bold"
        ml={status === 'IDLE' ? '0px' : '3px'}
      >
        {status === 'DONE' ? 'Downloaded' : 'Download'}
      </Box>
    </Styled.DownloadButton>
  );
};

DownloadButton.propTypes = {
  source: PropTypes.string,
};

DownloadButton.defaultProps = {
  source: '',
};

export default DownloadButton;
