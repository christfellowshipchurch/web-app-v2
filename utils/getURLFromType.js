import slugify from './slugify';

/**
 * note : Added additional check for title. If no title exist in the related node, pass in a separate title
 */

/**
 * ! Deprecated: these URLs are not valid anymore, and won't be used when we launch the Web 2.0
 */
function getURLFromType(node, title) {
  const [type, randomId] = node?.id?.split(':');

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
    case 'Url': {
      return node.url;
    }
    default: {
      return '/';
    }
  }
}

export default getURLFromType;
