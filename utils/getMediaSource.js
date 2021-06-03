export default function getMediaSource(node, mediaType = 'videos') {
  return node?.[mediaType]?.filter(({ sources }) => sources.length)[0]
    ?.sources[0].uri;
}
