import React from 'react';

import { Box } from 'ui-kit';
import { CustomLink, Layout } from 'components';

const GenericError = () => {
  return (
    <Layout title="Error">
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
          Oops! Something went wrong.
        </Box>
        <Box as="p" fontSize="l">
          We were unable to load the content you were looking for. Please go
          back and try again.
        </Box>
        <Box as="p" fontSize="l" mb="xxl">
          If you're still having trouble, you can{' '}
          <CustomLink
            href="https://form.jotform.com/201343828801148"
            title="Contact Us"
          >
            contact us
          </CustomLink>{' '}
          for assistance.
        </Box>
      </Box>
    </Layout>
  );
};

export default GenericError;
