export default function getChildrenByType(children = [], childTypeId) {
  return children?.length ? children.filter(child => child.node.parentChannel.id === `ContentChannel:${childTypeId}`) : [];
}