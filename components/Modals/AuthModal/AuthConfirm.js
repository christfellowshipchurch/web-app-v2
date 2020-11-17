import React, { useState } from 'react';

import {
  useAuthenticateCredentials,
  useForm,
  useVerifyPin,
} from '../../../hooks';
import { useAuth, update as updateAuth } from '../../../providers/AuthProvider';
import { hideModal, useModalDispatch } from '../../../providers/ModalProvider';
import { Box, Button, TextInput } from '../../../ui-kit';

const COPY = {
  DESCRIPTION: {
    sms:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    password: 'Enter in your existing password or create your password below.',
  },
  LABEL: {
    sms: 'Confirmation Code',
    password: 'Password',
  },
};

function AuthConfirm() {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const [verifyPin] = useVerifyPin();
  const [authenticateCredentials] = useAuthenticateCredentials();
  const { values, handleChange, handleSubmit } = useForm(async () => {
    const passcode = values.passcode;
    setStatus('LOADING');
    if (state.type === 'sms') {
      try {
        await verifyPin({
          variables: { phone: state.identity, code: passcode },
          update: (
            cache,
            { data: { authenticateWithSms: { token } = {} } = {} }
          ) => {
            setStatus('SUCCESS');
            dispatch(updateAuth({ token }));
            modalDispatch(hideModal());
          },
          onError: () => {
            setStatus('ERROR');
            setError({
              passcode: `The ${
                COPY.LABEL[state.type]
              } you entered is incorrect.`,
            });
          },
        });
      } catch (error) {
        setStatus('IDLE');
        console.log(error);
      }
    }
    if (state.type === 'password') {
      try {
        await authenticateCredentials({
          variables: { email: state.identity, password: passcode },
          update: (cache, { data: { authenticate: { token } = {} } = {} }) => {
            setStatus('SUCCESS');
            dispatch(updateAuth({ token }));
            modalDispatch(hideModal());
          },
          onError: () => {
            setStatus('ERROR');
            setError({
              passcode: `The ${
                COPY.LABEL[state.type]
              } you entered is incorrect.`,
            });
          },
        });
      } catch (error) {
        setStatus('IDLE');
        console.log(error);
      }
    }
  });

  const isLoading = status === 'LOADING';

  const canRequestNewCode =
    state.type === 'sms' && state.identity && state.identity !== '';

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        {COPY.DESCRIPTION[state.type]}
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit} px="xl">
        <Box mb="l">
          <TextInput
            id="passcode"
            label={COPY.LABEL[state.type]}
            onChange={handleChange}
            required
          />
          {error?.passcode ? (
            <Box as="p" color="error" fontSize="s" mt="s">
              {error.passcode}
            </Box>
          ) : null}
        </Box>
        <Box textAlign="center">
          <Button type="submit" status={status} mb="base">
            Submit{isLoading ? 'ting...' : ''}
          </Button>
          {canRequestNewCode ? (
            <Box as="a" href="#0" display="block">
              Did't get a code? Request a new one.
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
}

export default AuthConfirm;
