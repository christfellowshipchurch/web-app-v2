import { gql, useMutation } from '@apollo/client';

export const UPDATE_CURRENT_USER = gql`
  mutation updateCurrentUserProfile(
    $profileFields: [UpdateProfileInput]!
    $address: AddressInput!
    $campusId: String!
    $communicationPreferences: [UpdateCommunicationPreferenceInput]!
  ) {
    updateProfileFields(input: $profileFields) {
      id
      firstName
      lastName
      gender
      birthDate
    }
    updateAddress(address: $address) {
      street1
      street2
      city
      state
      postalCode
    }
    updateUserCampus(campusId: $campusId) {
      id
      campus {
        id
        featuredImage {
          uri
        }
        name
      }
    }
    updateCommunicationPreferences(input: $communicationPreferences) {
      communicationPreferences {
        allowSMS
        allowEmail
      }
    }
  }
`;

function useUpdateCurrentUser(options = {}) {
  return useMutation(UPDATE_CURRENT_USER, options);
}

export default useUpdateCurrentUser;
