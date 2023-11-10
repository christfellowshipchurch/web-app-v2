/**
 * AddGroupMemberModal.js
 *
 * Author: Caleb Panza
 * Created: Sep 10, 2021
 *
 * Add a new person to a Group.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useAddGroupMember, useCampuses, useForm } from 'hooks';
import { validatePhoneNumber, validateEmail } from 'utils';
import isEmpty from 'lodash/isEmpty';
import { GenderField } from 'components';
import { Box, Button, Modal, Select, TextInput } from 'ui-kit';

const AddGroupMemberModal = ({ groupId }) => {
  const router = useRouter();
  const [success, setSuccess] = useState(null);
  const { campuses, loading: campusesLoading } = useCampuses();
  const [addGroupMember, { loading: mutationLoading }] = useAddGroupMember({
    onCompleted: () => {
      setSuccess(true);
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { values, handleSubmit, handleChange } = useForm(() => {
    const currentErrors = {};
    const { email, phoneNumber } = values;
    let hasEmailOrPhoneNumber = false;

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

    if (!hasEmailOrPhoneNumber) {
      currentErrors.phoneOrEmail =
        'Please include either a Phone Number or Email for the group member.';
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    handleAddGroupMember();
  });

  const handleAddGroupMember = async () => {
    try {
      await addGroupMember({
        variables: {
          groupId,
          person: {
            firstName: values.firstName || '',
            lastName: values.lastName || '',
            gender: values.gender || 'Gender',
            phoneNumber: values.phoneNumber || null,
            email: values.email || null,
            campusId: values.campusId || null,
          },
        },
      });
    } catch (e) {
      if (e?.networkError?.statusCode) {
        setErrors({
          ...errors,
          network:
            'We were unable to add this person to your Group at this time. Please try again later.',
        });
      } else {
        setErrors({
          ...errors,
          network: e.message,
        });
      }
    }
  };

  const status = isLoading ? 'LOADING' : 'IDLE';

  useEffect(() => {
    setIsLoading(mutationLoading || campusesLoading);
  }, [mutationLoading, campusesLoading]);

  useEffect(() => {
    if (success) {
      setErrors({});

      if (window?.location?.pathname) {
        setTimeout(() => {
          router.reload(window?.location?.pathname);
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Modal>
      <Box as="h3" color="neutrals.600" mb="l">
        Add New Group Member
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit}>
        <Box
          display="grid"
          gridTemplateColumns={{ _: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gridColumnGap="base"
          gridRowGap="base"
          my="base"
        >
          <Box>
            <TextInput
              id="firstName"
              label="First Name"
              placeholder="First Name"
              onChange={handleChange}
              required
              autoFocus
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
              required
            />
            {errors?.lastName ? (
              <Box as="p" color="alert" fontSize="s" mt="s">
                {errors.lastName}
              </Box>
            ) : null}
          </Box>
          <Box mt={{ _: 'base', lg: '0' }}>
            <GenderField
              initialValue={values.gender || ''}
              onChange={handleChange}
            />
          </Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(1, 1fr)"
          gridColumnGap="base"
          gridRowGap="s"
          my="base"
        >
          <Box>
            <TextInput
              id="phoneNumber"
              label="Phone Number"
              placeholder="(555) 555-5555"
              onChange={handleChange}
              type="tel"
            />
            {errors?.phoneNumber ? (
              <Box as="p" color="alert" fontSize="s">
                {errors.phoneNumber}
              </Box>
            ) : null}
          </Box>
          <Box>
            <TextInput
              id="email"
              label="Email"
              placeholder="email@website.com"
              onChange={handleChange}
              type="tel"
            />
            {errors?.email ? (
              <Box as="p" color="alert" fontSize="s">
                {errors.email}
              </Box>
            ) : null}
          </Box>
          {errors?.phoneOrEmail ? (
            <Box as="p" color="alert" fontSize="s">
              {errors.phoneOrEmail}
            </Box>
          ) : null}
        </Box>

        <Box my="base">
          <Box as="label" for="campusId" fontWeight="bold" mb="s" fontSize="s">
            Primary Campus
          </Box>
          {/* <Select
            id="campusId"
            name="campusId"
            onChange={handleChange}
            isRequired
          >
            <Select.Option value={null}>Select a Campus</Select.Option>
            {campuses.map(({ id, name }) => {
              return (
                <Select.Option key={id} value={id}>
                  {name}
                </Select.Option>
              );
            })}
          </Select> */}
          {errors?.campusId ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {errors.campus}
            </Box>
          ) : null}
        </Box>

        <Box
          display="flex"
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          mt="l"
        >
          <Box
            as="p"
            color={success ? 'success' : 'alert'}
            fontSize="s"
            flex="2"
            pr={{ md: 's' }}
            py={{ _: 's', md: '0' }}
          >
            {success ? 'Successfully added person to group! ' : errors?.network}
          </Box>
          <Button
            type="submit"
            status={status}
            disabled={isLoading || success}
            flex="1"
          >
            {isLoading ? 'Loading...' : 'Add Member'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

AddGroupMemberModal.propTypes = {
  groupId: PropTypes.string.isRequired,
};
AddGroupMemberModal.defaultProps = {};

export default AddGroupMemberModal;
