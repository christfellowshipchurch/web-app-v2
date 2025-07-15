/**
 * useGroupCoaches.js
 *
 * Author: Daniel Wood
 * Created: July 15, 2025
 *
 * Convenience hook for querying groupCoaches
 */

import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { GROUP_MEMBER_FRAGMENT } from './useGroupMember';

const GET_GROUP_COACHES = gql`
  query getGroupCoaches($groupId: ID!) {
    groupCoaches(groupId: $groupId) {
      ...groupMemberFragment
    }
  }

  ${GROUP_MEMBER_FRAGMENT}
`;

const useGroupCoaches = ({ groupId }) => {
  const { data, ...query } = useQuery(GET_GROUP_COACHES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      groupId,
    },
  });

  return {
    ...query,
    data,
    groupCoaches: data?.groupCoaches ?? [],
  };
};

useGroupCoaches.propTypes = {
  groupId: PropTypes.string.isRequired,
};
useGroupCoaches.defaultProps = {};

export default useGroupCoaches;
