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
            //When users clicks search button we want to get the coordinates and refetch the campuses to get distance from location
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
          {/* We want to display Online campus separately */}
          {onlineCampus && (
            <DefaultCard>
              <p>{onlineCampus.name}</p>
              {onlineCampus?.distanceFromLocation && <p>{`Right here!`}</p>}
            </DefaultCard>
          )}
          {sortedCampuses?.map((campus, i) => {
            return (
              <DefaultCard key={i}>
                <p>{campus.name}</p>
                {campus?.distanceFromLocation && (
                  <p>
                    {`${Number(campus?.distanceFromLocation.toFixed(1))} miles`}
                  </p>
                )}
              </DefaultCard>
            );
          })}
        </CardGrid>
      )}
    </Box>
  );
};

export default FindNearestLocation;
