import { useEffect } from 'react';
import { AppHead } from 'components';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';

import 'stream-chat-react/dist/css/index.css';
import './StreamChatOverrides.css';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

function App({ Component, pageProps }) {
  /**
   * note : Prevents pages from scrolling around before loading the next one and defaults to top of page(specifically when using `back()` in 'next/router').
   */
  useEffect(() => {
    if (window) {
      return (window.history.scrollRestoration = 'manual');
    }
    return null;
  }, []);

  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <>
        <AppHead />
        <Component {...pageProps} />
      </>
    </AppProvider>
  );
}

export default App;
