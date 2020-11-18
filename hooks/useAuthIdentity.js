import { useState } from 'react';

import { validateEmail, validatePhoneNumber } from '../utils';
import { useAuth, update as updateAuth } from '../providers/AuthProvider';
import { useRequestPin } from './';

function useAuthIdentity() {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();
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
                step,
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
      setStatus('SUCCESS');
      dispatch(
        updateAuth({
          identity,
          type: 'password',
          step,
          userExists,
        })
      );
    }
  }

  return { status, setStatus, error, setError, handleAuthIdentity };
}

export default useAuthIdentity;
