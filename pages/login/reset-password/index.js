import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useForm } from 'hooks';
import { Layout } from 'components';
import { Box, Button, Card, Cell, TextInput, utils } from 'ui-kit';

export default function ResetPassword(props) {
  const router = useRouter();
  const { values, setValues, handleSubmit, handleChange } = useForm(() => {
    // const age = getAge(values.birthdate);
    // // Make sure they are at least 13 years of age.
    // if (age < 13) {
    //   setError({
    //     birthdate: 'You must be at least 13.',
    //   });
    // }
    // if (!error) {
    //   setStatus('LOADING');
    //   handleAuthIdentity({ nextStep: 2 });
    // }
    console.log('values:', values);
  });
  const queryEmail = router.query?.email || '';

  useEffect(() => {
    if (queryEmail) {
      console.log('set email:', queryEmail);
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
          <Box mt="base" mb="l" textAlign="center">
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
              </Box>
            </Box>
            <Box as="section" mt="l" textAlign="center">
              <Button type="submit">Set New Password</Button>
            </Box>
          </Box>
        </Card>
      </Cell>
    </Layout>
  );
}
