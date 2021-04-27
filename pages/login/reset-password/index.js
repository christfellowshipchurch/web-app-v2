import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useForm } from 'hooks';
import { Layout } from 'components';
import { Box, Button, Card, Cell, TextInput, utils } from 'ui-kit';

export default function ResetPassword(props) {
  const router = useRouter();
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState({});
  const { values, setValues, handleSubmit, handleChange } = useForm(() => {
    console.log('values:', values);
    setStatus('IDLE');
    setError({});

    if (values.password !== values.confirmPassword) {
      setStatus('ERROR');
      setError({ confirmPassword: 'Passwords do not match' });
      return;
    }

    setStatus('LOADING');
  });
  const queryEmail = router.query?.email || '';

  // Hydrate email from URL query params
  useEffect(() => {
    if (queryEmail) {
      setValues({ email: queryEmail });
    }
  }, [queryEmail, setValues]);

  return (
    <Layout title="Password Reset">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Card maxWidth="62%" margin="auto" p="base" pb="l">
          <Box my="l" textAlign="center">
            <Box as="h1">Password Reset</Box>
            <Box as="p">Forgot your password? We’ve got you covered!</Box>
          </Box>

          <Box as="form" action="" onSubmit={handleSubmit} px="xxl">
            <Box as="section" mb="l">
              <Box
                as="h5"
                px="l"
                pb="s"
                mb="base"
                color="subdued"
                textAlign="center"
              >
                Enter your Email Address and the Confirmation Code that was sent
                to your email.
              </Box>
              <Box mb="base">
                <TextInput
                  id="email"
                  label="Email Address"
                  onChange={handleChange}
                  required
                  value={values.email || queryEmail || ''}
                />
              </Box>
              <Box>
                <TextInput
                  id="code"
                  label="Confirmation Code"
                  onChange={handleChange}
                  required
                />
              </Box>
            </Box>

            <Box as="section">
              <Box as="h5" px="l" pb="s" color="subdued" textAlign="center">
                Create a new password.
              </Box>
              <Box mb="base">
                <TextInput
                  id="password"
                  type="password"
                  label="New Password"
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </Box>
              <Box>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  label="Confirm New Password"
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                {error.confirmPassword && (
                  <Box as="p" color="alert" fontSize="s" mt="s">
                    Passwords do not match.
                  </Box>
                )}
              </Box>
            </Box>

            <Box as="section" mt="l" textAlign="center">
              <Box as="p" color="alert" fontSize="s" mb="base">
                This is an error!
              </Box>
              <Button
                type="submit"
                status={status}
                disabled={status === 'LOADING'}
              >
                Set New Password
              </Button>
            </Box>
          </Box>
        </Card>
      </Cell>
    </Layout>
  );
}
