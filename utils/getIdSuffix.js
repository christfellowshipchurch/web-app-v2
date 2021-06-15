export default function getIdSuffix(id) {
  return id?.split(':')[1] || '';
}
