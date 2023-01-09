import React from 'react';
import { get, has } from 'lodash';

function getMediaType(props) {
  const videos = get(props, 'videos.[0].sources', []);
  const audios = get(props, 'audios.[0].sources', []);
  const url = props?.url;

  let type = 'information';

  if (videos.length > 0) {
    type = 'video';
  } else if (audios.length > 0) {
    type = 'audio';
  } else if (has(url, ['articles', 'devotionals', 'studies', 'keep-talking'])) {
    type = 'article';
  }

  return type;
}

export default getMediaType;
