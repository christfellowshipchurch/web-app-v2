import { AppHead } from 'components';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';

import 'stream-chat-react/dist/css/index.css';
import './StreamChatOverrides.css';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

function App({ Component, pageProps }) {
  window.history.scrollRestoration = 'manual';
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
