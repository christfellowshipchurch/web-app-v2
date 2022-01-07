/**
 * useGroupMembers.js
 *
 * Author: Caleb Panza
 * Created: Oct 11, 2021
 *
 * Convenience hook for querying groupMembers
 */

 import PropTypes from 'prop-types';
 import { useQuery } from '@apollo/client';
 import gql from 'graphql-tag';
 
 import { GROUP_MEMBER_FRAGMENT } from './useGroupMember';
 
 const GET_GROUP_MEMBERS = gql`
   query getGroupMembers($groupId: ID!) {
     groupMembers(groupId: $groupId) {
       ...groupMemberFragment
     }
   }
 
   ${GROUP_MEMBER_FRAGMENT}
 `;
 
 const useGroupMembers = ({ groupId }) => {
   const { data, ...query } = useQuery(GET_GROUP_MEMBERS, {
     fetchPolicy: 'cache-and-network',
     variables: {
       groupId,
     },
   });
 
   return {
     ...query,
     data,
     groupMembers: data?.groupMembers ?? [],
   };
 };
 
 useGroupMembers.propTypes = {
   groupId: PropTypes.string.isRequired,
 };
 useGroupMembers.defaultProps = {};
 
 export default useGroupMembers;
 