import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { Layout } from 'components';

const NotFound = (props = {}) => {
  return props?.layout ? (
    <Layout title="404 Not Found">
      <Box mt="xl" textAlign="center">
        <Box
          as="img"
          alt="Error Image"
          width="90%%"
          maxWidth={750}
          src="/error.png"
          margin="auto"
        />
        <Box as="h1" mt="l">
          Page Not Found
        </Box>
        <Box as="p" fontSize="l" mb="xxl">
          The page you’re looking for doesn’t exist, or is unavailable.
        </Box>
      </Box>
    </Layout>
  ) : (
    <Box mt="xl" textAlign="center">
      <Box
        as="img"
        alt="Error Image"
        width="90%%"
        maxWidth={750}
        src="/error.png"
        margin="auto"
      />
      <Box as="h1" mt="l">
        Page Not Found
      </Box>
      <Box as="p" fontSize="l" mb="xxl">
        The page you’re looking for doesn’t exist, or is unavailable.
      </Box>
    </Box>
  );
};

NotFound.propTypes = {
  layout: PropTypes.bool,
};

NotFound.defaultProps = {
  layout: true,
};

export default NotFound;
