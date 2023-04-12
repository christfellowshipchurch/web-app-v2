import React, { useEffect, useState } from 'react';

import { Layout } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import { CoverImage } from 'ui-kit';

function HeartForTheHouse(props = {}) {
  const [imageSize, setImageSize] = useState('');
  const currentBreakpoint = useCurrentBreakpoint();

  //changes banner image based on screen size.
  useEffect(() => {
    switch (currentBreakpoint?.name) {
      case 'sm':
        return setImageSize('-mobile');
      case 'xl':
        return setImageSize('-large');
      default:
        return setImageSize('');
    }
  }, [currentBreakpoint]);

  return (
    <Layout>
      <CoverImage
        type="hero-glass"
        src={`/heart-for-house/banners/header${imageSize}.jpg`}
      />
      <CoverImage
        type="hero-glass"
        src={`/heart-for-house/banners/year-review${
          imageSize === '-large' ? '' : imageSize
        }.jpg`}
      />
      <CoverImage
        type="hero-glass"
        src={`/heart-for-house/banners/vision${
          imageSize === '-large' ? '' : imageSize
        }.jpg`}
      />
    </Layout>
  );
}

export default HeartForTheHouse;
