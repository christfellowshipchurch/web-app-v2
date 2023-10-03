'use client';
import { Layout } from 'components';
import { useRouter } from 'next/router';
import React from 'react';
import { Box } from 'ui-kit';

function TestingUrl() {
  const router = useRouter();
  const { query } = router;
  return (
    <Layout>
      <Box p="l">
        <Box as="h1">Testing URL...</Box>
        <Box as="p">
          <b>Url: </b>
          {router.asPath}
        </Box>
        {/* If query object has parameters display them here... */}
        {Object.keys(query).length > 0 && (
          <Box as="p">
            <b>Parameters: </b>
            {JSON.stringify(query)}
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default TestingUrl;
