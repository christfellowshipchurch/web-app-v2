import React from 'react';

function onPressActionItem({ action, relatedNode }) {
  /**
   * note : if an action should do anything outside of linking using `<a>`, break the default and handle your logic here
   *
   * event.preventDefault();
   */

  switch (action) {
    case 'READ_CONTENT':
    case 'READ_EVENT':
    case 'OPEN_NODE':
    case 'OPEN_URL':
      return relatedNode?.url;
    case 'OPEN_AUTHENTICATED_URL':
    case 'OPEN_CHANNEL':
    default:
      break;
  }
}

export default onPressActionItem;
