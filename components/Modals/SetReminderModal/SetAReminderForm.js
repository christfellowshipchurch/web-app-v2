/**
 * SetAReminderForm.js
 *
 * Author: Daniel Wood
 * Created: July 5, 2022
 *
 * Form for users to tell us when they plan on attending.
 */

import React, { useEffect, useState } from 'react';
import { useCampus, useCampuses, useForm, useSubmitSetReminder } from 'hooks';
import { includes, isEmpty, toString } from 'lodash';
import { validateEmail, validatePhoneNumber } from 'utils';
import { showStep, useModalDispatch } from 'providers/ModalProvider';
import StyledForm from './StyledForm';

function SetAReminderForm(props = {}) {
  const modalDispatch = useModalDispatch();
  const [success, setSuccess] = useState(null);
  //This sets the current campus being selected and its default
  const [currentCampus, setCurrentCampus] = useState(props?.defaultCampus);
  //This grabs the campus object with service times using the currentCampus for the campusName
  const { loading: serviceTimesLoading, campus: selectedCampus } = useCampus({
    variables: {
      campusName: currentCampus,
    },
  });
  const { campuses, loading: campusesLoading } = useCampuses();
  const [errors, setErrors] = useState({});

  const { handleCallBack } = props;

  /**
   * todo : update with new Rock Workflow
   */
  const [submitReminder, { loading: mutationLoading }] = useSubmitSetReminder({
    onCompleted: () => {
      setSuccess(true);
    },
    onError: e => {
      setSuccess(false);
      const currentErrors = {};
      currentErrors.networkError = toString(e);
      setErrors(currentErrors);
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  //Grabs service times of the campus that is selected
  const { serviceTimes } = selectedCampus;

  // useForm handles all of our erros and value changes
  const { values, handleSubmit, handleChange, setValues } = useForm(() => {
    const currentErrors = {};
    let { email, phoneNumber, serviceTime, campus, firstName, lastName } =
      values;

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
      if (!validateEmail(email)) {
        currentErrors.email = 'Please enter a valid email address';
      }
    }

    if (phoneNumber && !isEmpty(phoneNumber)) {
      if (!validatePhoneNumber(phoneNumber)) {
        currentErrors.phoneNumber = 'Please enter a valid phone number';
      }
    }

    if (isEmpty(serviceTime) || serviceTime === 'Select a Service Time') {
      currentErrors.serviceTime = 'Please select a service time';
    }

    if (isEmpty(campus) || campus === 'Select a Campus') {
      currentErrors.campus = 'Please select a campus';
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    handleSubmitSetAReminder();
  });

  const handleSubmitSetAReminder = async () => {
    const input = {
      firstName: values.firstName || '',
      lastName: values.lastName || '',
      phoneNumber: values.phoneNumber || '',
      email: values.email || '',
      campus: values.campus || '',
      serviceTime: values.serviceTime || '',
    };

    try {
      submitReminder({ variables: input });
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
      campus: props?.defaultCampus,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentCampus(values?.campus);
  }, [values?.campus]);

  useEffect(() => {
    setIsLoading(mutationLoading || serviceTimesLoading || campusesLoading);
  }, [mutationLoading, serviceTimesLoading, campusesLoading]);

  useEffect(() => {
    if (success) {
      setErrors({});
      // pass serviceTimes to ConfirmationModal
      handleCallBack(values?.serviceTime);
      modalDispatch(showStep(1));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <StyledForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      values={values}
      errors={errors}
      campuses={campuses || []}
      defaultUserCampus={props?.defaultCampus}
      serviceTimes={serviceTimes || []}
    />
  );
}

SetAReminderForm.propTypes = {};

SetAReminderForm.defaultProps = {};

export default SetAReminderForm;
