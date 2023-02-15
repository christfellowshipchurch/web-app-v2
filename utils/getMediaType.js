import React from 'react';
import { get, includes } from 'lodash';

function getMediaType(props) {
  const videos = get(props, 'videos.[0].sources', []);
  const audios = get(props, 'audios.[0].sources', []);
  const url = props?.url;

  let type = 'Information';

  if (videos.length > 0) {
    type = 'Video';
  } else if (audios.length > 0) {
    type = 'Audio';
  } else if (
    includes(url, 'articles') ||
    includes(url, 'devotionals') ||
    includes(url, 'studies') ||
    includes(url, 'keep-talking')
  ) {
    type = 'Article';
  }

  return type;
}

export default getMediaType;
