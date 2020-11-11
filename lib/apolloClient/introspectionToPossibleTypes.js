function introspectionToPossibleTypes(introspectionQueryResultData) {
  const possibleTypes = {};

  introspectionQueryResultData.__schema.types.forEach(supertype => {
    if (supertype.possibleTypes) {
      possibleTypes[supertype.name] = supertype.possibleTypes.map(
        subtype => subtype.name
      );
    }
  });

  return possibleTypes;
}

export default introspectionToPossibleTypes;
