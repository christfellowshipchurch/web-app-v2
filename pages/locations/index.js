import React from 'react';
import { useCampuses } from 'hooks';
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
        backgroundVideo="/location-pages/locations-bg-vid.mp4"
        videoBackgroundImage="/location-pages/locations-bg-video-frame-1.png"
        {...headerContent}
      />

      <Box p="base" px={{ _: 's', md: 'xl' }}>
        <Box textAlign="center" mt="l">
          <Box as="h1" color="secondary" pb="s">
            Find a Campus Near You
          </Box>
          <Box
            as="p"
            width={{ _: '100%', md: '600px' }}
            mx="auto"
            mb={{ _: 's', md: 'l' }}
          >
            We believe that church isn’t just a building you walk in to, but a
            family you can belong to—so whether you call one of our many
            locations home or join from home, church is wherever you are!
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            width={{ _: '75%', md: '45%', lg: '30%' }}
            mx="auto"
          >
            <TextInput
              fontSize={{ _: '20px', lg: '16px' }}
              textAlign="center"
              placeholder="Enter address or zip code"
              onChange={e => setAddress(e.target.value)}
              mb="base"
            />
            <Button
              width="55%"
              borderRadius="6px"
              mx="auto"
              fontSize="20px"
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
                label={onlineCampus?.distanceFromLocation && 'Right here!'}
              />
            )}
            {sortedCampuses?.map((campus, i) => {
              let cfe = '';
              if (campus.name.includes('Español')) {
                cfe = campus.name.substring(11, campus.name.length);
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
