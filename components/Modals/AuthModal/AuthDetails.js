import React, { useState } from 'react';

import { useForm, useRequestPin } from '../../../hooks';
import { useAuth } from '../../../providers/AuthProvider';
import { Box, Button, FormLabel, Radio, TextInput } from '../../../ui-kit';

function AuthDetails() {
  const [state, dispatch] = useAuth();
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [requestPin] = useRequestPin();
  const { values, handleSubmit, handleChange } = useForm(() => {
    // TODO: Make sure they are at least 13 years of age.
    if (!error) {
      setStatus('LOADING');
      // TODO: requestPin()
      // TODO: Register the user via their identity
      // TODO: Send them to the confirm screen
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
              required
              onChange={handleChange}
            />
            {error?.firstName ? (
              <Box as="p" color="error" fontSize="s" mt="s">
                {error.firstName}
              </Box>
            ) : null}
          </Box>
          <Box>
            <TextInput
              id="lastName"
              label="Last Name"
              required
              onChange={handleChange}
            />
            {error?.lastName ? (
              <Box as="p" color="error" fontSize="s" mt="s">
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
            <TextInput
              id="birthDate"
              label="Birth Date"
              type="date"
              required
              onChange={handleChange}
            />
            {error?.birthDate ? (
              <Box as="p" color="error" fontSize="s" mt="s">
                {error.birthDate}
              </Box>
            ) : null}
          </Box>
          <Box>
            <FormLabel>Gender</FormLabel>
            <Box display="flex" mt="base">
              <Box mr="s">
                <Radio
                  label="Male"
                  id="male"
                  value="male"
                  name="gender"
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <Radio
                  label="Female"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
              </Box>
            </Box>
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
