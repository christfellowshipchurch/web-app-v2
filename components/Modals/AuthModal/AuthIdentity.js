import React from 'react';

import { validateEmail, validatePhoneNumber } from 'utils';
import { useAuthIdentity, useForm, useUserExists } from 'hooks';
import { Box, Button, Checkbox, TextInput } from 'ui-kit';

function AuthIdentity() {
  const {
    status,
    setStatus,
    error,
    setError,
    handleAuthIdentity,
  } = useAuthIdentity();
  const [checkIfUserExists] = useUserExists({
    fetchPolicy: 'network-only',
    onCompleted: async data => {
      const identity = values.identity;
      const userExists = data?.userExists !== 'NONE';
      handleAuthIdentity({
        identity,
        userExists,
        nextStep: userExists ? 2 : 1,
      });
    },
  });
  const { values, handleSubmit, handleChange } = useForm(() => {
    const identity = values.identity;
    const validEmail = validateEmail(identity);
    const validPhoneNumber = validatePhoneNumber(identity);
    const validIdentity = validEmail || validPhoneNumber;
    if (validIdentity) {
      setStatus('LOADING');
      checkIfUserExists({ variables: { identity: values.identity } });
    } else {
      setStatus('ERROR');
      setError({ identity: 'That is not a valid email or phone number.' });
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        Enter your phone number or email address to get started. We'll never
        share your information or contact you (unless you ask!).
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit} px="xl">
        <Box mb="base">
          <TextInput
            id="identity"
            label="Mobile Number or Email"
            onChange={handleChange}
            required
            autoFocus
          />
          {error?.identity ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {error.identity}
            </Box>
          ) : null}
        </Box>
        <Box mb="l" display="flex">
          <Checkbox id="agreement" required onChange={handleChange} mr="s" />
          <Box as="p" fontSize="s">
            I agree to the&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="/terms-of-use">
              Terms of Use
            </a>
            &nbsp;and&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="/privacy-policy">
              Privacy Policy
            </a>
            &nbsp;laid out by Christ Fellowship Church.
          </Box>
        </Box>
        <Box textAlign="center">
          <Button type="submit" status={status}>
            {isLoading ? 'Loading...' : 'Agree and continue'}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AuthIdentity;
