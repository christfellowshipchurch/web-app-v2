import slugify from './slugify';

function getURLFromType(node) {
  const [type, randomId] = node.id.split(':');
  switch (type) {
    case 'EventContentItem': {
      return `/events/${slugify(node.title)}`;
    }
    case 'InformationalContentItem': {
      return `/items/${slugify(node.title)}-${randomId}`;
    }
    case 'MediaContentItem': {
      return `/content/${slugify(node.title)}-${randomId}`;
    }
    default: {
      return '/';
    }
  }
}

export default getURLFromType;
