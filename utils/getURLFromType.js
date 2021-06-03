import getSlugFromURL from './getSlugFromUrl';

function getURLFromType(node) {
  const [type, randomId] = node.id.split(':');
  const url = node?.sharing?.url || node?.sharingUrl;
  switch (type) {
    case 'Person': {
      return `/staff/${randomId}`;
    }
    case 'InformationalContentItem':
    case 'EventContentItem':
    case 'WeekendContentItem':
    case 'MediaContentItem':
    default: {
      return `/${getSlugFromURL(url)}`;
    }
  }
}

export default getURLFromType;
