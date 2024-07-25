import React from 'react';
const WrappedComponent = React.forwardRef(({ Component, ...props }, ref) => (
  <Component {...props} />
));

export default WrappedComponent;
