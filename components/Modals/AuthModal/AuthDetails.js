import React from 'react';
import upperFirst from 'lodash/upperFirst';

import { getAge } from 'utils';
import { useAuthIdentity, useForm } from 'hooks';

import { BirthDateField, GenderField } from 'components';
import { Box, Button, TextInput } from 'ui-kit';

function AuthDetails() {
  const {
    error,
    setError,
    status,
    setStatus,
    handleAuthIdentity,
  } = useAuthIdentity();
  const { values, handleSubmit, handleChange } = useForm(() => {
    const age = getAge(values.birthDate);
    // Make sure they are at least 13 years of age.
    if (age < 13) {
      setError({
        birthdate: 'You must be at least 13.',
      });
    }
    if (!error) {
      setStatus('LOADING');

      const userProfile = Object.keys(values).map(key => ({
        field: upperFirst(key),
        value: values[key],
      }));

      handleAuthIdentity({ nextStep: 2, userProfile });
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <Box as="p" color="subdued" mb="l">
        Help us learn a little more about you so we can connect you with the
        best ministries and events.
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit} px="l">
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridColumnGap="base"
          mb="base"
        >
          <Box>
            <TextInput
              id="firstName"
              label="First Name"
              onChange={handleChange}
              required
              autoFocus
            />
            {error?.firstName ? (
              <Box as="p" color="alert" fontSize="s" mt="s">
                {error.firstName}
              </Box>
            ) : null}
          </Box>
          <Box>
            <TextInput
              id="lastName"
              label="Last Name"
              onChange={handleChange}
              required
            />
            {error?.lastName ? (
              <Box as="p" color="alert" fontSize="s" mt="s">
                {error.lastName}
              </Box>
            ) : null}
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridColumnGap="base"
          mb="l"
        >
          <Box>
            <BirthDateField onChange={handleChange} error={error?.birthDate} />
          </Box>
          <Box>
            <GenderField
              initialValue={values.gender || ''}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box textAlign="center">
          <Button type="submit" status={status} mb="base">
            Finish{isLoading ? 'ing...' : ''}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AuthDetails;
