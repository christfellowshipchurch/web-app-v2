import { useEffect } from 'react';

const PushpayEmbed = () => {
  useEffect(() => {
    // Pushpay configuration
    window.pushpayEmbeddedConfig = {
      handle: 'christfellowship',
      wgc: 'eyJyYnUiOiJodHRwczovL3d3dy5jaHJpc3RmZWxsb3dzaGlwLmNodXJjaC8iLCJyYnQiOiJDaHJpc3QgRmVsbG93c2hpcCIsImFza2dwIjp0cnVlfTp0NWtuMzVaV0NNbXZfMzNMWEFzb0V6RnJ3aEk',
    };

    // Create Pushpay embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embedded.pushpay.com?version=1.0.0';

    // Fallback function if script fails or times out
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

    // Handle load/failure
    script.onload = () => {
      window.pushpayEmbeddedFallbackDone = true;
    };
    script.onerror = fallback;
    setTimeout(fallback, 3000);

    // Inject script
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="pushpay-embedded-giving-fallback" />;
};

export default PushpayEmbed;
