/**
 * useGroupMember.js
 *
 * Author: Caleb Panza
 * Created: Sep 10, 2021
 *
 * Hook for querying and updating a Group Member.
 */

import { gql, useQuery } from '@apollo/client';

export const GROUP_MEMBER_FRAGMENT = gql`
  fragment groupMemberFragment on GroupMember {
    id

    groupRoleId

    note

    status {
      id
      label
      inactiveReason {
        id
        value
      }
    }

    role

    person {
      id
      birthDate
      email
      firstName
      lastName
      phoneNumber
      address {
        street1
        street2
        state
        city
        postalCode
      }
      photo {
        uri
      }
    }
  }
`;

export const GET_GROUP_MEMBER = gql`
  query getGroupMember($id: ID!) {
    node(id: $id) {
      id
      ...groupMemberFragment
    }
  }

  ${GROUP_MEMBER_FRAGMENT}
`;

function useGroupMember(options = {}) {
  const query = useQuery(GET_GROUP_MEMBER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return { ...query, groupMember: query?.data?.node };
}

export default useGroupMember;
