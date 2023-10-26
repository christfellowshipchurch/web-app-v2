import React from 'react';
import { useCampuses } from 'hooks';
import { useState } from 'react';
import {
  Box,
  CardGrid,
  Loader,
  Image,
  Button,
  TextInput,
  HorizontalHighlightCard,
} from 'ui-kit';
import { Layout } from 'components';

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
    return campus.name === 'Online (CF Everywhere)' && campus.image.uri;
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

  return (
    <Layout>
      <Image
        source={'external-landing/new-here-1.jpeg'}
        height="40vh"
        borderRadius="0"
        m="0px"
      />
      <Box p="base">
        <Box textAlign="center" mt="l">
          <Box as="h2" color="secondary">
            See what campus is near you
          </Box>
          <Box as="p" width="600px" mx="auto" mb="l">
            We believe that church isn’t just a building you walk in to, but a
            family you can belong to—so whether you call one of our many
            locations home or join from home, church is wherever you are!
          </Box>

          <Box display="flex" flexDirection="column" width="30%" mx="auto">
            <TextInput
              placeholder="Enter an address"
              onChange={e => setAddress(e.target.value)}
              mb="base"
            />
            <Button
              width="55%"
              borderRadius="6px"
              mx="auto"
              mb="xl"
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
          <Loader mb="l" />
        ) : (
          <CardGrid mb="xl">
            {/* We want to display Online campus separately */}
            {onlineCampus && (
              <HorizontalHighlightCard
                type="HIGHLIGHT_SMALL"
                coverImage={onlineCampus.image.uri}
                label={onlineCampus?.distanceFromLocation && 'Right here!'}
                title={onlineCampus.name}
              />
            )}
            {sortedCampuses?.map((campus, i) => {
              return (
                <HorizontalHighlightCard
                  type="HIGHLIGHT_SMALL"
                  coverImage={campus?.image?.uri}
                  label={
                    campus?.distanceFromLocation > 1 &&
                    `${Number(campus?.distanceFromLocation).toFixed(1)} miles`
                  }
                  title={campus?.name}
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
