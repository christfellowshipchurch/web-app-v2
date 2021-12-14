import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Box } from 'ui-kit';
import { useGroupEmailRecipients, useSearchGroupMembers } from 'hooks';
import AvatarRow from './AvatarRow';

function emptyFunc() {
  return null
}

function GroupEmailRecipientModal(props = {}) {
  const [recipients, setRecipients] = useState(props?.recipients ?? [])
  const [searchGroupMembers, { groupMembers, loading }] = useSearchGroupMembers();

  function toggle(id) {
    if (recipients?.includes(id)) {
      setRecipients(recipients.filter(gmid => gmid !== id))
    } else {
      setRecipients([
        ...recipients,
        id
      ])
    }
    
    if (typeof props?.onChange === "function") {
      props?.onChange(id)
    }
  }

  //visually display all recipients, check/uncheck 
  //after current state is accuarely showing implement the toggle
  //use groupId for both hooks 
    useEffect(() => {
      searchGroupMembers({
          variables: {
              groupId: props?.groupId,
              query: {
                  attributes: [{
                      key: "groupId",
                      values: [props?.data?.id],
                  }]
              },
          }
      })
  }, [])

  return (
    <Modal {...props} width="50%">
        <Box 
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          // Hack to position the button correctly
          mt="-16px"
          mr="-16px"
          pb="base"
        >
          {`${groupMembers.length} Selected`}
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ _: '1fr', lg: '1fr 1fr' }}
          columnGap="25px"
          rowGap="15px"
          gridColumnGap="15px"
          gridRowGap="15px"
        >
        {groupMembers.map((groupMember, i) => 
          <AvatarRow 
              key={groupMember?.id}
              id={groupMember?.id}
              photo={groupMember?.person?.photo?.uri} 
              firstName={groupMember?.person?.firstName}
              lastName={groupMember?.person?.lastName}
              selected={recipients.includes(groupMember?.id)}
              status={groupMember?.status?.label}
              toggle={toggle}
          />)}
        </Box>

    </Modal>
  );
}

GroupEmailRecipientModal.propTypes = {
  groupId: PropTypes.string.isRequired
};

GroupEmailRecipientModal.defaultProps = {};

export default GroupEmailRecipientModal;