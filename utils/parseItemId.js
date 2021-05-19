export default function parseItemId(itemId) {
  const [type, id] = itemId.split(':');

  return { type, id };
}
