import fetch from 'node-fetch';

//Grabs data from Greenhouse for our Career Pages

export default async function handler(url) {
  const baseUrl = 'https://boards-api.greenhouse.io/v1/boards/christfellowship';

  try {
    const res = await fetch(`${baseUrl}${url}`);
    if (res.status !== 200) {
      throw new Error(data.message);
    }
    const data = await res.json();
    return data;
  } catch {
    return 'Failed to fetch data from Greenhouse.';
  }
}
