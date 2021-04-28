import slugify from './slugify';

/**
 * note : Added additional check for title. If no title exist in the related node, pass in a separate title
 */

function getUrlFromRelatedNode(relatedNode) {
  if (relatedNode?.url) {
    return relatedNode?.url;
  }

  if (relatedNode?.routing?.pathname) {
    return `/${relatedNode?.routing?.pathname}`;
  }

  return '/';
}

export default getUrlFromRelatedNode;
