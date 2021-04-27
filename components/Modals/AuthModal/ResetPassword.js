import React, { useState } from 'react';

import { useAuth } from 'providers/AuthProvider';
import { useRequestEmailPin } from 'hooks/';
import { Box } from 'ui-kit';

function ResetPassword() {
  const [resetState, setResetState] = useState('IDLE');
  const [state] = useAuth();
  const [requestEmailPin] = useRequestEmailPin();

  if (state.type !== 'password') return null;
  if (!state.identity || state.identity === '') return null;

  function handleClick(event) {
    event.preventDefault();

    setResetState('REQUESTED');
    requestEmailPin({
      variables: {
        email: state.identity,
      },
    });
  }

  if (resetState === 'REQUESTED') {
    return (
      <Box>
        <Box as="b" display="block">
          Help is on the way!
        </Box>
        An email was sent to {state.identity} with instructions for resetting
        your password.
      </Box>
    );
  }

  return (
    <Box as="a" href="#0" onClick={handleClick} display="block">
      Forgot your password? We can help!
    </Box>
  );
}

export default ResetPassword;
