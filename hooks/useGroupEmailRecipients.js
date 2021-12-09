/**
 * useGroupEmailRecipients.js
 * 
 * Author: Caleb Panza
 * Created: Dec 09, 2021
 * 
 * Hook for fetching and setting the local state of the current selection of Group Members when composing an email
 */

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useReactiveVar } from '@apollo/client'
import { groupEmailRecipientsVar } from 'lib/apolloClient/localStorage';
import useSearchGroupMembers from './useSearchGroupMembers'

function loadFromLocalStorage(groupId) {
    try {
        const local = JSON.parse(localStorage.getItem(`egr:${groupId}`))

        if (Array.isArray(local)) return local
    } catch (e) {

    }

    return []
}

const useGroupEmailRecipients = ({ groupId }) => {
    const [recipientIds, setRecipientIds] = useState([])
    const [searchGroupMembers, { groupMembers }] = useSearchGroupMembers()

    const recipients = groupMembers.filter(({ id }) => recipientIds.includes(id))

    function updateRecipientIds(newIds) {
        setRecipientIds(newIds)
        localStorage.setItem(`egr:${groupId}`, JSON.stringify(newIds))
    }

    function addRecipient(groupMemberId) {
        const newRecipients = [
            ...recipientIds,
            groupMemberId
        ]

        updateRecipientIds(newRecipients)
    }

    function removeRecipient(groupMemberId) {
        const filtered = recipientIds.filter(id => id !== groupMemberId)
        
        updateRecipientIds(filtered)
    }

    function toggleRecipient(groupMemberId) {
        if (recipientIds.includes(groupMemberId)) {
            removeRecipient(groupMemberId)
        } else { 
            addRecipient(groupMemberId)
        }
    }

    useEffect(() => {
        try {
            const local = JSON.parse(localStorage.getItem(`egr:${groupId}`))

            if (!Array.isArray(local)) {
                const ids = groupMembers
                    .filter(gm => gm?.status?.label?.toUpperCase() === "ACTIVE")
                    .map(({ id }) => id)
                
                updateRecipientIds(ids)
            }
        } catch (e) {
            const ids = groupMembers
                .filter(gm => gm?.status?.label?.toUpperCase() === "ACTIVE")
                .map(({ id }) => id)
            
            updateRecipientIds(ids)
        }
    }, [groupMembers])

    useEffect(() => {
        if (!groupId) return

        setRecipientIds(loadFromLocalStorage(groupId))
        
        searchGroupMembers({
            variables: {
              groupId,
              query: {
                attributes: [
                    { key: 'groupId', values: [groupId] },
                ],
              },
            },
          });
    }, [])

    return {
        recipients,
        toggleRecipient,
        groupMembers
    }
};

useGroupEmailRecipients.propTypes = {
    groupId: PropTypes.string.isRequired
}
useGroupEmailRecipients.defaultProps = {}

export default useGroupEmailRecipients;