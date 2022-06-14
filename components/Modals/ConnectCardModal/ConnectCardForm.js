/**
 * ConnectCardForm.js
 *
 * Author: Daniel Wood
 * Created: June 8, 2022
 *
 * Form to sign up for our Digital Connect card for the church.
 */

import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Icon, Modal, Select, TextInput } from 'ui-kit';
import { useCampuses, useForm, useSubmitConnectCard } from 'hooks';
import { includes, isEmpty, toString } from 'lodash';
import { validateEmail, validatePhoneNumber } from 'utils';
import { showStep, useModalDispatch } from 'providers/ModalProvider';

function ConnectCardForm(props = {}) {
  const modalDispatch = useModalDispatch();
  const [success, setSuccess] = useState(null);
  const { campuses, loading: campusesLoading } = useCampuses();
  const [errors, setErrors] = useState({});
  const [submitConnectCard, { loading: mutationLoading }] =
    useSubmitConnectCard({
      onCompleted: () => {
        setSuccess(true);
      },
      onError: e => {
        /**
         * note : 🚨 Warning 🚨 Right now the Rock workflow is returning an invalid reponse error even though the workflow is working. If it returns that error this statment makes sure it still returns a success state. We'll need to revisit this issue on our API later on.
         */
        if (includes(toString(e), 'invalid json response body')) {
          setSuccess(true);
        }
        const currentErrors = {};
        currentErrors.networkError = toString(e);
        setErrors(currentErrors);
      },
    });
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleSubmit, handleChange } = useForm(() => {
    const currentErrors = {};
    const { email, phoneNumber, campusId, firstName, lastName } = values;
    let hasEmailOrPhoneNumber = false;

    if (
      isEmpty(email) ||
      isEmpty(phoneNumber) ||
      isEmpty(firstName) ||
      isEmpty(lastName)
    ) {
      currentErrors.generalError =
        'Please fill out all of the required fields.';
    }

    if (email && !isEmpty(email)) {
      hasEmailOrPhoneNumber = true;

      if (!validateEmail(email)) {
        currentErrors.email = 'Please enter a valid email address';
      }
    }

    if (phoneNumber && !isEmpty(phoneNumber)) {
      hasEmailOrPhoneNumber = true;

      if (!validatePhoneNumber(phoneNumber)) {
        currentErrors.phoneNumber = 'Please enter a valid phone number';
      }
    }

    if (isEmpty(campusId) || campusId === 'Select a Campus') {
      currentErrors.campus = 'Please select a campus';
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    handleSubmitConnectCard();
  });

  const handleSubmitConnectCard = async () => {
    /**
     * note : Because the Rock Workflow only takes in strings, we need to convert our checkbox values into readable strings for the mutation to work properly.
     */
    const decision = values?.madeDecision
      ? 'I made a decision to follow Christ today.'
      : '';
    const allThatApplies = `${
      values?.firstVisit ? 'f848c630-4a0d-4264-8c20-e6b77825f001,' : ''
    }${values?.cfChurchHome ? '581dcac5-acad-498c-89dc-09245b3ad4df,' : ''}${
      values?.discoverWhatsHere ? '29e3b03c-4e3b-442b-8acf-2835ab13b262' : ''
    }`;

    const input = {
      firstName: values.firstName || '',
      lastName: values.lastName || '',
      phoneNumber: values.phoneNumber || '',
      emailAddress: values.email || '',
      campus: values.campusId || '',
      decision,
      allThatApplies,
    };

    try {
      submitConnectCard({
        variables: {
          ...input,
        },
      });
    } catch (e) {
      if (includes(e, 'invalid json response body')) {
        return setSuccess(true);
      }
      if (e?.networkError?.statusCode) {
        setErrors({
          ...errors,
          network: 'Error submitting form.',
        });
      } else {
        console.log(e);
        setErrors({
          ...errors,
          network: e.message,
        });
      }
    }
  };

  useEffect(() => {
    setIsLoading(mutationLoading || campusesLoading);
  }, [mutationLoading, campusesLoading]);

  useEffect(() => {
    if (success) {
      setErrors({});
      modalDispatch(showStep(1));
    }
  }, [success]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={{ _: '', md: 'l' }}
      p={{ _: 'base', md: '' }}
    >
      <Box as="h1" mb="xl" color="secondary">
        Get Connected
      </Box>
      {errors?.generalError ? (
        <Box as="p" color="alert" fontSize="s" mt="-1.8rem" mb="s">
          {errors.generalError}
        </Box>
      ) : null}
      {/* General Information */}
      <Box
        display="grid"
        gridTemplateColumns={{ _: '', md: '1fr 1fr' }}
        gridColumnGap="base"
        gridRowGap={{ _: 'base', md: 'l' }}
      >
        <Box>
          <TextInput
            id="firstName"
            label="First Name"
            placeholder="First Name"
            onChange={handleChange}
          />
          {errors?.firstName ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {errors.firstName}
            </Box>
          ) : null}
        </Box>
        <Box>
          <TextInput
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
            onChange={handleChange}
          />
          {errors?.lastName ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {errors.lastName}
            </Box>
          ) : null}
        </Box>
        <Box>
          <TextInput
            id="email"
            label="Email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors?.email ? (
            <Box as="p" color="alert" fontSize="s">
              {errors.email}
            </Box>
          ) : null}
        </Box>
        <Box>
          <TextInput
            id="phoneNumber"
            label="Phone"
            placeholder="Phone"
            onChange={handleChange}
          />
          {errors?.phoneNumber ? (
            <Box as="p" color="alert" fontSize="s">
              {errors.phoneNumber}
            </Box>
          ) : null}
        </Box>
        <Box>
          <Box fontWeight="bold" fontSize="s" mb="s">
            Campus
          </Box>
          <Select id="campusId" name="campusId" onChange={handleChange}>
            <Select.Option value={null}>Select a Campus</Select.Option>
            {campuses.map(({ id, name }) => {
              return (
                <Select.Option key={id} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
          {errors?.campus ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {errors.campus}
            </Box>
          ) : null}
        </Box>
        <Box display="flex" pt={25}>
          <Checkbox
            id="madeDecision"
            size={18}
            onChange={handleChange}
            mr="s"
          />
          <Box as="p" mt="0.1rem" fontWeight="bold" color="secondary">
            I made a decision to follow Christ today{' '}
          </Box>
        </Box>
      </Box>
      {/* All that Applies */}
      <Box display="grid" gridRowGap="s" textAlign="left" my="l" mr="auto">
        <Box as="p" fontStyle="italic">
          Please select all that apply to you:
        </Box>
        <Box display="flex">
          <Checkbox id="firstVisit" size={18} onChange={handleChange} mr="s" />
          <Box as="p" mt="0.1rem">
            This is my first visit to Christ Fellowship{' '}
          </Box>
        </Box>
        <Box display="flex">
          <Checkbox
            id="cfChurchHome"
            size={18}
            onChange={handleChange}
            mr="s"
          />
          <Box as="p" mt="0.1rem">
            I call Christ Fellowship my church home{' '}
          </Box>
        </Box>
        <Box display="flex">
          <Checkbox
            id="discoverWhatsHere"
            size={18}
            onChange={handleChange}
            mr="s"
          />
          <Box as="p" mt="0.1rem">
            I'd like to discover what is here for me{' '}
          </Box>
        </Box>
      </Box>
      {errors?.networkError && (
        <Box display="flex" alignItems="center" color="alert" mb="s">
          <Icon name="gear" />
          Oops! Network error, please try again later.
        </Box>
      )}
      <Button onClick={handleSubmit} borderRadius={50} size="s" px="l">
        {isLoading ? 'Loading...' : 'SUBMIT'}
      </Button>
    </Box>
  );
}

ConnectCardForm.propTypes = {};

ConnectCardForm.defaultProps = {
  uri: null,
  poster: null,
};

export default ConnectCardForm;
