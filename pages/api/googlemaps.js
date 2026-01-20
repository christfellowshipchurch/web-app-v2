// pages/api/googlemaps.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const { query } = req;
  const { place } = query;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      res
        .status(response.status)
        .json({ error: 'Failed to fetch data from Google Maps API' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch data from Google Maps API' });
  }
}
