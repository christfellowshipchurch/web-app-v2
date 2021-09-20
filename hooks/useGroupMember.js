/**
 * useGroupMember.js
 *
 * Author: Caleb Panza
 * Created: Sep 10, 2021
 *
 * Hook for querying and updating a Group Member.
 */

import { gql, useQuery } from '@apollo/client';

export const GET_GROUP_MEMBER = gql`
  query getGroupMember($id: ID!) {
    node(id: $id) {
      id
      ... on GroupMember {
        id

        note

        status {
          id
          label
          inactiveReason {
            id
            value
          }
        }

        person {
          id
          birthDate
          email
          firstName
          lastName
          phoneNumber
          photo {
            uri
          }
        }
      }
    }
  }
`;

function useGroupMember(options = {}) {
  const query = useQuery(GET_GROUP_MEMBER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return { ...query, groupMember: query?.data?.node };
}

export default useGroupMember;
