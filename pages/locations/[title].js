import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import find from 'lodash/find';
import startCase from 'lodash/startCase';
import includes from 'lodash/includes';

import { ContentItemProvider } from 'providers';
import { LocationSingle, JsonLD, SEO } from 'components';
import OldLocationSingle from '../../components/LocationSingle/OldLocationSingle';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { GET_CAMPUS } from 'hooks/useCampus';
import { initializeApollo } from 'lib/apolloClient';

import {
  campusMetaData,
  campusLinks,
} from 'components/LocationSingle/locationData';
import { useAnalytics } from 'providers/AnalyticsProvider';

const OLD_LOCATION_PAGES = [
  'prison-locations',
  'iglesia-royal-palm-beach',
  'iglesia-palm-beach-gardens',
];

export default function Location(props = {}) {
  const analytics = useAnalytics();

  const router = useRouter();
  const { query } = router;
  const { title } = query;
  const metaData = find(campusMetaData, { key: title });
  const campusLink = find(campusLinks, { name: startCase(title) });

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
  }, []);

  const options = {
    variables: {
      pathname: `locations/${title}`,
    },
  };
  const serviceTimes = props?.campus?.serviceTimes ?? [];

  return (
    <>
      {!!metaData && (
        <>
          <SEO {...metaData} />
          <JsonLD
            schema={{
              '@type': 'LocalBusiness',
              name: metaData?.name,
              description: metaData?.description,
              address: `${props?.campus?.street1} ${props?.campus?.city}, ${props?.campus?.state} ${props?.campus?.postalCode}`,
              hasMap: campusLink?.googleMap,
              telephone: '5617997600',
              photo: metaData?.image,
              publicAccess: 'true',
              url: `https://christfellowship.church/locations/${title}`,
              logo: 'https://www.christfellowship.church/logo.png',
              slogan: 'Get the Most Out of Life',
              events: [
                ...serviceTimes.map(({ day, time }) => ({
                  '@type': 'Event',
                  about: 'Sunday Church Service',
                  eventSchedule: {
                    '@type': 'Schedule',
                    byDay: day,
                    scheduleTimezone: 'America/New_York',
                    startTime: time,
                  },
                })),
                {
                  '@type': 'Event',
                  about: 'Students',
                  eventSchedule: {
                    '@type': 'Schedule',
                    byDay: 'Wedneday',
                    scheduleTimezone: 'America/New_York',
                    startTime: '18:30',
                  },
                },
                {
                  '@type': 'Event',
                  about: 'Young Adults',
                  eventSchedule: {
                    '@type': 'Schedule',
                    byDay: 'Thursday',
                    scheduleTimezone: 'America/New_York',
                    startTime: '19:30',
                  },
                },
              ],
            }}
          />
        </>
      )}
      <ContentItemProvider
        Component={
          includes(OLD_LOCATION_PAGES, title)
            ? OldLocationSingle
            : LocationSingle
        }
        options={options}
      />
    </>
  );
}

// This function gets called at build time to generate the titles for _all_ messages
export async function getStaticPaths() {
  // todo : make this a Network request so that it's dynamic
  const titles = [
    'belle-glade',
    'boca-raton',
    'boynton-beach',
    'downtown-west-palm-beach',
    'jupiter',
    'okeechobee',
    'palm-beach-gardens',
    'port-st-lucie',
    'riviera-beach',
    'royal-palm-beach',
    'stuart',
    'vero-beach',
    'trinity',
  ];

  return {
    paths: titles.map(title => `/locations/${title}`),
    // Enable statically generating additional pages
    // For example: `/locations/not-a-location-yet`
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: { pathname: `locations/${params.title}` },
  });

  const campus = await apolloClient.query({
    query: GET_CAMPUS,
    variables: {
      campusName: startCase(params.title),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      campus: campus?.data?.campus ?? {},
    },
    revalidate: 1,
  };
}
