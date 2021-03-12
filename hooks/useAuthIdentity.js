import { useState } from 'react';

import { validateEmail } from 'utils';
import { useAuth, update as updateAuth } from 'providers/AuthProvider';

function useAuthIdentity() {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();

  function handleAuthIdentity({
    identity: _identity,
    userExists = false,
    nextStep,
  }) {
    const identity = _identity || state.identity;
    const isValidEmail = validateEmail(identity);
    const step = nextStep;

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
