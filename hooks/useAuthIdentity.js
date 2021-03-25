import { useState } from 'react';

import { validateEmail, validatePhoneNumber } from 'utils';
import { useAuth, update as updateAuth } from 'providers/AuthProvider';
import { useRequestPin } from './';
import { showStep, useModalDispatch } from 'providers/ModalProvider';

function useAuthIdentity() {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const [requestPin] = useRequestPin();

  function handleAuthIdentity({
    identity: _identity,
    userExists = false,
    nextStep,
  }) {
    const identity = _identity || state.identity;
    const isValidPhoneNumber = validatePhoneNumber(identity);
    const isValidEmail = validateEmail(identity);
    const step = nextStep;

    const onSuccess = type => {
      setStatus('SUCCESS');
      dispatch(
        updateAuth({
          identity,
          type,
          userExists,
        })
      );
      modalDispatch(showStep(step));
    };

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
          if (success) onSuccess('sms');
        },
      });
    }

    // If they have a valid email, we need to set the type and
    // move them to the confirmation step.
    if (isValidEmail) onSuccess('password');
  }

  return { status, setStatus, error, setError, handleAuthIdentity };
}

export default useAuthIdentity;