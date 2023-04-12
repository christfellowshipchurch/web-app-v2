import React, { useEffect, useState } from 'react';

import { Layout } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import { CoverImage } from 'ui-kit';

function HeartForTheHouse(props = {}) {
  const [headerImage, setHeaderImage] = useState('');
  const currentBreakpoint = useCurrentBreakpoint();

  //changes header image base on screen size.
  useEffect(() => {
    switch (currentBreakpoint?.name) {
      case 'sm':
        setHeaderImage('-mobile');
      case 'xl':
        setHeaderImage('-large');
      default:
        setHeaderImage('');
    }
  }, [currentBreakpoint]);

  return (
    <Layout>
      <CoverImage
        type="hero-glass"
        src={`/heart-for-house/header${headerImage}.jpg`}
      />
    </Layout>
  );
}

export default HeartForTheHouse;
