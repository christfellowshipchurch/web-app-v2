import React, { useState } from 'react';

import {
  useAuthenticateCredentials,
  useForm,
  useVerifyPin,
  useRegisterWithEmail,
  useRegisterWithSms,
} from 'hooks';
import { useAuth, update as updateAuth } from 'providers/AuthProvider';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, TextInput } from 'ui-kit';
import ResendCode from './ResendCode';
import { startCase, camelCase } from 'lodash';

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
  const [registerWithSms] = useRegisterWithSms();
  const [registerWithEmail] = useRegisterWithEmail();
  const onError = () => {
    setStatus('ERROR');
    setError({
      passcode: `The ${COPY.LABEL[state.type]} you entered is incorrect.`,
    });
  };
  const onSuccess = token => {
    setStatus('SUCCESS');
    dispatch(updateAuth({ token }));
    modalDispatch(showStep(3));
    state?.onSuccess();
  };
  const { handleChange, handleSubmit } = useForm(async values => {
    const passcode = values.passcode;
    const profileFields = Object.keys(state?.profile || {}).map(key => ({
      field: startCase(camelCase(key)).replace(/ /g, ''),
      value: state?.profile[key],
    }));
    setStatus('LOADING');
    if (state.type === 'sms') {
      try {
        if (state.userExists) {
          await verifyPin({
            variables: { phone: state.identity, code: passcode },
            update: (
              cache,
              { data: { authenticateWithSms: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        } else {
          await registerWithSms({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: profileFields,
            },
            update: (
              cache,
              { data: { registerWithSms: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        }
      } catch (error) {
        onError();
        console.log(error);
      }
    }
    if (state.type === 'password') {
      try {
        if (state.userExists) {
          await authenticateCredentials({
            variables: { email: state.identity, password: passcode },
            update: (
              cache,
              { data: { authenticate: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        } else {
          await registerWithEmail({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: profileFields,
            },
            update: (
              cache,
              { data: { registerPerson: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        }
      } catch (error) {
        onError();
        console.log(error);
      }
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        {COPY.DESCRIPTION[state.type]}
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit} px="xl">
        <Box mb="l">
          <TextInput
            id="passcode"
            type={state.type === 'password' ? 'password' : 'text'}
            label={COPY.LABEL[state.type]}
            onChange={handleChange}
            required
            autoFocus
          />
          {error?.passcode ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {error.passcode}
            </Box>
          ) : null}
        </Box>
        <Box textAlign="center">
          <Button type="submit" status={status} mb="base">
            Submit{isLoading ? 'ting...' : ''}
          </Button>
          <ResendCode />
        </Box>
      </Box>
    </>
  );
}

export default AuthConfirm;
