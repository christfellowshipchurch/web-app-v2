import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieViewer({ fileName }) {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/${fileName}.json`,
    });
  }, []);

  return <div ref={animationContainer}></div>;
}

export default LottieViewer;
