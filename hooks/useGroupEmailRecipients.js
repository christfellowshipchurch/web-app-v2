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
        console.log('heeeyyy',groupMemberId)
        if (recipientIds.includes(groupMemberId)) {
            removeRecipient(groupMemberId)
        } else { 
            addRecipient(groupMemberId)
        }
    }

    useEffect(() => {
        if (!groupId) return
        setRecipientIds(loadFromLocalStorage(groupId))
    }, [])

    return {
        recipients: recipientIds,
        toggleRecipient,
        flushRecipients: () => updateRecipientIds([]),
        setRecipients: (ids) => updateRecipientIds(ids),
    }
};

useGroupEmailRecipients.propTypes = {
    groupId: PropTypes.string.isRequired
}
useGroupEmailRecipients.defaultProps = {}

export default useGroupEmailRecipients;