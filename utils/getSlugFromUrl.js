export default function getSlugFromURL(slug) {
  return slug?.split('/app-link/')?.[1];
}