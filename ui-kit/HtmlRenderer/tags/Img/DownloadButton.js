import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';
import Styled from './Img.styles';

const handleShareButton = async shareData => {
  const blob = await (await fetch(shareData)).blob();
  const file = new File([blob], shareData.image, { type: blob.type });

  try {
    await navigator.share(shareData);
    console.log('success');
  } catch (err) {
    console.log('share failed');
  }
};

const DownloadButton = (props = {}) => {
  const [status, setStatus] = useState('IDLE'); // IDLE | ACTIVE | DONE

  useEffect(() => {
    if (status === 'DONE') {
      setTimeout(() => {
        setStatus('IDLE');
      }, 3500);
    }
  }, [status]);

  // const file = new File([blob], image, { type: 'image/jpeg' });

  return (
    <Styled.DownloadButton
      status={status}
      // onClick={() => {
      //   setStatus('DONE');
      // }}
      onClick={() =>
        handleShareButton({
          title: 'CF Images',
          text: 'Share this image!',
          image: `/api/image?src=${props?.source}`,
          // files: [file],
        })
      }
      onMouseEnter={() => setStatus('ACTIVE')}
      onMouseLeave={() => {
        if (status === 'DONE') return;
        setStatus('IDLE');
      }}
      // href={`/api/image?src=${props?.source}`}
      // download="ChristFellowshipChurch"
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

{
  /* <div className="App">
<h1>React Web Share API</h1>
<button
  onClick={handleShareButton}
  className="share-button"
  type="button"
  title="Share this article"
>
  <svg>
    <use href="#share-icon" />
  </svg>
  <span>Share</span>
</button>
<svg>
  <defs>
    <symbol
      id="share-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-share"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </symbol>
  </defs>
</svg>
</div> */
}
