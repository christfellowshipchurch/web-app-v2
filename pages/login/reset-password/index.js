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
        <Card maxWidth="62%" margin="auto" p="base">
          <Box as="form" action="" onSubmit={handleSubmit} px="xl">
            <Box mt="base" mb="l" textAlign="center">
              <Box as="h1">Password Reset</Box>
              <Box as="p">Forgot your password? We’ve got you covered!</Box>
            </Box>
            <Box as="section" mb="l" px="l">
              <Box as="h5">
                Enter your Email Address and the Confirmation Code that was sent
                to your email.
              </Box>

              <Box>
                <TextInput
                  id="email"
                  label="Email Address"
                  onChange={handleChange}
                  required
                  value={values.email || queryEmail || ''}
                />
              </Box>
            </Box>
            <Box as="section" px="l">
              <Box as="h5">Choose a new password</Box>
            </Box>
            <Box as="section" px="l">
              <Button type="submit">Set New Password</Button>
            </Box>
          </Box>
        </Card>
      </Cell>
    </Layout>
  );
}
