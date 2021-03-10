import muxjs from 'mux.js';
import dynamic from 'next/dynamic';

import 'shaka-player/dist/controls.css';

// Mux is used to deal with encodings and low-level video nonsense.
// Without it, streams are unlikely to work on iOS and Safari.
if (typeof window !== 'undefined') {
  window.muxjs = muxjs;
}

// @see https://github.com/matvp91/shaka-player-react#nextjs
const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });

export default function Video(props = {}) {
  return <ShakaPlayer {...props} />;
}

Video.propTypes = {
  ...ShakaPlayer.propTypes,
};
