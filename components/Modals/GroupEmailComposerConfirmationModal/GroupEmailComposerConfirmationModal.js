/**
 * GroupEmailComposerConfirmationModal.js
 * 
 * Author: Caleb Panza
 * Created: Dec 08, 2021
 * 
 * Confirmation message for the Group Email Composer component
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useModalDispatch, hideModal } from 'providers/ModalProvider';

import { Box, Button, Icon, Modal } from 'ui-kit';

const GroupEmailComposerConfirmationModal = ({ memberCount }) => {
    const router = useRouter();
    const modalDispatch = useModalDispatch();
    const handleClose = () => {
        const cleanPath = router.asPath.split("/")

        router.push(cleanPath.filter(p => p !== "email").join("/"))
    }

    return <Modal
        onClose={handleClose}
        width="280px"
    >
        <Box 
            display="flex"
            flexDirection="column"
            gridGap="1rem"
            textAlign="center"
        >
            <Icon 
                name="paper-plane" 
                color="success" 
                size="5rem"
            />

            <Box as="h3">
                Email successfully sent{memberCount > 0 ? ` to ${memberCount} members` : ""}
            </Box>

            <Button
                onClick={() => {
                    modalDispatch(hideModal())
                    handleClose()
                }}
            >
                Done
            </Button>
        </Box>
    </Modal>
};

GroupEmailComposerConfirmationModal.propTypes = {
    memberCount: PropTypes.number
}
GroupEmailComposerConfirmationModal.defaultProps = {
    memberCount: 0
}

export default GroupEmailComposerConfirmationModal;