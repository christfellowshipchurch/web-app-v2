import getSlugFromURL from "./getSlugFromUrl";

function getURLFromType(node) {
  const [type, randomId] = node.id.split(':');
  const url = node?.sharing?.url;
  switch (type) {
    case 'WeekendContentItem':
    case 'MediaContentItem': {
      return `/sermon/${getSlugFromURL(url)}`;
    }
    case 'Person': {
      return `/staff/${randomId}`;
    }
    case 'InformationalContentItem':
    case 'EventContentItem':
    default: {
      return `/${getSlugFromURL(url)}`;
    }
  }
}

export default getURLFromType;
