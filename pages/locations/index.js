import React from 'react';
import { useCampuses, useCurrentBreakpoint } from 'hooks';
import { kebabCase } from 'lodash';
import { useState } from 'react';
import {
  Box,
  CardGrid,
  Loader,
  Button,
  TextInput,
  HorizontalHighlightCard,
} from 'ui-kit';
import { Layout, CustomLink } from 'components';
import LocationsPageHeader from './locationsPageHeader';

const FindNearestLocation = () => {
  const [results, setResults] = useState([{ geometry: { location: {} } }]);
  const [address, setAddress] = useState();
  const currentBreakpoint = useCurrentBreakpoint();

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

  const headerContent = '';

  return (
    <Layout>
      <LocationsPageHeader
        videoBackgroundImage="/location-pages/gardens-background.png"
        backgroundVideo="/external-landing/external-bg-vid.mp4"
        {...headerContent}
      />

      <Box p="base" px={{ _: 'l', md: 'xl' }}>
        <Box textAlign="center" mt="l">
          {currentBreakpoint.isSmall && (
            <>
              <Box as="h1" color="secondary" pb="s">
                One Church with Many Locations
              </Box>
              <Box as="p" width="300px" mx="auto" mb="l">
                We believe that church isn’t just a building you walk in to, but
                a family you can belong to—so whether you call one of our many
                locations home or join from home, church is wherever you are!
              </Box>
            </>
          )}
          <Box as="h2" color="secondary" pb={{ _: 'base', md: '0' }}>
            See what campus is near you
          </Box>
          {!currentBreakpoint.isSmall && (
            <Box as="p" width="600px" mx="auto" mb="l">
              We believe that church isn’t just a building you walk in to, but a
              family you can belong to—so whether you call one of our many
              locations home or join from home, church is wherever you are!
            </Box>
          )}

          <Box
            display="flex"
            flexDirection="column"
            width={{ _: '75%', md: '45%', lg: '30%' }}
            mx="auto"
          >
            <TextInput
              fontSize={{ _: '13px', lg: '16px' }}
              textAlign="center"
              placeholder="Enter an address or a zip code here"
              onChange={e => setAddress(e.target.value)}
              mb="base"
            />
            <Button
              width="55%"
              borderRadius="6px"
              mx="auto"
              mb={{ _: 'l', md: 'xl' }}
              onClick={() => {
                //When users clicks search button we want to get the coordinates and refetch the campuses to get distance from location
                getCoordinates();
                refetch();
              }}
            >
              Search
            </Button>
          </Box>
        </Box>

        {loading ? (
          <Loader justifyContent="center" mb="l" />
        ) : (
          <CardGrid
            mb="xl"
            mx={{ _: '0', lg: 'xl' }}
            px={{ _: '0', md: 'l', lg: 'xl' }}
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
                title={onlineCampus.name}
                type="HIGHLIGHT_SMALL"
                label={onlineCampus?.distanceFromLocation && 'Right here!'}
              />
            )}
            {sortedCampuses?.map((campus, i) => {
              return (
                <CustomLink
                  as="a"
                  boxShadow="none"
                  href={`/locations/${kebabCase(campus.name)}`}
                  Component={HorizontalHighlightCard}
                  coverImage={campus?.image?.uri}
                  coverImageLabelBgColor="white"
                  coverImageOverlay={true}
                  title={campus?.name}
                  type="HIGHLIGHT_SMALL"
                  label={
                    campus?.distanceFromLocation > 1 &&
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
