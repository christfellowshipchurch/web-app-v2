import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useForm, useRequestPasswordChange } from 'hooks';
import { Layout } from 'components';
import { Box, Button, Card, Cell, Icon, TextInput, utils } from 'ui-kit';

export default function ResetPassword(props) {
  const router = useRouter();
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState({});
  const [requestPasswordChange] = useRequestPasswordChange();

  const { values, setValues, handleSubmit, handleChange } = useForm(
    async () => {
      // State reset
      setStatus('IDLE');
      setError({});

      // Validate fields
      if (values.password !== values.confirmPassword) {
        setStatus('ERROR');
        setError({ confirmPassword: 'Passwords do not match' });
        return;
      }

      // Send request
      setStatus('LOADING');

      const handleServerError = () => {
        setError({
          server:
            'We were unable to reset your password. Please double check the form and try again.',
        });
        setStatus('ERROR');
      };

      try {
        await requestPasswordChange({
          variables: {
            email: values.email,
            pin: values.confirmationCode,
            newPassword: values.password,
          },
          update: (
            _,
            { data: { changePasswordWithPin }, error: updateError }
          ) => {
            const token = changePasswordWithPin?.token;

            if (Boolean(token)) {
              setStatus('SUCCESS');
            } else {
              console.error('Update error', updateError);
              handleServerError();
            }
          },
        });
      } catch (requestError) {
        console.error('Request error', requestError);
        handleServerError();
      }
    }
  );

  // Hydrate email from URL query params
  const queryEmail = router.query?.email || '';

  useEffect(() => {
    if (queryEmail) {
      setValues({ email: queryEmail });
    }
  }, [queryEmail, setValues]);

  //On status change / submission forces scroll to the top to see the success message
  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [status]);

  return status === 'SUCCESS' ? (
    <Layout title="Password Reset">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
        mb="xxl"
      >
        <Card maxWidth="62%" margin="auto" p="base" pb="l">
          <Box my="l" textAlign="center">
            <Icon name="checkCircle" color="success" size="64" mb="base" />
            <Box as="h1" color="success">
              Password Reset
            </Box>
            <Box as="p">Your password has been successfully reset!</Box>
          </Box>
        </Card>
      </Cell>
    </Layout>
  ) : (
    <Layout title="Password Reset">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
        mb="xxl"
      >
        <Card width="620px" maxWidth="100%" margin="auto" p="base" pb="l">
          {/* Form Header */}
          <Box my="l" textAlign="center">
            <Box as="h1">Password Reset</Box>
            <Box as="p">Forgot your password? We’ve got you covered!</Box>
          </Box>

          <Box
            as="form"
            action=""
            onSubmit={handleSubmit}
            my="l"
            textAlign="center"
          >
            {/* Email & Confirmation Code*/}
            <Box as="section" mb="l">
              <Box
                as="h5"
                px="s"
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
                  id="confirmationCode"
                  label="Confirmation Code"
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </Box>
            </Box>

            {/* New Password Section */}
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

            {/* Form Footer */}
            <Box as="section" mt="l" textAlign="center">
              {error.server && (
                <Box as="p" color="alert" fontSize="s" mb="base">
                  {error.server}
                </Box>
              )}
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
