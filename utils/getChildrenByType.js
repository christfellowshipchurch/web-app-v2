export default function getChildrenByType(children = [], childTypeId) {
  return children.filter(child => child.node.parentChannel.id === `ContentChannel:${childTypeId}`);
}