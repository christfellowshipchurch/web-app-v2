import React from 'react';
import { useCampuses, useForm } from 'hooks';
import { useState } from 'react';
import { Box, CardGrid, HtmlRenderer, Icon } from 'ui-kit';
import LocationsLoader from './LocationsLoader';
import Styled from './EasterLocationSearch.styles';
import EasterLocationHeader from './EasterLocationHeader';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import easterServices from 'lib/easterServiceData';
import { find } from 'lodash';

const EasterLocationSearch = props => {
  const [results, setResults] = useState([{ geometry: { location: {} } }]);
  const [address, setAddress] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [locationActive, setLocationActive] = useState(true);
  const { handleSubmit } = useForm();
  const modalDispatch = useModalDispatch();

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

  function cardClicked(name) {
    console.log(name);
    modalDispatch(
      showModal('EasterLocations', {
        data: find(easterServices, { name: name }),
      })
    );
  }

  return (
    <Box
      background="url('/easter/paper-background.jpg')"
      backgroundSize="cover"
      id="times-locations"
    >
      <Styled>
        <EasterLocationHeader
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
                  <Box
                    color="black"
                    textDecoration="none"
                    onClick={() => cardClicked('Online')}
                  >
                    <Styled.LocationCard>
                      <Box as="h4" mb="0">
                        Online
                      </Box>
                      {onlineCampus?.distanceFromLocation ? (
                        <Box
                          as="h5"
                          mb="0"
                          bg="#FFEC7F"
                          p="xs"
                          borderRadius="base"
                          color="black"
                        >
                          RIGHT HERE
                        </Box>
                      ) : (
                        <Icon name="angle-right" />
                      )}
                    </Styled.LocationCard>
                  </Box>
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
                    <Box
                      as="a"
                      color="black"
                      textDecoration="none"
                      onClick={() => cardClicked(campus.name)}
                    >
                      <Styled.LocationCard>
                        <Box as="h4" mb="0" maxWidth="200px">
                          {!campus.name.includes('Español')
                            ? campus?.name
                            : `Español ${cfe}`}
                        </Box>
                        {campus?.distanceFromLocation ? (
                          <Box
                            as="h5"
                            mb="0"
                            bg="#FFEC7F"
                            p="xs"
                            borderRadius="base"
                            color="black"
                            textAlign="center"
                            width="90px"
                          >
                            {campus?.distanceFromLocation > 0 &&
                              `${Number(campus?.distanceFromLocation).toFixed(
                                1
                              )} miles`}
                          </Box>
                        ) : (
                          <Icon name="angle-right" />
                        )}
                      </Styled.LocationCard>
                    </Box>
                  </Styled.CardSpacing>
                );
              })}
            </CardGrid>
          )}
          <Box mt="l" textAlign="center">
            <HtmlRenderer htmlContent={props?.additionalInfo} />
          </Box>
        </Box>
      </Styled>
    </Box>
  );
};

export default EasterLocationSearch;
