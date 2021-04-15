export default function getMetaData(node) {
  const socialMedia = node.socialMedia || {};
  const title = node.title || node.name || socialMedia.title;
  const image =
    node.coverImage?.sources?.[0]?.uri || socialMedia.image?.sources?.[0]?.uri;
  const description = node.summary || socialMedia.summary;

  return {
    title,
    image,
    description,
  };
}
