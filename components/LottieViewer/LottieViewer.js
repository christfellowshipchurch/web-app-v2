// We are disabling this component for now because it is breaking the project when upgrading to Node v22.

import React, { useRef } from 'react';
// import lottie from 'lottie-web';

function LottieViewer({ fileName }) {
  const animationContainer = useRef(null);

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: `/${fileName}.json`,
  //   });
  // }, []);

  return <div ref={animationContainer}>disabled</div>;
}

export default LottieViewer;
