import React, { useState } from 'react';

import { validateEmail, validatePhoneNumber } from '../../../utils';
import { useForm, useRequestPin, useUserExists } from '../../../hooks';
import {
  useAuthDispatch,
  update as updateAuth,
} from '../../../providers/AuthProvider';
import { Box, Button, Checkbox, TextInput } from '../../../ui-kit';

function AuthIdentity() {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const dispatch = useAuthDispatch();
  const [requestPin] = useRequestPin();
  const [checkIfUserExists] = useUserExists({
    fetchPolicy: 'network-only',
    onCompleted: async data => {
      const userExists = data?.userExists !== 'NONE';
      if (userExists) {
        const identity = values.identity;
        const isValidPhoneNumber = validatePhoneNumber(identity);
        const isValidEmail = validateEmail(identity);

        // If they used a phone number, we need to send a PIN.
        if (isValidPhoneNumber) {
          requestPin({
            variables: {
              phone: identity,
            },
            update: (
              cache,
              {
                data: {
                  requestSmsLoginPin: { success },
                },
              }
            ) => {
              if (success) {
                setStatus('SUCCESS');
                dispatch(
                  updateAuth({
                    identity,
                    type: 'sms',
                    step: 2,
                    userExists,
                  })
                );
              }
            },
          });
        }

        // If they have a valid email, we need to set the type and
        // move them to the confirmation step.
        if (isValidEmail) {
          dispatch(
            updateAuth({
              identity,
              type: 'password',
              step: 2,
              userExists,
            })
          );
        }
      } else {
        dispatch(updateAuth({ step: 1 }));
      }
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
            required
            onChange={handleChange}
          />
          {error?.identity ? (
            <Box as="p" color="error" fontSize="s" mt="s">
              {error.identity}
            </Box>
          ) : null}
        </Box>
        <Box mb="l">
          <Checkbox
            id="agreement"
            label="I agree to the Terms of Use and Privacy Policy laid out by Christ Fellowship Church."
            required
            onChange={handleChange}
            mr="s"
          />
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
