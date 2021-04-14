function getURLFromType(node) {
  const [type, randomId] = node.id.split(':');
  switch (type) {
    case 'WeekendContentItem': {
      return `/page/${randomId}`;
    }
    case 'MediaContentItem': {
      return `/sermon/${randomId}`;
    }
    case 'InformationalContentItem':
    case 'EventContentItem':
    case 'Person':
    default: {
      return null;
    }
  }
}

export default getURLFromType;
