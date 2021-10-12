/**
 * useGroupLeaders.js
 *
 * Author: Caleb Panza
 * Created: Oct 11, 2021
 *
 * Convenience hook for querying groupLeaders
 */

 import PropTypes from 'prop-types';
 import { useQuery } from '@apollo/client';
 import gql from 'graphql-tag';
 
 import { GROUP_MEMBER_FRAGMENT } from './useGroupMember';
 
 const GET_GROUP_LEADERS = gql`
   query getGroupMembers($groupId: ID!) {
     groupLeaders(groupId: $groupId) {
       ...groupMemberFragment
     }
   }
 
   ${GROUP_MEMBER_FRAGMENT}
 `;
 
 const useGroupLeaders = ({ groupId }) => {
   const { data, ...query } = useQuery(GET_GROUP_LEADERS, {
     fetchPolicy: 'cache-and-network',
     variables: {
       groupId,
     },
   });
 
   return {
     ...query,
     data,
     groupLeaders: data?.groupLeaders ?? [],
   };
 };
 
 useGroupLeaders.propTypes = {
   groupId: PropTypes.string.isRequired,
 };
 useGroupLeaders.defaultProps = {};
 
 export default useGroupLeaders;
 