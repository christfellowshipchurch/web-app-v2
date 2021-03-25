import React, { useEffect, useState } from 'react';

import { useRequestPin } from 'hooks';
import { useAuthState } from 'providers/AuthProvider';
import { Box } from 'ui-kit';

function ResendCode() {
  const initialText = `Didn't get a code? Request a new one.`;
  const [status, setStatus] = useState('IDLE');
  const [text, setText] = useState(initialText);
  const state = useAuthState();
  const [requestPin] = useRequestPin();

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('IDLE');
        setText(initialText);
      }, 5000);
    }
  }, [status, initialText]);

  if (state.type !== 'sms') return null;
  if (!state.identity || state.identity === '') return null;

  function handleClick(event) {
    event.preventDefault();
    setStatus('LOADING');
    const identity = state.identity;
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
          setText('Sent. Try again!');
        }
      },
    });
  }

  const isLoading = status === 'LOADING';

  return (
    <Box as="a" href="#0" onClick={handleClick} display="block">
      {isLoading ? 'Resending the code now...' : text}
    </Box>
  );
}

export default ResendCode;
