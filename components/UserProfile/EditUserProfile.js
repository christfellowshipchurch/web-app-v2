import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import isNil from 'lodash/isNil';
import startCase from 'lodash/startCase';

import { normalizeUserData } from 'utils';
import { CampusesProvider } from 'providers';
import { useUserProfile, update } from 'providers/UserProfileProvider';
import { useForm, useUpdateCurrentUser } from 'hooks';
import { GET_CURRENT_PERSON } from 'hooks/useCurrentPerson';
import { Box, Cell, Checkbox, Loader, TextInput } from 'ui-kit';
import { BirthDateField, GenderField } from '..';
import UserProfileAddress from './UserProfileAddress';
import UserProfileCampusSelect from './UserProfileCampusSelect';

function EditUserProfile(props = {}) {
  const [{ user }, dispatch] = useUserProfile();
  const [updateCurrentPerson, { loading }] = useUpdateCurrentUser({
    // TODO: This cache-update is only partially working right now.
    update: async (
      cache,
      { data: { updateProfileFields, updateAddress, updateUserCampus } }
    ) => {
      const { currentUser } = cache.readQuery({ query: GET_CURRENT_PERSON });
      const newCacheData = {
        currentUser: {
          ...currentUser,
          profile: {
            ...currentUser.profile,
            ...updateProfileFields,
            address: updateAddress,
            campus: updateUserCampus.campus,
          },
        },
      };
      await cache.writeQuery({
        query: GET_CURRENT_PERSON,
        data: newCacheData,
      });
      dispatch(update({ user: normalizeUserData(newCacheData.currentUser) }));
    },
    onCompleted: () => dispatch(update({ status: 'SUCCESS' })),
  });
  const {
    campusId,
    birthdate,
    gender,
    email,
    phone,
    street,
    city,
    state,
    zip,
    allowEmail,
    allowSMS,
  } = user;

  function getCommunicationPreference(key, variable) {
    const _isNil = isNil(values[key]) && isNil(variable);
    if (_isNil) return false;
    if (!isNil(values[key])) return values[key];
    if (!isNil(variable)) return variable;
    return false;
  }

  function onSubmit() {
    try {
      updateCurrentPerson({
        variables: {
          profileFields: [
            {
              field: 'Gender',
              value: startCase(values.gender) || startCase(gender) || 'Unknown',
            },
            { field: 'BirthDate', value: values.birthdate || birthdate || '' },
          ],
          address: {
            street1: values.street || street || '',
            street2: '',
            city: values.city || city || '',
            state: values.state || state || '',
            postalCode: values.zip || zip || '',
          },
          campusId: values.campus || campusId || '',
          communicationPreferences: [
            {
              type: 'SMS',
              allow: getCommunicationPreference('allowSMS', allowSMS),
            },
            {
              type: 'Email',
              allow: getCommunicationPreference('allowEmail', allowEmail),
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
      dispatch(update({ status: 'ERROR' }));
    }
  }

  const { values, handleChange, handleSubmit } = useForm(onSubmit);

  function getBirthdate() {
    const _format = birthdate => {
      try {
        return format(parseISO(birthdate), 'yyyy-MM-dd');
      } catch (error) {
        return format(new Date(birthdate), 'yyyy-MM-dd');
      }
    };
    const _birthdate = values.birthdate || birthdate || '';
    return _birthdate === '' ? _birthdate : _format(_birthdate);
  }

  return (
    <Cell maxWidth="500px">
      <Box as="form" id="editProfile" action="" onSubmit={handleSubmit}>
        {loading ? (
          <Loader text="Updating your profile" centered={true} />
        ) : (
          <>
            <Box mb="l">
              <TextInput
                id="email"
                label="Email"
                value={values.email || email || ''}
                disabled
                mb="s"
              />
              <Checkbox
                id="allowEmail"
                label="Allow email notifications"
                onChange={handleChange}
                defaultChecked={values.allowEmail || allowEmail || false}
              />
            </Box>
            <Box mb="l">
              <TextInput
                id="phone"
                label="Phone Number"
                value={values.phone || phone || ''}
                disabled
                mb="s"
              />
              <Checkbox
                id="allowSMS"
                label="Allow text notifications"
                onChange={handleChange}
                defaultChecked={values.allowSMS || allowSMS || false}
              />
            </Box>
            <Box mb="l">
              <CampusesProvider
                Component={UserProfileCampusSelect}
                selectedCampusId={values.campusId || campusId}
                onChange={handleChange}
              />
            </Box>
            <Box mb="l">
              <UserProfileAddress
                initialValues={{
                  street: values.street || street || '',
                  city: values.city || city || '',
                  state: values.state || state || '',
                  zip: values.zip || zip || '',
                }}
                onChange={handleChange}
              />
            </Box>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, 50%)"
              gridColumnGap="l"
            >
              <BirthDateField onChange={handleChange} value={getBirthdate()} />
              <Box>
                <GenderField
                  onChange={handleChange}
                  initialValue={values.gender || gender || ''}
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Cell>
  );
}

EditUserProfile.propTypes = {
  currentPerson: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default EditUserProfile;
