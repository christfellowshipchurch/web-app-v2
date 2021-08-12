export default function getMetaData(node) {
  const socialMedia = node.socialMedia || {};
  const title = socialMedia.title || node.title || node.name;
  const image =
  socialMedia.image?.sources?.[0]?.uri || node.coverImage?.sources?.[0]?.uri;
  const description = socialMedia.summary || node.summary;

  return {
    title,
    image,
    description,
  };
}
