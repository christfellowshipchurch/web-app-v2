import React from 'react';
import { useCampuses, useForm } from 'hooks';
import { kebabCase } from 'lodash';
import { useState } from 'react';
import { Box, CardGrid, HorizontalHighlightCard } from 'ui-kit';
import { Layout, CustomLink } from 'components';
import LocationsLoader from './LocationsLoader';
import Styled from './LocationSearch.styles';
import LocationHeader from './LocationHeader';

const LocationSearch = () => {
  const [results, setResults] = useState([{ geometry: { location: {} } }]);
  const [address, setAddress] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [locationActive, setLocationActive] = useState(true);
  const { handleSubmit } = useForm();

  const userCoordinatesExists =
    results[0]?.geometry?.location?.lat && results[0]?.geometry?.location?.lng;

  const { campuses, loading, refetch } = useCampuses(
    userCoordinatesExists && {
      variables: {
        latitude: results[0].geometry.location.lat,
        longitude: results[0].geometry.location.lng,
      },
    }
  );

  if (typeof document !== 'undefined') {
    // Auto search using the user's current location
    if (navigator.geolocation && !hasLoaded) {
      setHasLoaded(true);
      searchCurrentLocation();
    }
  }

  // sort campuses by distance from location
  let sortedCampuses = [...campuses].sort((a, b) => {
    return a.distanceFromLocation - b.distanceFromLocation;
  });

  // Remove Online Campus from sortedCampuses array to ensure it is always the first item in the list
  const onlineCampusIndex = sortedCampuses.findIndex(campus => {
    return campus.name === 'Online (CF Everywhere)';
  });
  const onlineCampus = sortedCampuses[onlineCampusIndex];
  sortedCampuses.splice(onlineCampusIndex, 1);

  const getCoordinates = async () => {
    if (address) {
      // get coordinates from address
      const response = await fetch(`/api/googlemaps?place=${address}`);
      const data = await response.json();
      setResults(data.results);
    } else {
      // if no address is entered, set results to an empty array
      setResults([{ geometry: { location: {} } }]);
    }
  };

  function searchScroll() {
    let scrollTo = document.getElementById('results');
    if (scrollTo) {
      scrollTo.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function searchCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocationActive(true);
        refetch();
        setResults([
          {
            geometry: {
              location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            },
          },
        ]);
        refetch();
        if (hasLoaded) {
          searchScroll();
        }
      },
      error => {
        if (hasLoaded) {
          setLocationActive(false);
        }
        setHasLoaded(true);
        console.log(error);
      }
    );
  }

  return (
    <Layout>
      <LocationHeader
        handleSubmit={handleSubmit}
        setAddress={setAddress}
        getCoordinates={getCoordinates}
        refetch={refetch}
        searchScroll={searchScroll}
        searchCurrentLocation={searchCurrentLocation}
        locationActive={locationActive}
        setLocationActive={setLocationActive}
      />

      <Box p="base" id="results" px={{ _: 's', md: 'xl' }}>
        {loading ? (
          // New Skeleton Loader
          <LocationsLoader mb="l" loading={true} />
        ) : (
          <CardGrid
            mb="xl"
            mx={{ _: 'base', md: 'auto' }}
            px={{ _: '0', md: 'l', lg: 'xl' }}
            maxWidth={1100}
            columns={'12'}
          >
            {/* We want to display Online campus separately */}
            {onlineCampus && (
              <Styled.CardSpacing key={1} index={1} total={1}>
                <CustomLink
                  as="a"
                  boxShadow="none"
                  href={'/locations/cf-everywhere'}
                  Component={HorizontalHighlightCard}
                  coverImage={onlineCampus?.image?.uri}
                  coverImageOverlay={true}
                  coverImageLabelBgColor="WHITE"
                  title={'Online'}
                  type="HIGHLIGHT_SMALL"
                  mobileHeight="150px"
                  loading={loading}
                  label={onlineCampus?.distanceFromLocation && 'Right here!'}
                />
              </Styled.CardSpacing>
            )}
            {sortedCampuses?.map((campus, i) => {
              let cfe = '';
              if (campus.name.includes('Español')) {
                cfe = campus.name.substring(25, campus.name.length);
              }
              return (
                <Styled.CardSpacing
                  key={i + 1}
                  index={i + 1}
                  total={sortedCampuses?.length + 1}
                >
                  <CustomLink
                    as="a"
                    boxShadow="none"
                    href={
                      !campus.name.includes('Español')
                        ? campus.name.includes('Downtown')
                          ? `/dwpb`
                          : `/locations/${kebabCase(campus.name)}`
                        : `/locations/iglesia-${kebabCase(cfe)}`
                    }
                    Component={HorizontalHighlightCard}
                    coverImage={campus?.image?.uri}
                    coverImageLabelBgColor="white"
                    coverImageOverlay={true}
                    title={
                      campus?.name === 'Trinity'
                        ? 'Trinity in Palm Beach Gardens'
                        : campus?.name
                    }
                    type="HIGHLIGHT_SMALL"
                    mobileHeight="150px"
                    loading={loading}
                    label={
                      campus?.distanceFromLocation > 0 &&
                      `${Number(campus?.distanceFromLocation).toFixed(1)} miles`
                    }
                  />
                </Styled.CardSpacing>
              );
            })}
          </CardGrid>
        )}
      </Box>

      {/* Prison Location */}
      <Box as="h2" textAlign="center">
        Additional Locations
      </Box>
      <Box mx="auto" mb="xl" maxWidth={{ _: '90vw', md: 600 }}>
        <CustomLink
          as="a"
          boxShadow="none"
          href={'/locations/prison-locations'}
          Component={HorizontalHighlightCard}
          coverImage={'/location-pages/prison-location.jpeg'}
          coverImageLabelBgColor="white"
          coverImageOverlay={true}
          title={'Prison Locations'}
          type="HIGHLIGHT_SMALL"
          mobileHeight="150px"
          loading={loading}
          width="100%"
        />
      </Box>
    </Layout>
  );
};

export default LocationSearch;
