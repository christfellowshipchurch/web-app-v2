import React, { useEffect, useState } from 'react';

export default function DistanceCalculator() {
  const [locationPosition, setLocationPosition] = useState({});

  function distance(lat1, lon1, lat2, lon2, name) {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const distance = lon1 - lon2;
    const radDistance = (Math.PI * distance) / 180;

    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radDistance);

    if (dist > 1) {
      dist = 1;
    }

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (name === 'K') {
      dist *= 1.609344;
    } else if (name === 'N') {
      dist *= 0.8684;
    }

    return dist;
  }

  setLocationPosition({ latitude: 43.5, longitude: 81.5 });

  const testData = {
    location: '',
    locations: [
      { latitude: 44.5, longitude: 89.5 },
      { latitude: 39.913818, longitude: 116.363625 },
      { latitude: 1.29027, longitude: 139.839478 },
    ],
  };

  const getFinalDistance = () => {
    const locationLatitude = testData.locations.map(el => el.latitude);
    const locationLongitude = testData.locations.map(el => el.longitude);
    const distanceArray = locationLatitude.map((lat, index) => {
      return distance(
        locationPosition.latitude,
        locationPosition.longitude,
        lat,
        locationLongitude[index]
      );
    });

    const closest = Math.min(...distanceArray);
    console.log('closest', closest);

    const closestLocationIndex = distanceArray.indexOf(closest);
    return testData.locations[closestLocationIndex];
  };

  return {};
}
