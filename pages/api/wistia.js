import fetch from 'node-fetch';

/**
 * This api file fetches data from Wistia and can either fetch projects or single media files with the hashedId(wistiaId) depending on the type passed in(projects or medias)
 */

export default async function handler({ type, wistiaId }) {
  //defaults to the 'projects' endpoint but can accept 'medias'for single videos if type is passed though
  const baseUrl = `https://api.wistia.com/v1/${
    type ? type : 'projects'
  }/${wistiaId}.json`;

  try {
    const res = await fetch(`${baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_WISTIA_API_KEY}`,
      },
    });
    if (res.status !== 200) {
      throw new Error(data.message);
    }
    const data = await res.json();
    return data;
  } catch {
    return 'Failed to fetch data from Wistia.';
  }
}
