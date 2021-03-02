import slugify from './slugify';

/**
 * note : Added adtional check for title. If no title exist in the related node, pass in a separate title
 */

function getURLFromType(node, title) {
  const [type, randomId] = node.id.split(':');
  switch (type) {
    case 'EventContentItem': {
      return `/events/${slugify(node.title ? node.title : title)}`;
    }
    case 'InformationalContentItem': {
      return `/items/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    case 'MediaContentItem': {
      return `/content/${slugify(node.title ? node.title : title)}-${randomId}`;
    }
    default: {
      return '/';
    }
  }
}

export default getURLFromType;
