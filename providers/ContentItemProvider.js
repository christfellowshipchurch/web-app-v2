import React from 'react';
import PropTypes from 'prop-types';

import { useContentItem } from 'hooks';
import { Box, Loader } from 'ui-kit';

function ContentItemProvider({ Component, options, ...props }) {
  const { loading, error, item } = useContentItem(options);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  return <Component data={item} error={error} {...props} />;
}

ContentItemProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default ContentItemProvider;
