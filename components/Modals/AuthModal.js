import React from 'react';

import {
  useForm,
  useRequestPin,
  useUserExists,
  useVerifyPin,
} from '../../hooks';
import {
  useAuth,
  useAuthDispatch,
  useAuthState,
  update as updateAuth,
} from '../../providers/AuthProvider';
import { hideModal, useModalDispatch } from '../../providers/ModalProvider';
import { Box, Button, Checkbox, Modal, TextInput } from '../../ui-kit';

function AuthModal(props = {}) {
  const state = useAuthState();

  function render() {
    switch (state.step) {
      case 0: {
        return <Identity />;
      }
      case 1: {
        return <Details />;
      }
      case 2: {
        return <Confirm />;
      }
      case 3: {
        return <Success />;
      }
      default: {
        return <Identity />;
      }
    }
  }

  return (
    <Modal title="Sign in" {...props}>
      {render()}
    </Modal>
  );
}

function Identity(props = {}) {
  const dispatch = useAuthDispatch();
  const [requestPin] = useRequestPin();
  const [checkIfUserExists] = useUserExists({
    fetchPolicy: 'network-only',
    onCompleted: async data => {
      const userExists = data?.userExists !== 'NONE';
      if (userExists) {
        // If they used a phone number, we need to send a PIN.
        const phone = values.identity;
        const isValidPhoneNumber = phone.match(/[0-9]{10}/);
        if (isValidPhoneNumber) {
          requestPin({
            variables: {
              phone,
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
                dispatch(
                  updateAuth({
                    identity: phone,
                    type: 'sms',
                    step: 2,
                    userExists,
                  })
                );
              }
            },
          });
        }
      } else {
        dispatch(updateAuth({ step: 1 }));
      }
    },
  });
  const { values, handleSubmit, handleChange } = useForm(() => {
    checkIfUserExists({ variables: { identity: values.identity } });
  });

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        Enter your phone number or email address to get started. We'll never
        share your information or contact you (unless you ask!).
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit} px="xl">
        <Box mb="base">
          <TextInput
            id="identity"
            label="Mobile Number or Email"
            required
            onChange={handleChange}
          />
        </Box>
        <Box mb="l">
          <Checkbox
            id="agreement"
            label="I agree to the Terms of Use and Privacy Policy laid out by Christ Fellowship Church."
            required
            onChange={handleChange}
            mr="s"
          />
        </Box>
        <Box textAlign="center">
          <Button type="submit">Agree and continue</Button>
        </Box>
      </Box>
    </>
  );
}

function Confirm(props = {}) {
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

function Details(props = {}) {
  return <Box as="p">Details</Box>;
}

function Success(props = {}) {
  return <Box as="p">Success</Box>;
}

AuthModal.propTypes = {
  ...Modal.propTypes,
};

export default AuthModal;
