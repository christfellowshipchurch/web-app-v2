'use client';
import React, { useEffect } from 'react';

const WistiaPlayer = ({ videoId }) => {
  useEffect(() => {
    // Dynamically add the Wistia scripts when the component mounts
    const script1 = document.createElement('script');
    script1.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, [videoId]);

  return (
    <div
      className={`wistia_embed wistia_async_${videoId} seo=true videoFoam=true`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      &nbsp;
    </div>
  );
};

export default WistiaPlayer;
