import React from 'react';
import PropTypes from 'prop-types';

import { CampusesProvider } from '../../providers';
import { useUserProfile, update } from '../../providers/UserProfileProvider';
import { useForm, useUpdateCurrentUser } from '../../hooks';
import { Box, Cell, Loader } from '../../ui-kit';
import UserProfileCampusSelect from './UserProfileCampusSelect';

function EditUserProfile(props = {}) {
  const [{ user }, dispatch] = useUserProfile();
  const [updateCurrentPerson, { loading }] = useUpdateCurrentUser({
    // TODO: Update the cache.
    onCompleted: () => dispatch(update({ status: 'SUCCESS' })),
  });
  const { campusId, birthdate, gender, email, phone } = user;

  const { values, handleChange, handleSubmit } = useForm(() => {
    try {
      updateCurrentPerson({
        variables: {
          profileFields: [
            { field: 'Gender', value: values.gender || gender || 'Unknown' },
            { field: 'BirthDate', value: values.birthdate || birthdate || '' },
            {
              field: 'PhoneNumber',
              value: values.phone || phone || '',
            },
            { field: 'Email', value: values.email || email || '' },
          ],
          address: {
            street1: '',
            street2: '',
            city: '',
            state: '',
            postalCode: '',
          },
          campusId: values.campus || campusId || '',
          communicationPreferences: [
            { type: 'SMS', allow: values.allowSMS || false },
            { type: 'Email', allow: values.allowEmail || false },
          ],
        },
      });
    } catch (error) {
      console.log(error);
      dispatch(update({ status: 'ERROR' }));
    }
  });

  return (
    <Cell maxWidth="500px">
      <Box as="form" id="editProfile" action="" onSubmit={handleSubmit}>
        {loading ? (
          <Loader text="Updating your profile" centered={true} />
        ) : (
          <>
            <CampusesProvider
              Component={UserProfileCampusSelect}
              selectedCampusId={values.campusId || campusId}
              onChange={handleChange}
            />
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
