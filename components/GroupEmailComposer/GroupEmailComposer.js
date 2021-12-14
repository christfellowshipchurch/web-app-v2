/**
 * GroupEmailComposer.js
 * 
 * Author: Caleb Panza
 * Created: Dec 07, 2021
 * 
 * Email composer for a specified Group.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import take from 'lodash/take'

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, Card, Icon, RichTextEditor, SquareAvatar } from 'ui-kit'

import Styled from './GroupEmailComposer.styles'

import { useGroupEmailRecipients, useSearchGroupMembers } from 'hooks';

const Label = (props) => <Box 
    as="label"
    textTransform="uppercase"
    fontStyle="italic"
    fontWeight="bold"
    color="neutrals.600"
    fontSize="0.875rem"
    {...props}
/>

const StyledCard = (props) => <Card
    p="base"
    {...props}
/>

const GroupEmailComposer = (props = {}) => {

    const router = useRouter()
    const modalDispatch = useModalDispatch();
    const [searchGroupMembers, { groupMembers, loading }] = useSearchGroupMembers();
    const { recipients, toggleRecipient } = useGroupEmailRecipients({ 
        groupId: props?.data?.id
    })
    const [submitting, setSubmitting] = useState(false)
    const [emailBody, setEmailBody] = useState("")
    const fromEmail = "my.email@domain.com"
    const visibleRecipients = take(recipients, 7).map(rId => {
        return groupMembers.find(({id}) => rId === id);
    })
    // Attachments
    const attachments = [
        { type: "image", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "file", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "file", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
    ]
    const visibleAttachments = take(attachments, 5)
    const disabled = submitting;

    const handleSubmit = () => {
        if (submitting) return

        setSubmitting(true)
        
        setTimeout(() => {
            modalDispatch(showModal("GroupEmailComposerConfirmation", { 
                memberCount: recipients?.length ?? 0 
            }))
            setSubmitting(false)
        }, 1000);
    }

    const handleSelectRecipients = () => {
        modalDispatch(showModal("GroupEmailRecipients", { 
            groupId: props?.data?.id
        }))
    }

    useEffect(() => {
        searchGroupMembers({
            variables: {
                groupId: props?.data?.id,
                query: {
                    attributes: [{
                        key: "groupId",
                        values: [props?.data?.id],
                    }]
                },
            }
        })
    }, [])

    return <Box>
        <Box 
            display="flex"
            justifyContent="space-between"
            alignItems={{
                _: "flex-start",
                md: "flex-end"
            }}
            mb={{ _: "s", md: "l"}}
        >
            <Box  flex="1" >
                <Button 
                    ml="-1rem"
                    variant="link"
                    onClick={() => router.back()}
                >
                    &larr; Back
                </Button>
                <Box as="h1">{props?.data?.title}</Box>
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                flex="1"

            >
                <Button
                    size="s"
                    onClick={handleSubmit}
                    status={submitting ? "LOADING" : "IDLE"}
                    disabled={disabled}
                >
                    {!submitting && <Icon name="paperPlane" size="18px" />} Send
                </Button>
            </Box>
        </Box>

        <Styled.Grid>
            <Box gridArea="from-email">
                <StyledCard>
                    <Label>
                        Sender Email
                    </Label>
                    <Box
                        as="h3"
                        color="secondary"
                        mb="0"
                    >
                        {fromEmail}
                    </Box>
                </StyledCard>
            </Box>

            <Box gridArea="recipients">
                <StyledCard>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        // Hack to position the button correctly
                        mt="-16px"
                        mr="-16px"
                    >
                        <Label>
                            Recipients
                        </Label>

                        <Button
                            variant="link"
                            size="s"
                            margin="0"
                            disabled={disabled}
                            onClick={handleSelectRecipients}
                        >
                            {`${recipients?.length > 0 ? "Edit" : "Select"} Recipients`}
                        </Button>
                    </Box>
                    
                    <Box 
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                    >
                        {visibleRecipients.map((groupMember, i) => <SquareAvatar 
                            key={groupMember?.id}
                            src={groupMember?.person?.photo?.uri}
                            width="56px"
                            height="65px"
                            ml={{
                                _: i === 0 ? "-5px" : "-1.5rem",
                                md: i === 0 ? "-5px" : "-1rem",
                            }}
                            borderColor="white"
                            borderWidth="5px"
                            borderStyle="solid"
                        />)}
                        {recipients?.length > visibleRecipients?.length && <Box 
                            as="p"
                            m="xs"
                            color="neutrals.600"
                        >
                            {`+${recipients?.length - visibleRecipients?.length}`}
                        </Box>}
                    </Box>
                </StyledCard>
            </Box>

            {/* ! Might end up removing this before release */}
            <Box gridArea="attachments">
                <StyledCard>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        // Hack to position the button correctly
                        mt="-16px"
                        mr="-16px"
                    >
                        <Label>
                            Attachments
                        </Label>

                        <Button
                            variant="link"
                            size="s"
                            margin="0"
                        >
                            {`${attachments?.length > 0 ? "Edit" : "Select"} Attachments`}
                        </Button>
                    </Box>
                    
                    <Box 
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                    >
                        {visibleAttachments.map(({ type, src }, i) => <Box
                            key={`attachment-${i}`}
                            ml={i === 0 ? "-5px" : "-0.6rem"}
                            width="42px"
                            height="42px"
                            backgroundColor="secondary"
                            borderColor="white"
                            borderWidth="5px"
                            borderStyle="solid"
                            borderRadius="4px"
                        />)}

                        {attachments?.length > visibleAttachments?.length && <Box 
                            as="p"
                            m="xs"
                            color="neutrals.600"
                        >
                            {`+${attachments?.length - visibleAttachments?.length}`}
                        </Box>}
                    </Box>
                </StyledCard>
            </Box>

            <Box gridArea="email-body">
                <StyledCard>
                    <Label>
                        Email Subject
                    </Label>
                    <Button
                        variant="link"
                        size="s"
                        margin="0"
                        disabled={disabled}
                    />
                    
                    <Box 
                        position="relative"
                        mt="s"
                    >
                        <Styled.SubjectInput 
                            placeholder="Subject"
                        />
                    </Box>

                    <Box 
                        position="relative"
                        mt="base"
                    >
                        <RichTextEditor 
                            value={emailBody}
                            onChange={setEmailBody}
                        />
                    </Box>
                </StyledCard>
            </Box>
        </Styled.Grid>
    </Box>
};

GroupEmailComposer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
}
GroupEmailComposer.defaultProps = {}

export default GroupEmailComposer;