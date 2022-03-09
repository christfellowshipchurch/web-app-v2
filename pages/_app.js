import { useEffect } from 'react';
import { AppHead } from 'components';
import JsonLD from 'components/JsonLD';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';

import 'stream-chat-react/dist/css/index.css';
import './StreamChatOverrides.css';

import 'react-quill/dist/quill.snow.css';

import './proxima-nova.css';
import './merriweather.css';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

const christFellowship = {
  '@type': 'Organization',
  name: 'Christ Fellowship Church',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palm Beach Gandens',
    addressRegion: 'FL',
    postalCode: '33418',
    streetAddress: '5343 Northlake Blvd',
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Tom Mullins',
      givenName: 'Tom',
      familyName: 'Mullins',
      url: 'https://www.christfellowship.church/about',
    },
    {
      '@type': 'Person',
      name: 'Donna Mullins',
      givenName: 'Donna',
      familyName: 'Mullins',
      url: 'https://www.christfellowship.church/about',
    },
  ],
  telephone: '(561) 799-7600',
  url: 'christfellowship.church',
  logo: 'https://www.christfellowship.church/logo.png',
};

const todd = {
  '@type': 'Person',
  name: 'Todd Mullins',
  givenName: 'Todd',
  familyName: 'Mullins',
  jobTitle: 'Senior Pastor',
  worksFor: christFellowship,
  url: 'https://christfellowship.church/about',
  image:
    'https://rock.christfellowship.church/GetImage.ashx?id=2343360&format=jpg',
};

const julie = {
  '@type': 'Person',
  name: 'Julie Mullins',
  givenName: 'Julie',
  familyName: 'Mullins',
  jobTitle: 'Senior Pastor',
  worksFor: christFellowship,
  url: 'https://www.christfellowship.church/about',
  image:
    'https://rock.christfellowship.church/GetImage.ashx?id=2343358&format=jpg',
};

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

        <JsonLD
          schema={{
            ...todd,
            spouse: julie,
          }}
        />
        <JsonLD
          schema={{
            ...julie,
            spouse: todd,
          }}
        />
        <JsonLD schema={christFellowship} />

        <Component {...pageProps} />
      </>
    </AppProvider>
  );
}

export default App;
