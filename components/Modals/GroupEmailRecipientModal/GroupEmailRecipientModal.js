import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Box, Button } from 'ui-kit';
import take from 'lodash/take'
import { useGroupEmailRecipients, useSearchGroupMembers } from 'hooks';
import AvatarRow from './AvatarRow';

function GroupEmailRecipientModal(props = {}) {
  // console.log('this works', props)
  const { recipients, toggleRecipient } = useGroupEmailRecipients({ 
    groupId: props?.groupId
  })
  const [searchGroupMembers, { groupMembers, loading }] = useSearchGroupMembers();

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
          {/* <Button
            variant="link"
            size="s"
            margin="0"
          >
          Done
        </Button> */}
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ _: '1fr', md: '1fr 1fr' }}
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
              toggle={() => toggleRecipient(groupMember?.id)}
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