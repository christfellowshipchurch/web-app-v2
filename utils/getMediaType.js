import React from 'react';
import { get, has } from 'lodash';
import { useRouter } from 'next/router';

function getMediaType(props) {
  const router = useRouter();

  const videos = get(props, 'videos.[0].sources', []);
  const audios = get(props, 'audios.[0].sources', []);
  const url = router?.pathname;

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
