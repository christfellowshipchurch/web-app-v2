import React from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'components';
import { Box, Card, Cell, utils } from 'ui-kit';

export default function ResetPassword(props) {
  const router = useRouter();

  return (
    <Layout title="Password Reset">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Card maxWidth="62%" margin="auto" p="base">
          <Box mt="base" mb="l" textAlign="center">
            <Box as="h1">Password Reset</Box>
            <Box as="p">Forgot your password? We’ve got you covered!</Box>
          </Box>
          <Box as="section" mb="l" px="l">
            <Box as="h5">
              Enter your Email Address and the Confirmation Code that was sent
              to your email.
            </Box>
          </Box>
          <Box as="section" px="l">
            <Box as="h5">Choose a new password</Box>
          </Box>
        </Card>
      </Cell>
    </Layout>
  );
}
