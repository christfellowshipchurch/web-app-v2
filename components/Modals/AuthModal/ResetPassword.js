import React from 'react';

import { useAuthState } from 'providers/AuthProvider';
import { Box } from 'ui-kit';

function ResetPassword() {
  const state = useAuthState();

  if (state.type !== 'password') return null;
  if (!state.identity || state.identity === '') return null;

  function handleClick(event) {
    event.preventDefault();
    console.log('RESET PASSWORD');
  }

  return (
    <Box as="a" href="#0" onClick={handleClick} display="block">
      Forgot your password? We can help!
    </Box>
  );
}

export default ResetPassword;
