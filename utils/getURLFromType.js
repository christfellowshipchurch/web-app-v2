function getURLFromType(node) {
  const [type, randomId] = node.id.split(':');
  switch (type) {
    case 'WeekendContentItem':
    case 'MediaContentItem': {
      return `/sermon/${randomId}`;
    }
    case 'Person': {
      return `/staff/${randomId}`;
    }
    case 'InformationalContentItem':
    case 'EventContentItem':
    default: {
      return `/page/${randomId}`;
    }
  }
}

export default getURLFromType;
