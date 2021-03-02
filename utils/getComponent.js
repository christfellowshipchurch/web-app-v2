// grabs __typename from edge and matches it
// with component inside of the `Components` object
function getComponent(edge, Components) {
  let { __typename, id } = edge;

  if (!__typename && id) {
    [__typename] = id.split(':');
  }

  // Catch unmapped features
  if (!Components[__typename]) {
    console.warn(`No component found for __typename: "${__typename}"`);
    return () => null;
  }

  return Components[__typename];
}

export default getComponent;
