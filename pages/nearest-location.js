import React from 'react';
import { useCampuses } from 'hooks';
import { useState } from 'react';
import { Box, CardGrid, DefaultCard, Loader } from 'ui-kit';

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

  const getCoordinates = async () => {
    if (address) {
      const response = await fetch(`/api/googlemaps?place=${address}`);
      const data = await response.json();
      setResults(data.results);
    } else {
      // if no address is entered, set results to an empty array
      setResults([{ geometry: { location: {} } }]);
    }
  };
  return (
    <Box p="base">
      <Box>
        <h1>Find Nearest Location</h1>
      </Box>
      <Box my="l">
        <input
          type="text"
          placeholder="Enter an address"
          onChange={e => setAddress(e.target.value)}
        />
        <button
          onClick={() => {
            getCoordinates();
            refetch();
          }}
        >
          Search
        </button>
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <CardGrid>
          {campuses?.map(campus => (
            <DefaultCard key={campus.id}>
              <p>{campus.name}</p>
              {campus?.distanceFromLocation && (
                <p>{Number(campus?.distanceFromLocation.toFixed(1))} miles</p>
              )}
            </DefaultCard>
          ))}
        </CardGrid>
      )}
    </Box>
  );
};

export default FindNearestLocation;
