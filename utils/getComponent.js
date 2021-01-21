// grabs __typename from edge and matches it 
// with component inside of the `Components` object
function getComponent(edge, Components) {
    let { __typename } = edge;
  
    if (!__typename && itemId) {
      [__typename] = itemId.split(':');
    }
  
    return Components[__typename];
  }

  export default getComponent