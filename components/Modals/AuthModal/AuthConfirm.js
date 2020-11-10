import React from 'react';

import { useForm, useVerifyPin } from '../../../hooks';
import { useAuth, update as updateAuth } from '../../../providers/AuthProvider';
import { hideModal, useModalDispatch } from '../../../providers/ModalProvider';
import { Box, Button, TextInput } from '../../../ui-kit';

function AuthConfirm() {
  const [state, dispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const [verifyPin] = useVerifyPin();
  const { values, handleChange, handleSubmit } = useForm(async () => {
    const passcode = values.passcode;
    if (state.type === 'sms') {
      try {
        await verifyPin({
          variables: { phone: state.identity, code: passcode },
          update: (
            cache,
            { data: { authenticateWithSms: { token } = {} } = {} }
          ) => {
            dispatch(updateAuth({ token }));
            modalDispatch(hideModal());
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        Enter in the Confirmation Code that was texted to your mobile phone
        number.
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit} px="xl">
        <Box mb="l">
          <TextInput
            id="passcode"
            label="Confirmation Code"
            onChange={handleChange}
            required
          />
        </Box>
        <Box textAlign="center">
          <Button type="submit" mb="base">
            Submit
          </Button>
          <Box as="a" href="#0" display="block">
            Did't get a code? Request a new one.
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AuthConfirm;
