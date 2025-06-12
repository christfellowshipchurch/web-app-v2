import { useEffect } from 'react';

const PushpayEmbed = () => {
  useEffect(() => {
    // Set config
    window.pushpayEmbeddedConfig = {
      handle: 'christfellowship',
      wgc: 'eyJhc2tncCI6dHJ1ZX06S3J6cmN5QmF0N2VnMm9veElaeTVMMktYNGZF',
    };

    // Create script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embedded.pushpay.com?version=1.0.0';

    // Fallback function
    const fallback = () => {
      if (!window.pushpayEmbeddedFallbackDone) {
        window.pushpayEmbeddedFallbackDone = true;
        const img = document.createElement('img');
        img.src =
          'https://pushpay.com/Content/Beacons/eb.gif?error=EmbeddedWidgetLoadFailed';
        img.style.cssText =
          'height:1px;width:1px;position:absolute;top:0;left:0;z-index:-1';
        document.body.appendChild(img);
      }
    };

    script.onload = () => {
      window.pushpayEmbeddedFallbackDone = true;
    };
    script.onerror = fallback;
    setTimeout(fallback, 3000);

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Clean up if component unmounts
    };
  }, []);

  return <div id="pushpay-embedded-giving-fallback" />;
};

export default PushpayEmbed;
