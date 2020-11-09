import { useLazyQuery, gql } from '@apollo/client';
import React, { useState } from 'react';

import { useForm } from '../../hooks';
import { Box, Button, Checkbox, Modal, TextInput } from '../../ui-kit';

function AuthModal(props = {}) {
  const [step, setStep] = useState(0);

  function render() {
    const _props = { step, setStep };

    switch (step) {
      case 0: {
        return <Identity {..._props} />;
      }
      case 1: {
        return <Details {..._props} />;
      }
      case 2: {
        return <Confirm {..._props} />;
      }
      case 3: {
        return <Success {..._props} />;
      }
      default: {
        return <Identity {..._props} />;
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
  const [checkIfUserExists] = useLazyQuery(
    gql`
      query userExists($identity: String!) {
        userExists(identity: $identity)
      }
    `,
    {
      fetchPolicy: 'network-only',
      onCompleted: async data => {
        const userExists = data?.userExists !== 'NONE';
        if (userExists) props.setStep(2);
        else props.setStep(1);
      },
    }
  );
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
  return <Box as="p">Confirm</Box>;
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
