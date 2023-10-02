import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';
import Styled from './Img.styles';
import { useCurrentBreakpoint } from 'hooks';

const DownloadButton = (props = {}) => {
  const [status, setStatus] = useState('IDLE'); // IDLE | ACTIVE | DONE
  const currentBreakpoint = useCurrentBreakpoint();

  const handleShareButton = async shareData => {
    if (currentBreakpoint.isSmall || currentBreakpoint.isMedium) {
      try {
        await navigator.share(shareData);
        console.log('success');
      } catch (err) {
        console.log('share failed');
      }
    }
  };
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
        handleShareButton({
          title: 'CF Images',
          text: 'Share this image!',
          image: `/api/image?src=${props?.source}`,
        });
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
