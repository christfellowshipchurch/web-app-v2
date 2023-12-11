import React from 'react';
import { useActionBanner, useCampuses, useForm } from 'hooks';
import { kebabCase } from 'lodash';
import { useState } from 'react';
import { Box, CardGrid, Button, HorizontalHighlightCard, Icon } from 'ui-kit';
import { Layout, CustomLink } from 'components';
import LocationsLoader from './LocationsLoader';
import Styled from './LocationsPageHeader.styles';
import { useCurrentBreakpoint } from 'hooks';

const FindNearestLocation = () => {
  const [results, setResults] = useState([{ geometry: { location: {} } }]);
  const [address, setAddress] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { actionBanner } = useActionBanner();
  const currentBreakpoint = useCurrentBreakpoint();
  const { handleSubmit } = useForm();
  // checks for banner to adjust title height
  const isBanner = !!actionBanner;

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

  let placeholder = 'Enter address or zip code here';
  if (currentBreakpoint.isSmall || currentBreakpoint.isMedium)
    placeholder = 'Enter address/zip';

  function searchScroll() {
    let scrollTo = document.getElementById('results');
    if (scrollTo) {
      scrollTo.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function searchCurrentLocation() {
    if (hasLoaded) {
      searchScroll();
    }
    navigator.geolocation.getCurrentPosition(
      position => {
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
      },
      error => {
        console.log(error);
      }
    );
  }

  return (
    <Layout>
      <Box
        position="relative"
        display="flex"
        justifyContent={{ _: 'center', lg: 'center' }}
        alignItems={{ _: 'center', sm: 'center' }}
        backgroundPosition="center"
        backgroundSize="cover"
        mb={{ _: 'base', md: 'l', lg: 'xl' }}
      >
        <Box height={{ _: '65vh', md: '50vh', lg: '80vh' }}>
          <Styled.VideoCover
            mx="auto"
            src={'/location-pages/locations-bg-vid.mp4'}
            autoPlay
            muted
            loop
            playsInline
            type="video/mp4"
          />
        </Box>
        <Styled.VideoOverlay />
        <Box
          mx={{ _: 'base', md: 'auto', lg: 'base' }}
          width={{ _: '90%', md: '80%', lg: '90%' }}
          maxWidth={1200}
          zIndex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            height={{ _: isBanner ? '65vh' : 'auto', sm: 'auto' }}
            display={{ _: 'flex', sm: 'block' }}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Styled.ContentBox>
              <Box
                textAlign="center"
                mt={{ _: 'base', md: 'l' }}
                maxWidth={900}
              >
                <Styled.TitleBox>
                  Christ Fellowship Church Locations
                </Styled.TitleBox>
                <Styled.SubtitleBox width={{ _: '100%', md: '560px' }}>
                  {currentBreakpoint.isSmall ? (
                    <Box>
                      We are one church with many locations across South Florida
                      and online.
                    </Box>
                  ) : (
                    <Box>
                      Christ Fellowship is one church with many locations across
                      South Florida, and online—wherever you are!
                    </Box>
                  )}
                </Styled.SubtitleBox>

                <Box
                  display="flex"
                  flexDirection="column"
                  width={{ _: '80%', md: '60%', lg: '60%' }}
                  color="red"
                  mx="auto"
                  mt={{ _: 'base', md: '' }}
                  as="form"
                  onSubmit={handleSubmit}
                >
                  <Box display="flex" justifyContent="space-between">
                    <Styled.LocationInput
                      containerProps={{ width: '100%' }}
                      placeholder={placeholder}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </Box>
                  <Button
                    size="s"
                    maxWidth="200px"
                    minWidth="160px"
                    width={{ _: '70%', md: '60%', lg: '50%' }}
                    borderRadius="6px"
                    mx="auto"
                    fontSize={{ _: '16px', md: '18px' }}
                    mb={{ _: 'l', lg: 'base' }}
                    onClick={() => {
                      //When users clicks search button we want to get the coordinates and refetch the campuses to get distance from location
                      getCoordinates();
                      refetch();
                      searchScroll();
                    }}
                  >
                    Find a Location
                  </Button>
                  <Box mt={{ _: 0, md: 'base' }} mb={{ _: 'base', md: 'l' }}>
                    <Styled.CurrentLocation
                      onClick={() => {
                        //When users clicks search button we want to get their coordinates and refetch the campuses to get distance from location
                        searchCurrentLocation();
                      }}
                    >
                      Use my current location
                    </Styled.CurrentLocation>
                    <Icon
                      color="white"
                      size={{ _: 18, md: 22 }}
                      name="locationArrow"
                    />
                  </Box>
                </Box>
              </Box>
            </Styled.ContentBox>
          </Box>
        </Box>
      </Box>

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
          >
            {/* We want to display Online campus separately */}
            {onlineCampus && (
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
            )}
            {sortedCampuses?.map((campus, i) => {
              let cfe = '';
              if (campus.name.includes('Español')) {
                cfe = campus.name.substring(25, campus.name.length);
              }

              return (
                <CustomLink
                  as="a"
                  boxShadow="none"
                  href={
                    !campus.name.includes('Español')
                      ? `/locations/${kebabCase(campus.name)}`
                      : `/locations/iglesia-${kebabCase(cfe)}`
                  }
                  Component={HorizontalHighlightCard}
                  coverImage={campus?.image?.uri}
                  coverImageLabelBgColor="white"
                  coverImageOverlay={true}
                  title={campus?.name}
                  type="HIGHLIGHT_SMALL"
                  mobileHeight="150px"
                  loading={loading}
                  label={
                    campus?.distanceFromLocation > 0 &&
                    `${Number(campus?.distanceFromLocation).toFixed(1)} miles`
                  }
                />
              );
            })}
          </CardGrid>
        )}
      </Box>
    </Layout>
  );
};

export default FindNearestLocation;
