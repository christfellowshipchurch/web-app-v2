/**
 * ConnectCardForm.js
 *
 * Author: Daniel Wood
 * Created: June 8, 2022
 *
 * Form to sign up for our Digital Connect card for the church.
 */

import React, { useEffect, useState } from 'react';
import { useCampuses, useForm, useSubmitConnectCard } from 'hooks';
import { includes, isEmpty, toString } from 'lodash';
import { validateEmail, validatePhoneNumber } from 'utils';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import StyledForm from './StyledForm';

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
        setSuccess(false);
        const currentErrors = {};
        currentErrors.networkError = toString(e);
        setErrors(currentErrors);
      },
    });
  const [isLoading, setIsLoading] = useState(false);

  const { values, handleSubmit, handleChange, setValues } = useForm(() => {
    const currentErrors = {};
    let { email, phoneNumber, campusId, firstName, lastName } = values;
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
    // prettier-ignore
    const allThatApplies = `${values?.findCommunity ? 'f848c630-4a0d-4264-8c20-e6b77825f001,' : ''}${values?.growFaith ? '581dcac5-acad-498c-89dc-09245b3ad4df,' : ''}${values?.placeForKids ? '29e3b03c-4e3b-442b-8acf-2835ab13b262,' : ''}${values?.strongerMarriage ? '3b2af312-e888-4956-bc05-8a7e318fc68e,' : ''}${values?.improveFinances ? 'c0024735-e0e9-45d1-a3d3-6f42cb58b239,' : ''}${values?.useMyGifts ? '00546698-374e-4746-a99e-6d4381b5262d,' : ''}${values?.discoverAtTheJourney ? 'e989c798-cf52-44d8-8ddd-c8831e7601a1,' : ''}`;

    const input = {
      firstName: values.firstName || '',
      lastName: values.lastName || '',
      phoneNumber: values.phoneNumber || '',
      emailAddress: values.email || '',
      campus: values.campusId || '',
      decision: decision || ' ',
      allThatApplies: allThatApplies || ' ',
      other: values?.otherText || ' ',
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

  // Sets pre-selected values if user is already logged in.
  useEffect(() => {
    setValues({
      firstName: props?.firstName,
      lastName: props?.lastName,
      email: props?.email,
      phoneNumber: props?.phoneNumber,
      campusId: props?.campus?.name,
    });
  }, []);

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
    <StyledForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      values={values}
      errors={errors}
      defaultUserCampus={props?.campus}
      campuses={campuses}
    />
  );
}

ConnectCardForm.propTypes = {};

ConnectCardForm.defaultProps = {};

export default ConnectCardForm;
