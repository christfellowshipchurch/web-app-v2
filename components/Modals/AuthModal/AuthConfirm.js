import React, { useState } from 'react';

import {
  useAuthenticateCredentials,
  useForm,
  useVerifyPin,
  useRegisterWithEmail,
  useRegisterWithSms,
} from 'hooks';
import { useAuth, update as updateAuth } from 'providers/AuthProvider';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, TextInput } from 'ui-kit';
import ResendCode from './ResendCode';
import ResetPassword from './ResetPassword';

const COPY = {
  DESCRIPTION: {
    smsNew:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    smsExisting:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    passwordExisting: 'Enter in your existing password below.',
    passwordNew: 'Create your password below.',
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

  const [registerUserWithSms] = useRegisterWithSms();
  const [registerUserWithEmail] = useRegisterWithEmail();
  const [verifyPin] = useVerifyPin();
  const [authenticateCredentials] = useAuthenticateCredentials();

  const onError = () => {
    setStatus('ERROR');
    setError({
      passcode: `The ${COPY.LABEL[state.type]} you entered is incorrect.`,
    });
  };
  const onSuccess = token => {
    setStatus('SUCCESS');
    dispatch(updateAuth({ token }));
    modalDispatch(hideModal());
    state?.onSuccess();
  };
  const { values, handleChange, handleSubmit } = useForm(async () => {
    const passcode = values.passcode;
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
          await registerUserWithSms({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: state.userProfile,
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
          await registerUserWithEmail({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: state.userProfile,
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
  const descriptionKey = `${state.type}${
    state.userExists ? 'Existing' : 'New'
  }`;

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        {COPY.DESCRIPTION[descriptionKey]}
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
          <ResetPassword />
        </Box>
      </Box>
    </>
  );
}

export default AuthConfirm;
